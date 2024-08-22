// src/app/layout.tsx
'use client';

import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import { usePathname } from 'next/navigation';

const Layout = ({ children }: { children: React.ReactNode }) => {

  const pathname = usePathname();
  const hideNavbarFooter = pathname === '/sign-in' || pathname === '/sign-up';

  return (
    <html lang="en">
      <body>
        {!hideNavbarFooter && <Navbar />}
        {children}
        {!hideNavbarFooter && <Footer />}
      </body>
    </html>
  );
}

export default Layout;
