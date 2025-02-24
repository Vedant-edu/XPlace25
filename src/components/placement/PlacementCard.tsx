import { PlacementData } from '@/types';
import AnimatedCounter from '../ui/animatedcounter';

interface PlacementCardProps {
  data: PlacementData;
  activeTab: 'entc' | 'scoe' | 'all';
}

export function PlacementCard({ data, activeTab }: PlacementCardProps) {
  const displayCount = 
    activeTab === 'entc' ? data.entc_students :
    activeTab === 'scoe' ? data.scoe_students :
    data.total_students;

  if (activeTab === 'entc' && data.entc_students === 0) return null;
  if (activeTab === 'scoe' && data.scoe_students === 0) return null;

  return (
    <div className="bg-zinc-200 dark:bg-zinc-900 px-6 py-4 lg:rounded-lg rounded-sm relative ">
      <div className="flex justify-between items-center ">
        <div className=" ">
          <h3 className="text-xl lg:text-2xl font-bold text-black dark:text-gray-200">{data.company_name}</h3>
          <p className="text-gray-600 flex dark:text-gray-400 lg:text-lg text-sm">
           <div className='w-16 flex'> {data.package} LPA </div>
            {activeTab === 'all' && (
              <>
                <span className='px-2 bg-green-100 dark:bg-emerald-900 text-sm rounded-lg'> ENTC: {data.entc_students} </span>
                <span className='ml-2 px-2 bg-sky-100 dark:bg-slate-900 text-sm rounded-lg'> SCoE: {data.scoe_students}</span>
              </>
            )}
          </p>
        </div>
        <div className={`student-count relative flex items-center justify-center rounded-full 
  ${activeTab === 'entc' 
    ? 'bg-green-100 dark:bg-emerald-950 border-green-400 dark:border-green-800' 
    : activeTab === 'scoe' 
    ? 'bg-blue-100 dark:bg-slate-800  border-red-900 dark:border-blue-800' 
    : 'bg-purple-100 dark:bg-slate-800 border-purple-400 dark:border-purple-700'
  } w-16 h-16 p-4 border-2 `}
>
          <span className="text-2xl font-bold dark:text-gray-300">{displayCount}</span>
        </div>
      </div>
    </div>
  );
}