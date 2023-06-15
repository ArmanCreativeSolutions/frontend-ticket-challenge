// Import necessary dependencies and types
import React from 'react';
import { Outlet } from 'react-router-dom';
import useLayoutStyles from './useLayout.style';
import cs from 'classnames';

/** Props for this component */
interface LayoutProps {}

/** Component that displays a confirmation message after purchase is successful*/
const Layout: React.FC<LayoutProps> = () => {
  const styles = useLayoutStyles();
  return (
    <div className={cs(styles.root)}>
      <Outlet />
    </div>
  );
};

export default Layout;
