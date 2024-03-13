import Link from 'next/link';
import React from 'react';

function Route({
  children,
  route,
}) {
  return (
    <Link href={route}>{children}</Link>
  );
}

export default Route;
