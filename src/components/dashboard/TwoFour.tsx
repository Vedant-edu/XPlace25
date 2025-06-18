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
      <div className='w-full bg-black dark:bg-black'>
        <div className='max-w-7xl mx-auto px-4 bg-white dark:bg-black pt-[110px] min-h-screen'>
          <div className="fixed p-3 top-0 left-0 right-0 z-50 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm">
            <HeaderAndSearch
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>

          <div className="mt-6">
            {/* Stats Card */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 mb-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">2024 Batch Placements</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    SCOE ENTC Department Statistics
                  </p>
                </div>
                <div className="mt-4 md:mt-0 flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                      <AnimatedCounter value={totalStudentsPlaced} />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Total Offers</div>
                  </div>
                  <div className="h-12 border-r border-gray-300 dark:border-gray-600"></div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {placementPercentage.toFixed(1)}%
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Placement Rate</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 dark:border-yellow-600 p-4 mb-6 rounded-r-[12px]">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <span className="font-semibold">Note:</span> This dashboard currently displays only SCOE ENTC data. 
                If you have placement data for other STES branches or colleges, please share via email 
                (click "Click here" near sponsor label in footer).
              </p>
            </div>

            {/* Company List */}
            <div className="grid gap-4">
              {filteredData.map((company, index) => (
                <div key={index} className="border-b pb-3 border-gray-200 dark:border-gray-700 ">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                        {company.company_name}
                      </h3>
                      <div className="flex items-center">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                          {company.package}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="relative">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-700 dark:to-gray-800 border-2 border-green-400 dark:border-green-600">
                          <span className="text-xl font-bold text-gray-800 dark:text-white">
                            {company.students_placed}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
              Data last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default TwoFour;