'use client';

import {usePathname, useRouter} from 'next/navigation';
import {useState, useRef, useEffect} from 'react';

const languages = [
  {code: 'en', short: 'EN', full: 'English'},
  {code: 'de', short: 'DE', full: 'Deutsch'}
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const segments = pathname.split('/');
  const currentLocale = segments[1];

  const switchLocale = (locale: string) => {
    const newSegments = [...segments];
    newSegments[1] = locale;
    router.replace(newSegments.join('/'));
    setOpen(false);
  };

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

  const current = languages.find(l => l.code === currentLocale);

  return (
    <div className="relative" ref={ref}>
      {/* Trigger */}
      <button
        onClick={() => setOpen(prev => !prev)}
        className={`
          h-10 px-4
          rounded-2xl
          border border-gray-300
          bg-white
          text-sm font-medium
          transition
          hover:bg-gray-50
          ${open ? 'border-gray-400 bg-gray-50' : ''}
        `}
      >
        {current?.short ?? 'EN'}
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="
            absolute right-0 mt-2 w-40
            bg-white
            border border-gray-200
            rounded-2xl
            shadow-sm
            overflow-hidden
          "
        >
          {languages.map(lang => (
            <button
              key={lang.code}
              onClick={() => switchLocale(lang.code)}
              className={`
                w-full text-left px-4 py-2 text-sm transition
                ${
                  currentLocale === lang.code
                    ? 'bg-gray-100 font-semibold'
                    : 'hover:bg-gray-50'
                }
              `}
            >
              {lang.full}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}