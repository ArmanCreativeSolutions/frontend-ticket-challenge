// Import necessary dependencies and types
import React from 'react';
import useTickettyles from './useTicket.style';
import cs from 'classnames';
import { Map } from '../../types';

/** Props for this component */
interface TicketProps {
  row: number | undefined;
  seat: number | undefined;
  map: Map | null;
}

const date = new Date(Date.now());

/** Component that displays a confirmation message after purchase is successful*/
const Ticket: React.FC<TicketProps> = ({ row, seat, map }) => {
  const styles = useTickettyles();

  return (
    <div className={cs(styles.root)}>
      <div className={cs(styles.ticket)}>
        <>
          <div className={cs(styles.ticketHeader)}>
            <div
              className={cs(styles.ticketHeaderTitle)}
              data-testid="ticketHeaderTitle"
            >
              {' '}
              Map: {map?.id}
            </div>
            <div
              className={cs(styles.ticketHeaderDate)}
              data-testid="ticketHeaderDate"
            >
              Date: {date.toLocaleDateString('us-EN')}
            </div>
          </div>
          <div className={cs(styles.ticketBody)}>
            <div
              className={cs(styles.ticketBodySeats)}
              data-testid="ticketBodySeats"
            >
              Seats: row: {row} - seat: {seat}
            </div>
            <div className={cs(styles.ticketBodyPrice)}>Price: 99999</div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Ticket;
