'use client';
import React from 'react';
import Style from '@/app/style/layoutProfile.module.css';
import dynamic from 'next/dynamic';

const SidebarProfile = dynamic(() => import('../components/sidebarprofile'), { ssr: false });

const LayoutProfile = ({ children }: { children: React.ReactNode }) => {
  
    return (
      <div className={Style['layout-container']}>
        <div className={Style['sidebar']}>
          <SidebarProfile  />
        </div>
        <main className={Style['main-content']}>
          {children}
        </main>
      </div>
    );
  };
  
export default LayoutProfile;