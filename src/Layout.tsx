import { ReactNode, useEffect } from 'react';

import { useLocation } from 'wouter';

export default function Layout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    if (history.state && 'top' in history.state && !!history.state.top) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      history.replaceState(null, '');
    }
  }, [location]);

  return (
    <div className="mx-4 my-16 flex flex-col items-center *:w-full *:max-w-xl print:my-4 print:*:max-w-2xl">
      {children}
    </div>
  );
}
