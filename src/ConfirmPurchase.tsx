// Import necessary dependencies and types
import React from 'react';
import { Ticket } from './types';

/** Props for this component */
interface ConfirmPurchaseProps {}

/** Component that displays a confirmation message after purchase is successful*/
const ConfirmPurchase: React.FC<ConfirmPurchaseProps> = () => {
  return (
    <div data-testid="confirm-purchase">
      <h2>Purchase Successful</h2>
      <p>You have successfully purchased ticket with the following details:</p>
    </div>
  );
};

export default ConfirmPurchase;
