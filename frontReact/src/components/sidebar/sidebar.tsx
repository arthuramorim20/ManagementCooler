import * as NavigationMenu from '@radix-ui/react-navigation-menu';

const Sidebar = () => {
  return (
    <NavigationMenu.Root className="sidebar">
      <NavigationMenu.List className="menu-list">
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#" className="menu-link">Dashboard</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#" className="menu-link">Settings</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#" className="menu-link">Profile</NavigationMenu.Link>
        </NavigationMenu.Item>
        <NavigationMenu.Item>
          <NavigationMenu.Link href="#" className="menu-link">Logout</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};

export default Sidebar;