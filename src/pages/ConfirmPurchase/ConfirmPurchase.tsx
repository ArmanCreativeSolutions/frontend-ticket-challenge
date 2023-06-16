// Import necessary dependencies and types
import React from 'react';
import { Ticket } from '../../types';
import useStyles from './useConfirmPurchase.style';
import cs from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';

/** Props for this component */
interface ConfirmPurchaseProps {}

/** Component that displays a confirmation message after purchase is successful*/
const ConfirmPurchase: React.FC<ConfirmPurchaseProps> = () => {
  const styles = useStyles();
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const handleGoHome = () => {
    navigate('/');
  };
  return (
    <div data-testid="confirm-purchase" className={cs(styles.root)}>
      {state && state.ticketId ? (
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
          <button
            className={cs(styles.goBackButton, styles.successButton)}
            onClick={handleGoHome}
          >
            Go home
          </button>
        </div>
      ) : (
        <div>
          <button
            className={cs(styles.goBackButton, styles.dangerButton)}
            onClick={handleGoHome}
          >
            Go home
          </button>
        </div>
      )}
    </div>
  );
};

export default ConfirmPurchase;
