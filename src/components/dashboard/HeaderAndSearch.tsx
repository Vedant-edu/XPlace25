import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ThemeToggle from '../ui/theme-toggle';
import { SortDropdown } from '../filters/SortDropdown';

const HeaderAndSearch: React.FC<{
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortBy: 'recent' | 'package' | 'students';
  setSortBy: (value: 'recent' | 'package' | 'students') => void;
}> = ({ searchTerm, setSearchTerm, sortBy, setSortBy }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedYear, setSelectedYear] = useState('2025');

  useEffect(() => {
    if (location.pathname.includes('2024')) {
      setSelectedYear('2024');
    } else if (location.pathname.includes('2026')) {
      setSelectedYear('2026');
    } else {
      setSelectedYear('2025');
    }
  }, [location.pathname]);

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = e.target.value;
    setSelectedYear(year);
    if (year === '2025') {
      navigate('/'); // Route to / for 2025
    } else {
      navigate(`/${year}`); // Use react-router navigation for other years
    }
  };

  return (
    <div className="w-full">
      <div className='flex justify-between items-center mb-2 px-1'>
        <div className="flex items-center">
          <h1 className="text-lg font-extrabold text-gray-800 dark:text-white">
            <span className="text-orange-500">X</span>Place
          </h1>
          
        </div>
        
        <div className='flex items-center space-x-3'>
          <div className='relative'>
            <select
              className='bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none'
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
            <svg
              className='absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400'
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <ThemeToggle />
        </div>
      </div>

      <div className="relative w-full max-w-3xl mx-auto">
        <div className='relative flex items-center rounded-3xl shadow-sm border border-gray-300 dark:border-gray-700  transition-all duration-200'>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search companies..."
            className="h-12 w-full px-4 text-gray-800 dark:text-gray-200 bg-transparent outline-none placeholder-gray-500 dark:placeholder-gray-400 text-sm md:text-base"
          />
          <div className="absolute right-2">
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderAndSearch;