// app/components/layouts/MobilePageLayout.tsx
'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';
import BottomNavBar from './BottomNavBar';
import { SessionProvider } from 'next-auth/react';
import clsx from 'clsx';

interface MobilePageLayoutProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  fullScreen?: boolean;
}

const MobilePageLayout: React.FC<MobilePageLayoutProps> = ({
  title,
  children,
  className,
  fullScreen = false,
}) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <div
          className={clsx(
            'min-h-screen text-gray-900 flex flex-col my-auto',
            className,
          )}
        >
          {/* Header */}
          {!fullScreen && (
            <header className="px-4 py-3 h-[20vw] flex justify-between">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 24H6.667m8-16h-8m18.666 8H6.667"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m7.653 17.5.25.333a2.812 2.812 0 0 0 4.5 0l.25-.333m-9.014-4.542.086.178A3.308 3.308 0 0 0 6.7 15h6.85a3.177 3.177 0 0 0 2.163-5.505l-.037-.034a3.237 3.237 0 0 1-1.009-2.773l.054-.43a4.084 4.084 0 0 0-4.053-4.591H9.25a4.08 4.08 0 0 0-4.048 4.585l.066.529a3.042 3.042 0 0 1-.955 2.613 3.042 3.042 0 0 0-.674 3.564z"
                  stroke="#2D264B"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </header>
          )}

          {/* Main content */}
          <main className="flex-1 px-4 py-4">{children}</main>

          <div className="h-16"></div>
          {/* Optional footer */}
          {!fullScreen && <BottomNavBar />}
        </div>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default MobilePageLayout;
