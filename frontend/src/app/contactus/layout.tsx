import React from 'react';
import '../globals.css'; 
import NavbarNoSearch from '../components/NavbarNoSearch';

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en">
            <body>
                <NavbarNoSearch />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default Layout;