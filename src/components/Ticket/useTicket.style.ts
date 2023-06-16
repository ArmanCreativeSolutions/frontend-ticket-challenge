import { createUseStyles } from 'react-jss';

const useTicketStyles = createUseStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  ticket: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 auto',
    border: '2px dashed #2c304b7e',
    borderRadius: 5,
    padding: 50,
    width: 500,
    gap: 20,
  },
  ticketHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  ticketHeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c304b8a',
  },
  ticketHeaderDate: {},
  ticketBody: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  ticketBodyTitle: {},
  ticketBodyDate: {},
  ticketBodyTime: {},
  ticketBodySeats: {},
  ticketBodyPrice: {},
});

export default useTicketStyles;
