// Import necessary dependencies and types
import React from 'react';
import { Outlet } from 'react-router-dom';

/** Props for this component */
interface LayoutProps {}

/** Component that displays a confirmation message after purchase is successful*/
const Layout: React.FC<LayoutProps> = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Layout;
