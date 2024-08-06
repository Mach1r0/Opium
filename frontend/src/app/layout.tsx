import React from 'react';
import './globals.css'; 
import Navbar from './components/Navbar';
import Footer from './components/footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
};

export default Layout;