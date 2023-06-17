// Import necessary dependencies and types
import React from 'react';
import { useLocation } from 'react-router-dom';
import useStyles from '../useConfirmPurchase.style';
import cs from 'classnames';

/** Component that displays a success message after purchase is successful*/
const SuccessMessage: React.FC = () => {
  const styles = useStyles();
  const location = useLocation();
  const { state } = location;

  return state && state.ticketId ? (
    <div className={cs(styles.successContainer)}>
      <div className={styles.successTicket}>
        <h2>Purchase Successful</h2>
        <p>
          You have successfully purchased ticket with the following details:
        </p>
        <div className={cs(styles.ticketIdText)}>
          <h1>Ticket ID: {state.ticketId}</h1>
        </div>
      </div>
    </div>
  ) : null;
};

export default SuccessMessage;
