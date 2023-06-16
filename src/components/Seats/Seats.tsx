// Import necessary dependencies and types
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import useSeatsStyles from './useSeats.style';
import cs from 'classnames';
import { Map, Seat } from '../../types';

/** Props for this component */
interface SeatsProps {
  map: Map | null;
  onSeatClick: (e: React.MouseEvent, seat: Seat) => void;
}

/** Component that displays a confirmation message after purchase is successful*/
const Seats: React.FC<SeatsProps> = ({ map, onSeatClick }) => {
  const styles = useSeatsStyles();
  const [seats, setSeats] = useState<[][]>();

  useEffect(() => {
    // Fetch seats for the selected map and set the seats state
    if (map !== null) {
      axios.get(`/api/map/${map.id}`).then((response) => {
        const { status, data } = response;
        if (status === 200) {
          setSeats(data);
        }
      });
    }
  }, [map]);

  // If seats is undefined or empty, render a message
  if (!seats || seats.length === 0) {
    return <div className={cs(styles.seats)}>Please select a map.</div>;
  }

  // Render the seats
  return (
    <div className={cs(styles.seats)}>
      {seats.map((row, rowIndex) => {
        return (
          <div key={`row-${rowIndex}`} className={cs(styles.row)}>
            {row.map((seat, seatIndex) => {
              if (seat === 1) {
                return (
                  <div
                    key={`seat-${seatIndex}`}
                    className={cs(styles.seat, styles.seatOccupied)}
                  ></div>
                );
              } else {
                return (
                  <div
                    key={`seat-${seatIndex}`}
                    className={cs(styles.seat)}
                    onClick={(e) =>
                      onSeatClick(e, { x: rowIndex, y: seatIndex })
                    }
                  ></div>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Seats;
