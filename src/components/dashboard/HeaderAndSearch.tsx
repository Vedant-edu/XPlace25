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
    navigate(`/${year}`); // Use react-router navigation instead of window.location
  };

  return (
    <>
      <div className='flex justify-between mb-1 px-1'>
        <h1 className="lg:text-2xl text-md font-extrabold py-2 ml-1 text-black dark:text-gray-300">
          <span className="text-orange-500">X</span>Place
        </h1>
        <div className='flex justify-center items-center'>
          <div className='relative'>
            <select
              className='bg-slate-100 dark:text-gray-500 dark:bg-zinc-900 w-20 mr-3 rounded-[12px] text-center appearance-none'
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
            </select>
            <svg
              className='absolute right-2 mr-2 top-1/2 transform -translate-y-1/2 pointer-events-none'
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <div><ThemeToggle /></div>
        </div>
      </div>
      <div className="lg:pl-6 search-container relative flex items-center w-full max-w-3xl mx-auto mt-0 md:mt-8 gap-1">
        <div className='pr-2 text-[16px] bg-gray-100 dark:bg-zinc-900 flex rounded-full items-center w-full text-semibold'>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search companies ...."
            className="h-10 pr-4 w-full lg:text-lg text-sm font-medium outline-none shadow-none placeholder-gray-500 pl-3 text-black dark:text-gray-300 bg-transparent"
          />
          <div className="">
            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderAndSearch;
