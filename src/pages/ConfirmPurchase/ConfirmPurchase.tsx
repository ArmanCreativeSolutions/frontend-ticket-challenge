// Import necessary dependencies and types
import React from 'react';
import { Ticket } from '../../types';
import useStyles from './useConfirmPurchase.style';
import cs from 'classnames';

/** Props for this component */
interface ConfirmPurchaseProps {}

/** Component that displays a confirmation message after purchase is successful*/
const ConfirmPurchase: React.FC<ConfirmPurchaseProps> = () => {
  const styles = useStyles();
  return (
    <div data-testid="confirm-purchase" className={cs(styles.root)}>
      <h2>Purchase Successful</h2>
      <p>You have successfully purchased ticket with the following details:</p>
    </div>
  );
};

export default ConfirmPurchase;
