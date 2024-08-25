// src/app/layout.tsx
'use client';

import './globals.css';
import Navbar from './components/Navbar';
import NavbarNoSearch from './components/NavbarNoSearch';
import Footer from './components/footer';
import { AuthProvider } from '../app/Context/AuthContext';  

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <AuthProvider> 
                    <Navbar />
                        <main>
                            {children}
                        </main>
                    <Footer />
                </AuthProvider>
            </body>
        </html>
    );
};
export default Layout;

