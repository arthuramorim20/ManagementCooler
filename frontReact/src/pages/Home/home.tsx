// import { Box, Container } from '@radix-ui/themes';
// import Navbar from '../../components/navbar/navbar';
import Sidebar from '../../components/sidebar/sidebar';
// import MaintenanceForm from '../../components/register-cooler/register';
import ArcondicionadosList from '../../components/cards-ar/cards';
//import AuthDialog from '../../components/form-login/Form-input';
// import Navbar from '../../components/navbar/navbar.tsx';
// import { useState } from 'react';
// import * as Slider from '@radix-ui/react-slider';
// import * as Switch from '@radix-ui/react-switch';
// import * as Tabs from '@radix-ui/react-tabs';

export default function Home() {
    return (
        <div className="layout">
            <nav className="navbar">Admin</nav>
            <Sidebar></Sidebar>
            <main className="dashboard">
                <ArcondicionadosList />

            </main>
        </div>
    );
}