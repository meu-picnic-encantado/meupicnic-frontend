'use client';

import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface LanguageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

export function LanguageTransition({ children, className = '' }: LanguageTransitionProps) {
  const { language } = useLanguage();
  const [key, setKey] = useState(0);
  const prevLanguageRef = useRef(language);

  useEffect(() => {
    if (prevLanguageRef.current !== language) {
      // Incrementa a key para forçar re-render com animação suave
      setKey((prev) => prev + 1);
      prevLanguageRef.current = language;
    }
  }, [language]);

  return (
    <span key={key} className={`language-transition ${className}`}>
      {children}
    </span>
  );
}

