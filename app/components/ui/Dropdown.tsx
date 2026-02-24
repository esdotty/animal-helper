'use client';

import {useState, useRef, useEffect} from 'react';

type Option = {
  value: string;
  label: string;
};

type Props = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  placeholder?: string;
};

export default function Dropdown({
  value,
  onChange,
  options,
  placeholder
}: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selected = options.find(o => o.value === value);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={ref}>
      {/* Trigger */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className="
          w-full h-12 px-4
          rounded-2xl
          border border-gray-300
          bg-white
          text-left
          text-sm
          transition
          hover:bg-gray-50
        "
      >
        {selected?.label ?? placeholder ?? 'Select'}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="
          absolute z-10 mt-2 w-full
          bg-white
          border border-gray-200
          rounded-2xl
          shadow-sm
          overflow-hidden
        ">
          {options.map(option => (
            <button
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`
                w-full text-left px-4 py-2 text-sm transition
                ${
                  option.value === value
                    ? 'bg-gray-100 font-semibold'
                    : 'hover:bg-gray-50'
                }
              `}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}