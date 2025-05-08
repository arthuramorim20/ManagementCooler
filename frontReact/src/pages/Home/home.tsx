// import { Box, Container } from '@radix-ui/themes';
// import Navbar from '../../components/navbar/navbar';
// import Sidebar from '../../components/sidebar/sidebar'
//import Navbar from '../../components/navbar/navbar.tsx';
import { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import * as Switch from '@radix-ui/react-switch';
import * as Tabs from '@radix-ui/react-tabs';

export default function Home() {
    const [temperature, setTemperature] = useState(22);
    const [isACOn, setIsACOn] = useState(true);
    const [mode, setMode] = useState('cool');

    return (
        <div className="layout">
            <nav className="navbar">Admin</nav>
            <aside className="sidebar">
                <ul>
                    <li>Dashboard</li>
                    <li>Histórico</li>
                    <li>Configurações</li>
                </ul>
            </aside>
            <main className="dashboard">
                {/* Temperature Control */}
                <div className="card">
                    <h2>Temperatura</h2>
                    <div className="temperature-display">{temperature}°C</div>
                    <Slider.Root
                        className="slider"
                        defaultValue={[temperature]}
                        min={16}
                        max={30}
                        step={1}
                        onValueChange={([val]) => setTemperature(val)}
                    >
                        <Slider.Track className="slider-track">
                            <Slider.Range className="slider-range" />
                        </Slider.Track>
                        <Slider.Thumb className="slider-thumb" />
                    </Slider.Root>
                </div>

                {/* AC Power Switch */}
                <div className="card">
                    <h2>Ar-condicionado</h2>
                    <Switch.Root
                        className="switch-root"
                        checked={isACOn}
                        onCheckedChange={setIsACOn}
                    >
                        <Switch.Thumb className="switch-thumb" />
                    </Switch.Root>
                    <div className="switch-status">{isACOn ? 'Ligado' : 'Desligado'}</div>
                </div>

                {/* Mode Selector */}
                <div className="card">
                    <h2>Modo de Operação</h2>
                    <Tabs.Root className="tabs-root" value={mode} onValueChange={setMode}>
                        <Tabs.List className="tabs-list">
                            <Tabs.Trigger className="tabs-trigger" value="cool">Frio</Tabs.Trigger>
                            <Tabs.Trigger className="tabs-trigger" value="heat">Quente</Tabs.Trigger>
                            <Tabs.Trigger className="tabs-trigger" value="auto">Automático</Tabs.Trigger>
                        </Tabs.List>
                    </Tabs.Root>
                </div>
            </main>
        </div>
    );
}