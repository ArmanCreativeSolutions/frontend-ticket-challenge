import { createUseStyles } from 'react-jss';

const useSeatsStyles = createUseStyles({
  root: {},
  seats: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 auto',
    minWidth: 350,
    minHeight: 300,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  seat: {
    border: '1px solid #000',
    borderRadius: '5px',
    cursor: 'pointer',
    height: '50px',
    margin: '5px',
    width: '50px',
    backgroundColor: 'none',
    '&:hover': {
      boxShadow: '1px 1px 1px #09105038',
      border: '2px solid #90d6f1',
      backgroundColor: '#70caee',
      transitionDelay: '1',
      transitionDuration: '.3s',
    },
  },
  seatOccupied: {
    backgroundColor: '#696868',
    color: '#fff',
    cursor: 'not-allowed',
    '&:hover': {
      boxShadow: '1px 1px 1px #09105038',
      border: '0px solid #ff5e006c',
      backgroundColor: '#696868',
    },
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
