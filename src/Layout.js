import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

export const Layout = () => {
  return (
    <>
        <AuthProvider>
            {/*<img src='http://localhost:3500/media/website-background'/>*/}
            <Navbar />
            <main className='website-body'>
              <Outlet />
            </main>
        </AuthProvider>
    </>
  );
}
