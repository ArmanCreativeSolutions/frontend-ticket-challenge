import { createUseStyles } from 'react-jss';

const useSeatsStyles = createUseStyles({
  root: {},
  seats: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 auto',
    minWidth: 350,
    minHeight: 500,
    width: '100%',
    height: '100%',
    overflow: 'scroll',
  },
  seat: {
    border: '1px solid #000',
    borderRadius: '5px',
    cursor: 'pointer',
    height: '50px',
    margin: '5px',
    width: '50px',
  },
  seatOccupied: {
    backgroundColor: '#000',
    color: '#fff',
  },
  seatSelected: {
    backgroundColor: '#000',
    color: '#fff',
  },
  seatReserved: {
    backgroundColor: '#ccc',
    color: '#000',
  },
});

export default useSeatsStyles;
