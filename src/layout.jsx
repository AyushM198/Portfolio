import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
const Layout = () => {
    const heroRef = useRef(null);

    return (
        <>

            <Navbar heroRef={heroRef} />
            <main className="">
                <Outlet context={{ heroRef }} />
            </main>
        </>
    );
};

export default Layout;

