'use client';

import { ReactNode } from 'react';

interface ResponsiveGridProps {
  children: ReactNode;
  cols?: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  gap?: number;
}

export default function ResponsiveGrid({ 
  children, 
  cols = { sm: 1, md: 2, lg: 3, xl: 4 },
  gap = 6 
}: ResponsiveGridProps) {
  const gridCols = {
    sm: `grid-cols-${cols.sm}`,
    md: `md:grid-cols-${cols.md}`,
    lg: `lg:grid-cols-${cols.lg}`,
    xl: `xl:grid-cols-${cols.xl}`,
  };

  return (
    <div className={`grid grid-cols-1 ${gridCols.md} ${gridCols.lg} ${gridCols.xl} gap-${gap}`}>
      {children}
    </div>
  );
}