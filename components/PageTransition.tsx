'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(0);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      // Incrementa a key para forçar re-render com animação suave
      setKey((prev) => prev + 1);
      prevPathnameRef.current = pathname;
    }
  }, [pathname]);

  return (
    <div key={key} className="page-fade-in">
      {children}
    </div>
  );
}

