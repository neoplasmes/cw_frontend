import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

export const Layout = () => {
  return (
    <>
        <AuthProvider>
            <Navbar />
            <Outlet />
        </AuthProvider>
    </>
  );
}
