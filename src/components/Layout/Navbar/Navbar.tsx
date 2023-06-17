// Import necessary dependencies and types
import React from 'react';
import useNavbarStyles from './useNavbar.style';
import cs from 'classnames';
import { Link } from 'react-router-dom';

/** Props for this component */
// eslint-disable-next-line
interface NavbarProps {}

/** Component that displays a confirmation message after purchase is successful*/
const Navbar: React.FC<NavbarProps> = () => {
  const styles = useNavbarStyles();
  return (
    <div className={cs(styles.root)}>
      <Link to="/" className={cs(styles.link)}>
        Home
      </Link>
      <Link to="/" className={cs(styles.link)}>
        Tickets
      </Link>
    </div>
  );
};

export default Navbar;
