// Import necessary dependencies and types
import React, { useState, useEffect } from 'react';
import { Map, Seat, SeatMap, Ticket as TicketType } from '../../types';
import Maps from '../../components/Maps/Maps';
import Seats from '../../components/Seats/Seats';
import useSelectSeatsStyles from './useSelectSeats.style';
import cs from 'classnames';
import axios from 'axios';
import Ticket from '../../components/Ticket/Ticket';
import { useNavigate, useNavigation } from 'react-router-dom';

const SelectSeats: React.FC = () => {
  const [maps, setMaps] = useState<Map[]>([]);
  const [selectedMap, setSelectedMap] = useState<Map | null>(null);
  const [selectedSeat, setSelectedSeat] = useState<Seat | null>();
  const [error, setError] = useState();
  const styles = useSelectSeatsStyles();
  const navigate = useNavigate();

  const handleMapChange = (e: React.MouseEvent, map: Map) => {
    setSelectedSeat(null);
    setSelectedMap(map);
  };

  const handleSeatClick = (e: React.MouseEvent, seat: Seat) => {
    setSelectedSeat(seat);
  };

  const handleBuySeat = () => {
    if (selectedMap?.id && selectedSeat) {
      axios
        .post(`/api/map/${selectedMap.id}/ticket`, selectedSeat)
        .then((response) => {
          const { data, status } = response;
          if (data.status === 'success') {
            navigate('/confirm', { state: { ticketId: data.ticket.id } });
          }
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  useEffect(() => {
    // Fetch maps and set the maps state here
    // Then randomly select one map and set the selectedMap state
    // Fetch the seats for the selected map and set the seats state
    axios.get('/api/map').then((response) => {
      const { status, data } = response;
      if (status === 200) {
        const mapData = data.map((item: string) => {
          return {
            id: item,
          };
        });
        setMaps(mapData);
      }
    });
  }, []);

  return (
    <div data-testid="select-seats" className={cs(styles.root)}>
      <Maps mapData={maps} onMapClick={handleMapChange} />
      <Seats map={selectedMap} onSeatClick={handleSeatClick} />
      <Ticket row={selectedSeat?.x} seat={selectedSeat?.y} map={selectedMap} />
      {error && <div className={cs(styles.error)}>{error}</div>}
      <div className={styles.buttonBox}>
        <button
          className={styles.buyButton}
          onClick={handleBuySeat}
          disabled={selectedSeat ? false : true}
        >
          Buy this ticket
        </button>
      </div>
    </div>
  );
};

export default SelectSeats;
