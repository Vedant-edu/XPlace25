import { useState } from 'react';

export function Footer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <footer className="border-t border-white dark:border-gray-800 mt-8 ">
      <div className="container py-8">
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
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  It is also important to note that the information available on this platform is primarily sourced from open channels such as LinkedIn and other publicly accessible resources. We are not affiliated with any organization, and the data presented here is not endorsed or verified by any corporate entity. Users should exercise their own judgment and discretion when interpreting the information provided.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  This website is for reference purposes and can be closed if anyone feels inappropriate. Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the platform or reliance on any information provided on the platform. Your use of the platform and your reliance on any information on the platform is solely at your own risk. We encourage users to cross-verify the information with official sources and remain informed about any updates or changes that may occur.
                </p>
                <button onClick={() => setShowDisclaimer(false)} className="text-blue-500 underline mt-2">Close</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}