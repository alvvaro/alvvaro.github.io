import { ReactNode } from 'react';

import { Link } from 'wouter';

export default function LinkWrapper({
  external,
  ...props
}: {
  href: string;
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return external ? <a {...props} target="_blank" /> : <Link {...props} />;
}
