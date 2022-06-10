import React from 'react';
import { AppBar } from 'src/components/layout/AppBar';
import { Footer } from 'src/components/layout/Footer';
import { Outlet } from 'react-router-dom';

export const Layout = () => (
    <div className='layout'>
        <AppBar />
        {/* <TopNav /> */}
        <main className='main'>
            <Outlet />
        </main>
        <Footer />
    </div>
)