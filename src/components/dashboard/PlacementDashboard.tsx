import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { supabase } from '@/lib/supabase';
import { PlacementData } from '@/types';
import { PlacementCard } from '../placement/PlacementCard';
import { SortDropdown } from '../filters/SortDropdown';
import { Footer } from '../layout/Footer';
import ThemeToggle from '../ui/theme-toggle';
// import Announcement from '../ui/announcement';
import Pop from '../ui/Pop';
import AnimatedCounter from '../ui/animatedcounter';
// import Announcement from '../ui/announcement';

export function PlacementDashboard() {
  const [activeTab, setActiveTab] = useState<'entc' | 'scoe' | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<PlacementData[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'package' | 'students'>('recent');

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

  // Calculate total offers without considering search term
  const totalOffers = data.reduce((acc, curr) => {
    if (activeTab === 'entc') return acc + curr.entc_students;
    if (activeTab === 'scoe') return acc + curr.scoe_students;
    return acc + curr.total_students;
  }, 0);

  // Calculate placement percentage based on activeTab
  let totalPlaced = 0;
  let totalCapacity = 0;
  switch (activeTab) {
    case 'entc':
      totalPlaced = data.reduce((acc, curr) => acc + curr.entc_students, 0);
      totalCapacity = 240;
      break;
    case 'scoe':
      totalPlaced = data.reduce((acc, curr) => acc + curr.scoe_students, 0);
      totalCapacity = 1140;
      break;
    case 'all':
      totalPlaced = data.reduce((acc, curr) => acc + curr.total_students, 0);
      totalCapacity = 5000; // Assuming STES capacity is 5000 for simplicity
      break;
  }

  const placementPercentage = totalCapacity ? (totalPlaced / totalCapacity) * 100 : 0;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950">
      <Pop />
      {/* <Announcement /> */}
      <main className="container mt-2 flex-1 ">

<div className='flex justify-between'><h1 className="lg:text-2xl  text-md font-extrabold py-2 ml-1 text-black dark:text-gray-300">
          <span className="text-orange-500">X</span>Place
        </h1> <ThemeToggle/></div>
        
        <div className="lg:pl-6 search-container relative flex items-center w-full max-w-3xl mx-auto mt-0 md:mt-8 gap-1">
          <div className=' pr-2 text-[16px] bg-gray-100 dark:bg-zinc-900 flex rounded-full  items-center w-full  text-semibold'>
            {/* <span className='text-orange-500 dark font-extrabold '>X</span>
            <span className='dark:text-white'>Place</span> */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search companies ...."
            className=" h-10 pr-4 w-full  lg:text-lg text-sm font-medium outline-none shadow-none placeholder-gray-500  pl-3 text-black dark:text-gray-300 bg-transparent"
            />
            <div className="">
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
            </div>
         
          
          
        </div>

        <div className="tab-filter flex flex-wrap items-center justify-between gap-1 mt-3 mb-3 ">

          <button
            onClick={() => setActiveTab('all')}
            className={`tab-button px-3 py-1 text-black dark:text-white rounded-full text-xs font-medium transition-colors border border-gray-300 dark:border-zinc-700 ${activeTab === 'all' ? 'bg-black dark:bg-purple-900 text-white' : ''}`}
          >STES
          </button> <div className='text-gray-700 '>|</div>
          <button
            onClick={() => setActiveTab('entc')}
            className={`tab-button px-3 py-1 text-black dark:text-white rounded-full text-xs font-medium transition-colors border border-gray-300 dark:border-zinc-700 ${activeTab === 'entc' ? 'bg-black dark:bg-emerald-900 text-white' : ''}`}
          >
            ENTC <sup className='text-[6px]'>SCOE</sup>
          </button>
          <button
            onClick={() => setActiveTab('scoe')}
            className={`tab-button px-3 py-1 text-black dark:text-white rounded-full text-xs font-medium transition-colors border border-gray-300 dark:border-zinc-700 ${activeTab === 'scoe' ? 'bg-black dark:bg-blue-800 text-white' : ''}`}
          >
            SCOE
          </button>
          <div className="flex-1" />
          <div className="flex">
            <Link to="/companies-visited" className="text-blue-500 text-[10px] underline hover:text-blue-700">all companies</Link><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide text-blue-500 text-[10px] lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
          </div>
        </div>

        <div className="total-offers bg-zinc-200 dark:bg-zinc-900 lg:rounded-[2rem] rounded-[24px] px-4 py-2 md:p-6 mb-4 md:mb-8 flex justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <div>
            <h3 className="lg:text-2xl text-lg font-bold text-black dark:text-gray-300">Total {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Offers</h3>
            <p className='text-[12px] text-slate-600 italic'>Percentage of placed* : {placementPercentage.toFixed(2)}%</p>
            </div>

            <span className="text-xl font-bold bg-blue-100 dark:bg-slate-800 dark:text-gray-300 border-2 border-blue-500 w-12 h-12 p-3 rounded-full flex items-center justify-center"><AnimatedCounter value={totalOffers} duration={activeTab === 'entc' ? 5000 : 2000} /></span>
          </div>
        </div>

        <div className="space-y-1">
          {sortedAndFilteredData.map((item) => (
            <PlacementCard
              key={item.id}
              data={item}
              activeTab={activeTab}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
