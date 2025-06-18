import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { supabase } from '@/lib/supabase';
import { PlacementData } from '@/types';
import { PlacementCard } from '../placement/PlacementCard';
import { Footer } from '../layout/Footer';
import Pop from '../ui/Pop';
import AnimatedCounter from '../ui/animatedcounter';
import HeaderAndSearch from './HeaderAndSearch';

export function PlacementDashboard() {
  const [activeTab, setActiveTab] = useState<'entc' | 'scoe' | 'stes'>('stes');
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<PlacementData[]>([]);
  const [sortBy, setSortBy] = useState<'recent' | 'package' | 'students'>('recent');
  const location = useLocation();

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

  // Calculate totals
  const totalOffers = data.reduce((acc, curr) => {
    if (activeTab === 'entc') return acc + curr.entc_students;
    if (activeTab === 'scoe') return acc + curr.scoe_students;
    return acc + curr.total_students;
  }, 0);

  // Calculate placement percentage
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
    case 'stes':
      totalPlaced = data.reduce((acc, curr) => acc + curr.total_students, 0);
      totalCapacity = 5000;
      break;
  }

  const placementPercentage = totalCapacity ? (totalPlaced / totalCapacity) * 100 : 0;

  // Tab configuration with gradient backgrounds
  const tabs = [
    {
      id: 'stes',
      label: 'STES',
      gradient: 'from-purple-500 to-purple-600',
      activeGradient: 'from-purple-600 to-purple-700'
    },
    {
      id: 'entc',
      label: 'ENTC',
      sublabel: 'SCOE',
      gradient: 'from-green-500 to-green-600',
      activeGradient: 'from-green-600 to-green-700'
    },
    {
      id: 'scoe',
      label: 'SCOE',
      gradient: 'from-blue-500 to-blue-600',
      activeGradient: 'from-blue-600 to-blue-700'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 pt-2">
{/*       <Pop /> */}
      <main className="container mx-auto px-4 flex-1">
        <HeaderAndSearch
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        {/* Enhanced Tab Navigation */}
        <div className="flex flex-col gap-2 my-4">
          <div className="flex items-center space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-3 py-1 rounded-lg text-xs font-medium ${activeTab === tab.id
                    ? `${tab.id === 'stes' ? 'bg-purple-600' :
                      tab.id === 'entc' ? 'bg-green-600' :
                        'bg-blue-600'
                    } text-white`
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                  }`}
              >
                {tab.label}
                {tab.sublabel && <sup className="ml-0.5 text-[0.6rem]">{tab.sublabel}</sup>}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Link
              to="/companies-visited"
              className="flex items-center text-xs text-blue-600 dark:text-blue-400 hover:underline px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded sm:bg-transparent sm:dark:bg-transparent sm:px-0 sm:py-0"
            >
              STES visited Companies
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
            <Link
              to="/placed-students-feedback"
              className="flex items-center text-xs text-blue-600 dark:text-blue-400 hover:underline px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded sm:bg-transparent sm:dark:bg-transparent sm:px-0 sm:py-0"
            >
              Students Feedback
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </Link>
          </div>
        </div>
        {/* Simplified Stats Dashboard */}
        <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl px-4 py-1 lg:py-3 border border-gray-200 dark:border-gray-700 mb-4">
          <div className="flex  justify-between items-center">
            <div className="text-left md:text-left md:mb-0">
              <h2 className="text-lg  font-bold text-gray-800 dark:text-white">
                Total {activeTab.toUpperCase()} Offers
              </h2>
              <p className="text-[12px] lg:text-sm text-gray-600 dark:text-gray-500">Percentage of placed
                : {placementPercentage.toFixed(2)}%
              </p>
            </div>
            {/* <p className='text-gray-300 dark:text-gray-700 text-4xl'>|</p> */}
            <div className="flex items-center">
              <div className="h-8 border-r border-gray-300 dark:border-gray-600 mx-6 "></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 dark:text-white">
                  {totalPlaced}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Placement Cards Grid */}
        <div className="grid gap-1">
          {sortedAndFilteredData.length > 0 ? (
            sortedAndFilteredData.map((item) => (
              <PlacementCard
                key={item.id}
                data={item}
                activeTab={activeTab === 'stes' ? 'all' : activeTab}
              />
            ))
          ) : (
            <div className=" rounded-xl p-8 text-center ">

              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">No data found</h3>
              <p className="mt-1 text-gray-500 dark:text-gray-400">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
