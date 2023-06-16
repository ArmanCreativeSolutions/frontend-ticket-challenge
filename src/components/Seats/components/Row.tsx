import React from 'react';
import cs from 'classnames';
import useSeatsStyles from '../useSeats.style';
import { Seat as SeatType } from '../../../types';
import Seat from './Seat';

interface RowProps {
  row: number[];
  rowIndex: number;
  onSeatClick: (e: React.MouseEvent, seat: SeatType) => void;
}

const Row: React.FC<RowProps> = ({ row, rowIndex, onSeatClick }) => {
  const styles = useSeatsStyles();

  return (
    <div key={`row-${rowIndex}`} className={cs(styles.row)}>
      {row.map((seat, seatIndex) => (
        <Seat
          key={seatIndex}
          seat={seat}
          seatIndex={seatIndex}
          onSeatClick={(e) => onSeatClick(e, { x: rowIndex, y: seatIndex })}
          data-test={`seat-${seatIndex}`}
        />
      ))}
    </div>
  );
};

export default Row;
