import { ArrowUpDown, SlidersHorizontal } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface SortDropdownProps {
  value: 'recent' | 'package' | 'students';
  onChange: (value: 'recent' | 'package' | 'students') => void;
}

export function SortDropdown({ value, onChange }: SortDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const options = [
    { value: 'recent', label: 'Recently Added' },
    { value: 'package', label: 'Package (High to Low)' },
    { value: 'students', label: 'Number of Students' },
  ] as const;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex p-[6px] items-center gap-2 rounded-md ${isOpen ? ' dark:bg-zinc-900' : 'bg-zinc-200 dark:bg-zinc-800'}   dark:text-gray-400`}
      >
        <SlidersHorizontal className="h-4 w-4" />
      
      </button>
      
      {isOpen && (
        <div className={`absolute ${isOpen ? 'bg-gray-300 dark:bg-zinc-900' : 'bg-gray-300 dark:bg-zinc-700'} right-0 top-full mt-2 w-48 rounded-sm border border-gray-400 dark:border-zinc-700 p-1 shadow-lg z-50`}>
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
              className="flex w-full items-center rounded-sm px-3 py-2 text-sm transition-colors hover:bg-gray-200 dark:hover:bg-zinc-800"
            >
              <p className='text-black dark:text-gray-300'>{option.label}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}