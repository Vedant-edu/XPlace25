import { useState } from 'react';

function Announcement() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div>
      <div className="text-center p-1 bg-gray-400 dark:bg-yellow-950 flex justify-between items-center gap-4">
        <p className="text-sm font text-white dark:text-gray-300 flex-1">
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