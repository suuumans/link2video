import type { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-5xl flex flex-col gap-12 animate-fade-in">
        {children}
      </div>
    </main>
  );
};
