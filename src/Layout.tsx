import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-4 my-16 flex flex-col items-center *:w-full *:max-w-xl">
      {children}
    </div>
  );
}
