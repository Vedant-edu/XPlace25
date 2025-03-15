import { useState } from 'react';
import SponsorLink from '../ui/SponsorLink';
import Svglume from './svg';

export function Footer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  return (
    <footer className="dark:bg-zinc-950 border-white dark:border-gray-800">
      <div className="container py-8">
        <div className="flex flex-col items-center bg-stone-100 dark:bg-gray-950/90 pt-2 rounded-tl-3xl rounded-tr-3xl">
          <span className="text-sm text-gray-600 dark:text-gray-600 text-center  font-semibold">Our Sponsors</span>

         <div className="flex gap-10 ">
         <div className="flex items-center  gap-4">
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=346,h=385,fit=crop/AoPvPyDBKgiwjxD9/layer-0-ALpnDR277JIqJk1X.png"
              alt="TDL Techsphere"
              className="w-16 h-16 object-cover rounded-full dark:invert"
            />
            <span className="text-sm font-extrabold text-gray-600 dark:text-gray-300">
              <a href="https://tdltechsphere.com/">TDL <br /> Techsphere</a>
            </span>
          </div>
          <div className="flex items-center justify-center">
            
            
              <a href="https://lumedesigns.in/"><Svglume/></a>
            
          </div>
         </div>
        </div>
        <SponsorLink/>

        <div className="mt-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-black dark:text-gray-300"><span className='text-orange-500'>X</span>Place</span>
          </div>
          <p className="text-sm text-gray-600 flex justify-between w-full">
            &copy; 2025, All rights reserved
            <button onClick={() => setShowDisclaimer(true)} className="text-blue-500 underline dark:text-blue-700">Disclaimer</button>
          </p>
          {showDisclaimer && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center h-screen">
              <div className="bg-white dark:bg-zinc-900 p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-2 dark:text-gray-300">Disclaimer</h2>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  The information provided on this platform is for general informational purposes only. All information on the platform is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the platform.
                  <br />
                  It is important to note that the information available on this platform is primarily sourced from open channels such as LinkedIn and other publicly accessible resources. We are not affiliated with any organization, and the data presented here is not endorsed or verified by any corporate entity. Users should exercise their own judgment and discretion when interpreting the information provided.
                  <br />
                  Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the platform or reliance on any information provided on the platform. Your use of the platform and your reliance on any information on the platform is solely at your own risk. We encourage users to cross-verify the information with official sources and remain informed about any updates or changes that may occur.
                  <br />

                  <p className="italic mt-4 text-slate-400">
                    * The placement percentage is calculated based on the available data of intake seats. The evaluation is done using the formula: percentage = (number of students placed / total intake seats) * 100. This calculation is not based on the eligible students for placement.
                  </p>

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