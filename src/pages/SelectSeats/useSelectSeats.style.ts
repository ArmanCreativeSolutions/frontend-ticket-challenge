import { createUseStyles } from 'react-jss';

const useSelectSeatsStyles = createUseStyles({
  '@media (max-width: 600px)': {
    buttonBox: {
      flexDirection: 'column',
    },
    buyButton: {
      fontSize: 13,
    },
  },
  '@media (min-width: 601px) and (max-width: 1024px)': {
    buyButton: {
      fontSize: 14,
    },
  },
  root: {},
  buttonBox: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  buyButton: {
    outline: 'none',
    border: 'none',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#2c304b',
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'tahoma',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#2c304b8a',
      transitionDuration: '.6s',
    },
    '&[disabled]': {
      backgroundColor: '#a0a9df',
      cursor: 'not-allowed',
    },
  },
  error: {
    color: '#b10808',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default useSelectSeatsStyles;
