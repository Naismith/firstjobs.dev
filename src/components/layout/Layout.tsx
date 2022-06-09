import React from 'react';
import TopNav from 'src/components/TopNav';
import { Footer } from 'src/components/layout/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
    <div className='layout'>
        <TopNav />
        <main className='main'>
            <Outlet />
        </main>
        <Footer />
    </div>
)