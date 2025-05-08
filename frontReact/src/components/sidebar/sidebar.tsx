// import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { TabNav } from "@radix-ui/themes";
// import { Link } from 'react-router'; // or use Next.js's <Link>

export default function Sidebar() {
    return (
        <TabNav.Root className="sidebar">

            <h1 className="sidebar-title" >Dashboard</h1>
            <TabNav.Link>
                <a href="#" className="sidebar-link">Home</a>
            </TabNav.Link>
            <TabNav.Link>
                <a href="#" className="sidebar-link">Equipamentos</a>
            </TabNav.Link>
            <TabNav.Link>
                <a href="#" className="sidebar-link">Manutenção</a>
            </TabNav.Link>
            <TabNav.Link>
                <a href="#" className="sidebar-link">Configurações</a>
            </TabNav.Link>
        </TabNav.Root>
    );
}