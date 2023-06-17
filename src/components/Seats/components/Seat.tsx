import React from 'react';
import cs from 'classnames';
import useSeatsStyles from '../useSeats.style';

interface SeatProps {
  seat: number;
  seatIndex: number;
  onSeatClick: (e: React.MouseEvent) => void;
}

const Seat: React.FC<SeatProps> = ({ seat, seatIndex, onSeatClick }) => {
  const styles = useSeatsStyles();

  return (
    <div
      key={`seat-${seatIndex}`}
      className={cs(styles.seat, { [styles.seatOccupied]: seat === 1 })}
      onClick={seat === 1 ? undefined : onSeatClick}
      data-testid={`seat-${seatIndex}`}
    ></div>
  );
};

export default Seat;
