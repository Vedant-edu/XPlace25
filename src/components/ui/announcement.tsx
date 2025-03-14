import { useState, useEffect } from 'react';

function Announcement() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="transition-all duration-500 ease-in-out" style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}>
      <div className="text-center py-3  bg-gray-400 dark:bg-emerald-900/50 flex justify-between items-center gap-4">
      
        <p className="text-[12px] font text-white dark:text-gray-300 flex-1">
          Checkout Magazine by TDL Techsphere.{' '}
          <a href="https://techsphereinsights.in/" className="text-blue-200 underline">view here</a>
        </p>
        <button className="text-white h-8 w-8" onClick={() => setVisible(false)}>
          <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
            <g id="SVGRepo_iconCarrier">
              <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="1.5"></circle>
              <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Announcement;