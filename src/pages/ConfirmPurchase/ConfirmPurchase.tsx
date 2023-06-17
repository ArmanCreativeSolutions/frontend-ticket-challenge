// Import necessary dependencies and types
import React from 'react';
import useStyles from './useConfirmPurchase.style';
import cs from 'classnames';
import { useLocation } from 'react-router-dom';
import SuccessMessage from './components/SuccessMessage';
import GoHomeButton from './components/GoHomeButton';

/** Props for this component */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ConfirmPurchaseProps {}

/** Component that displays a confirmation message after purchase is successful*/
const ConfirmPurchase: React.FC<ConfirmPurchaseProps> = () => {
  const styles = useStyles();
  const location = useLocation();
  const { state } = location;

  return (
    <div data-testid="confirm-purchase" className={cs(styles.root)}>
      <SuccessMessage />
      <GoHomeButton success={!!(state && state.ticketId)} />
    </div>
  );
};

export default ConfirmPurchase;
