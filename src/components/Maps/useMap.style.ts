import { createUseStyles } from 'react-jss';

const useMapStyles = createUseStyles({
  root: {},
  mapBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f5d2be',
    margin: 5,
    width: 100,
    height: 100,
    flex: '0 0 100px',
    borderRadius: 5,
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '1px 1px 1px #2b01011e',
    },
    '@media (max-width:768px) and (orientation : landscape)': {
      width: 50,
      height: 50,
      flex: '0 0 50px',
    },
    '@media (max-width:768px) and (orientation : portrait)': {
      width: 50,
      height: 50,
      flex: '0 0 50px',
    },
  },
  mapContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    overflow: 'auto',
    minHeight: 100,
  },
  infoMessage: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
});

export default useMapStyles;
