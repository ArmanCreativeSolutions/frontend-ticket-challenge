import { createUseStyles } from 'react-jss';

const useNavbarStyles = createUseStyles({
  root: {
    background: '#c1ecf7',
    width: '100%',
    height: 20,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    fontFamily: 'tahoma',
    fontSize: 16,
    fontWeight: 600,
    color: '#42629e',
  },
});

export default useNavbarStyles;
