import { createUseStyles } from 'react-jss';

const useConfirmPurchaseStyles = createUseStyles({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
  },
  successTicket: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    border: '1px solid #038b4c',
    color: '#03532e',
    width: 500,
    borderRadius: 5,
    gap: 10,
  },
  ticketIdText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#500202',
  },
  goBackButton: {
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
  },
  successButton: {
    backgroundColor: '#0d580d',
  },
  dangerButton: {
    backgroundColor: '#580d0d',
  },
  successContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 50,
  },
});

export default useConfirmPurchaseStyles;
