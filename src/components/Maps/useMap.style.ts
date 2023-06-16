import { createUseStyles } from 'react-jss';

const useMapStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    overflow: 'scroll',
  },
  mapBox: {
    background: '#f5d2be',
    margin: 5,
    width: 100,
    height: 100,
    flex: '0 0 100px',
    borderRadius: 5,
  },
});

export default useMapStyles;
