import React, { useState } from 'react';
import HeaderAndSearch from './HeaderAndSearch';
import { Footer } from '../layout/Footer';
import AnimatedCounter from '../ui/animatedcounter';

const TwoFour: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'package' | 'students'>('recent');

  const data = [
    {
      "company_name": "Amdocs",
      "package": "5.3 LPA",
      "students_placed": 2
    },
    {
      "company_name": "Accenture",
      "package": "6.5 LPA",
      "students_placed": 5
    },
    {
      "company_name": "Hexaware Technologies",
      "package": "4 LPA",
      "students_placed": 1
    },
    {
      "company_name": "IBM",
      "package": "4.5 LPA",
      "students_placed": 1
    },
    {
      "company_name": "Keyence",
      "package": "5.5 LPA",
      "students_placed": 1
    },
    {
      "company_name": "Omotec",
      "package": "3-4 LPA",
      "students_placed": 22
    },
    {
      "company_name": "Newgen",
      "package": "4 LPA",
      "students_placed": 3
    },
    {
      "company_name": "Rockwell Automation",
      "package": "6.25 LPA",
      "students_placed": 6
    },
    {
      "company_name": "Worldline",
      "package": "6 LPA",
      "students_placed": 1
    },
    {
      "company_name": "Persistent Systems",
      "package": "6 LPA",
      "students_placed": 1
    },
    {
      "company_name": "Vodafone Idea Ltd",
      "package": "4 LPA",
      "students_placed": 10
    },
    {
      "company_name": "NeuAI",
      "package": "4 LPA",
      "students_placed": 14
    },
    {
      "company_name": "Smartscripts",
      "package": "4 LPA",
      "students_placed": 3
    },
    {
      "company_name": "Ansuman Tech",
      "package": "0.90 LPA",
      "students_placed": 2
    },
    {
      "company_name": "Kota Rankers Point",
      "package": "1.8 LPA",
      "students_placed": 10
    },
    {
      "company_name": "Sedemac",
      "package": "3.5 LPA",
      "students_placed": 6
    },
    {
      "company_name": "BP",
      "package": "3.6 LPA",
      "students_placed": 2
    },
    {
      "company_name": "Capgemini Excellar",
      "package": "4.5 LPA",
      "students_placed": 1
    },
    {
      "company_name": "Byju's",
      "package": "8 LPA",
      "students_placed": 1
    },
    {
      "company_name": "Bosch",
      "package": "3 LPA",
      "students_placed": 1
    },
    {
      "company_name": "Mahindra and Mahindra",
      "package": "4.25 LPA",
      "students_placed": 11
    },
    {
      "company_name": "Cognizant",
      "package": "4 LPA",
      "students_placed": 4
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
      <div className='max-w-7xl mx-auto px-4 bg-white dark:bg-black pt-[110px]'>
        <div className="fixed p-3 top-0 left-0 right-0 z-50 bg-white dark:bg-black">
          <HeaderAndSearch
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        </div>

        {/* Display total number of students placed */}
        
        <div className="total-offers bg-zinc-200 dark:bg-zinc-900 lg:rounded-[2rem] rounded-[24px] px-4 py-2 md:p-6 mb-4 md:mb-8 flex justify-between items-center">
          <div className="flex justify-between items-center w-full">
            <div>
              <h3 className="lg:text-2xl text-lg font-bold text-black dark:text-gray-300">Total ENTC Offers</h3>
              <p className='text-[12px] text-slate-600 italic'>Percentage of placed* : {placementPercentage.toFixed(2)}%</p>
            </div>

            <span className="text-xl font-bold bg-blue-100 dark:bg-slate-800 dark:text-gray-300 border-2 border-blue-500 w-12 h-12 p-3 rounded-full flex items-center justify-center"><AnimatedCounter value={totalStudentsPlaced} /></span>
          </div>
        </div>
        
        <p className="pt-2 text-gray-700 dark:text-gray-400 text-[12px] border-b border-zinc-800 py-2">
          This is the dashboard for the year 2024 batch.
          Due to the availability of only SCOE ENTC data, it is displayed here. If you have any relevant data for other STES branches or colleges, please share them via email by clicking on "Click here" near sponsor label in the footer below.
        </p>
        
        <div>
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
        </div>
          <p className='text-gray-200 mt-2'>and many more....</p>
        <Footer />
      </div>
    </>
  );
};

export default TwoFour;
