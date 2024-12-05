import { useState, useEffect } from 'react';

import { supabase } from '@/lib/supabase';
import { PlacementData } from '@/types';
import { Search} from 'lucide-react';
import { PlacementCard } from '../placement/PlacementCard';
import { SortDropdown } from '../filters/SortDropdown';
import { Pagination } from '../ui/Pagination';
import { Footer } from '../layout/Footer';
import ThemeToggle from '../ui/theme-toggle';

export function PlacementDashboard() {
  const [activeTab, setActiveTab] = useState<'entc' | 'scoe' | 'all'>('entc');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<PlacementData[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'package' | 'students'>('recent');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data: placementsData, error } = await supabase
        .from('placements')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (placementsData) setData(placementsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const sortedAndFilteredData = data
    .filter(item => 
      item.company_name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'package':
          return b.package - a.package;
        case 'students':
          return b.total_students - a.total_students;
        default:
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      }
    });

  const totalPages = Math.ceil(sortedAndFilteredData.length / itemsPerPage);
  const currentData = sortedAndFilteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Calculate total offers without considering search term
  const totalOffers = data.reduce((acc, curr) => {
    if (activeTab === 'entc') return acc + curr.entc_students;
    if (activeTab === 'scoe') return acc + curr.scoe_students;
    return acc + curr.total_students;
  }, 0);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
      <main className="container mt-2 flex-1 ">
        <div className="flex justify-between items-center">
          <h1 className="lg:text-2xl text-lg font-extrabold py-2 ml-1 text-black dark:text-gray-300"><span className='text-orange-500'>X</span>Place'25</h1>
          <ThemeToggle/>
        </div>
        
        <div className="search-container relative w-full max-w-3xl mx-auto mt-0 md:mt-8">
          <Search className="absolute left-1 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 ml-4" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search companies...."
            className="w-full h-9 pl-12 pr-4 rounded-full border border-black lg:text-lg text-sm font-medium outline-none shadow-none placeholder-gray-500 bg-gray-100/80 dark:bg-zinc-800 text-black dark:text-gray-300 "
          />
        </div>

        <div className="tab-filter flex flex-wrap items-center justify-between gap-2 mt-3 mb-4">
          <div className='bg-gray-100 dark:bg-zinc-800 dark:text-gray-300 rounded-full'><button
            onClick={() => setActiveTab('entc')}
            className={`tab-button px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeTab === 'entc' ? 'bg-black dark:bg-gray-600 text-white' : ''}`}
          >
            ENTC
          </button>
          <button
            onClick={() => setActiveTab('scoe')}
            className={`tab-button px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeTab === 'scoe' ? 'bg-black dark:bg-gray-600 text-white' : ''}`}
          >
            SCOE
          </button>
          <button
            onClick={() => setActiveTab('all')}
            className={`tab-button px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${activeTab === 'all' ? 'bg-black dark:bg-gray-600 text-white' : ''}`}
          >
            ALL
          </button></div>
          <div className="flex-1" />
          <SortDropdown value={sortBy} onChange={setSortBy} />
        </div>

        <div className="total-offers bg-gray-200 dark:bg-zinc-800 lg:rounded-[2rem] rounded-sm px-6 py-4 md:p-6 mb-8 md:mb-8 flex justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <h3 className="lg:text-2xl text-lg font-bold text-black dark:text-gray-300">Total Offers</h3>
            <span className="text-2xl font-bold bg-blue-100 dark:bg-slate-800 dark:text-gray-300 border-2 border-blue-500 w-12 h-12 p-3 rounded-full flex items-center justify-center">{totalOffers}</span>
          </div>
        </div>

        <div className="space-y-1">
          {currentData.map((item) => (
            <PlacementCard 
              key={item.id} 
              data={item} 
              activeTab={activeTab}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </main>
      <Footer />
    </div>
  );
}