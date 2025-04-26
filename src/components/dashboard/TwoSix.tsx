import React, { useState } from 'react';
import HeaderAndSearch from './HeaderAndSearch';
import { Footer } from '../layout/Footer';
import AnimatedCounter from '../ui/animatedcounter';

const TwoSix: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'package' | 'students'>('recent');

  const data = [
    {
      "company_name": "Google",
      "package": "12 LPA",
      "students_placed": 0
    },
    {
      "company_name": "Microsoft",
      "package": "11 LPA",
      "students_placed": 0
    },
    {
      "company_name": "Amazon",
      "package": "10 LPA",
      "students_placed": 0
    },
    {
      "company_name": "Facebook",
      "package": "13 LPA",
      "students_placed": 0
    },
    {
      "company_name": "Apple",
      "package": "14 LPA",
      "students_placed": 0
    },
    {
      "company_name": "Netflix",
      "package": "15 LPA",
      "students_placed": 0
    }
  ];

  // Calculate total number of students placed
  const totalStudentsPlaced = data.reduce((total, company) => total + company.students_placed, 0);

  // Calculate placement percentage
  const placementPercentage = (totalStudentsPlaced / 270) * 100;

  // Filter and sort data based on search term and sort criteria
  const filteredData = data
    .filter(company => company.company_name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'package') {
        const packageA = parseFloat(a.package.replace(/[^0-9.]/g, ''));
        const packageB = parseFloat(b.package.replace(/[^0-9.]/g, ''));
        return packageB - packageA;
      } else if (sortBy === 'students') {
        return b.students_placed - a.students_placed;
      } else {
        return 0; // Default sort by recent (no specific sorting)
      }
    });

  return (
    <>
      <div className='max-w-7xl mx-auto px-4 bg-white dark:bg-black pt-[110px] min-h-screen'>
        <div className="fixed p-3 top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800">
          <HeaderAndSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>

        {/* Display total number of students placed */}
        {/* <div className="total-offers bg-zinc-200 dark:bg-zinc-900 lg:rounded-[2rem] rounded-[24px] px-4 py-2 md:p-6 mb-4 md:mb-8 flex justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <div>
              <h3 className="lg:text-2xl text-lg font-bold text-black dark:text-gray-300">Total ENTC Offers</h3>
              <p className='text-[12px] text-slate-600 italic'>Percentage of placed* : {placementPercentage.toFixed(2)}%</p>
            </div>

            <span className="text-xl font-bold bg-blue-100 dark:bg-slate-800 dark:text-gray-300 border-2 border-blue-500 w-12 h-12 p-3 rounded-full flex items-center justify-center"><AnimatedCounter value={totalStudentsPlaced} /></span>
          </div>
        </div> */}
        
        {/* Coming Soon Section */}
        <div className="flex flex-col items-center justify-center py-12">
          <div className="max-w-md w-full bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8 text-center border border-gray-200 dark:border-gray-700">
            <div className="mb-6">
              <div className="w-20 h-20 mx-auto bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Coming Soon</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Placement data for the 2026 batch will be updated here once the placement season begins.
            </p>
            
            
          </div>
        </div>

        {/* Hidden data section (commented out) */}
        {/* <div className="text-black dark:text-gray-300">No students have been placed yet. This section will be updated accordingly.</div> */}
        {/* <div className="font-extrabold text-white flex justify-start items-end gap-2">
            Batch <span className='text-5xl'>
            202<span className="text-orange-600">6</span>.
            </span>
        </div> */}
        {/* <div>
          {filteredData.map((company, index) => (
            <div key={index} className="ml-2 mr-4 my-2 dark:border-slate-800 relative">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg lg:text-xl font-bold text-black dark:text-gray-200">
                    {company.company_name}
                  </h3>
                  <p className="text-gray-600 flex dark:text-gray-400 lg:text-lg text-sm">
                    <div className='lg:w-28 mr-2 flex'> {company.package} </div>
                  </p>
                </div>
                <div className="student-count relative flex items-center justify-center rounded-full bg-purple-100 dark:bg-slate-800 border-green-400 dark:border-green-700 w-16 h-16 p-4 border-2">
                  <span className="text-2xl font-bold dark:text-gray-300">
                    {company.students_placed}
                  </span>
                </div>
              </div>
              <div className='border-b border-slate-200 dark:border-slate-800' />
            </div>
          ))}
        </div> */}
        {/* <p className='text-gray-200 mt-2'>and many more....</p> */}
      </div>
      <Footer />
    </>
  );
};

export default TwoSix;