import { useState } from 'react';

const SponsorLink = () => {
  const [isVisible, setIsVisible] = useState(true);

  const email = "v7374757677@gmail.com"; 
  const subject = encodeURIComponent("Sponsorship Inquiry");
  const body = encodeURIComponent("Hello,\n\nI would like to sponsor. Please provide me with further details.\n\nThank you.");
  
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  if (!isVisible) return null;

  return (
   <div className="text-center p-1 bg-gray-400 dark:bg-stone-800 flex justify-between items-center gap-4">
  <p className="text-sm font text-white dark:text-gray-300 flex-1">
    Would you like to sponsor?{' '}
    <a href={mailtoLink} className="text-blue-200 underline">Click here</a>
  </p>
  <button onClick={() => setIsVisible(false)} className="text-white h-8 w-8">
    <svg viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
      <g id="SVGRepo_iconCarrier">
        <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#ffffff" stroke-width="1.5"></circle>
        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
      </g>
    </svg>
  </button>
</div>
  );
};

export default SponsorLink;
