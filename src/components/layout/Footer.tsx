import { useState } from 'react';

export function Footer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <footer className="border-t border-white dark:border-gray-800 mt-8 ">
      <div className="container py-8">
        <div className="flex flex-col items-center bg-stone-100 dark:bg-stone-800 p-4 m-2 mb-4 rounded-3xl">
          <span className="text-sm text-gray-600 dark:text-gray-600 text-center mb-2 font-semibold">Our Sponsor</span>
          <div className="flex items-center gap-4 mt-4">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=346,h=385,fit=crop/AoPvPyDBKgiwjxD9/layer-0-ALpnDR277JIqJk1X.png"
              alt="TDL Techsphere"
              className="w-16 h-16 object-cover rounded-full dark:invert"
            />
            <span className="text-2xl font-extrabold text-gray-600 dark:text-gray-300">
              <a href="https://tdltechsphere.com/">TDL Techsphere</a>
            </span>
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-black dark:text-gray-300"><span className='text-orange-500'>X</span>Place'25</span>
          </div>
          <p className="text-sm text-gray-600 flex justify-between w-full">
            &copy; 2024, All rights reserved
            <button onClick={() => setShowDisclaimer(true)} className="text-blue-500 underline dark:text-blue-700">Disclaimer</button>
          </p>
          {showDisclaimer && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center h-screen">
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-2 dark:text-gray-300">Disclaimer</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  The information provided on this platform is for general informational purposes only. All information on the platform is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the platform.
                </p>
                <button onClick={() => setShowDisclaimer(false)} className="mt-4 text-blue-500 underline dark:text-blue-700">Close</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </footer>
  );
}