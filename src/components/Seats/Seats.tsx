import React, { useEffect, useState } from 'react';
import cs from 'classnames';
import axios from 'axios';
import useSeatsStyles from './useSeats.style';
import { Map, Seat as SeatType } from '../../types';
import Row from './components/Row';

interface SeatsProps {
  map: Map | null;
  onSeatClick: (e: React.MouseEvent, seat: SeatType) => void;
}

const Seats: React.FC<SeatsProps> = ({ map, onSeatClick }) => {
  const styles = useSeatsStyles();
  const [seats, setSeats] = useState<[][]>();

  useEffect(() => {
    if (map !== null) {
      axios.get(`/api/map/${map.id}`).then((response) => {
        const { status, data } = response;
        if (status === 200) {
          setSeats(data);
        }
      });
    }
  }, [map]);

  if (!seats || seats.length === 0) {
    return <div className={cs(styles.seats)}>Please select a map.</div>;
  }

  return (
    <div className={cs(styles.seats)}>
      {seats.map((row, rowIndex) => (
        <Row
          key={rowIndex}
          row={row}
          rowIndex={rowIndex}
          onSeatClick={onSeatClick}
        />
      ))}
    </div>
  );
};

export default Seats;
