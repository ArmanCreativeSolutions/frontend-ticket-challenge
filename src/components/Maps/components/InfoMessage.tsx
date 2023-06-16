import React from 'react';
import useMapStyles from '../useMap.style';
import cs from 'classnames';

const InfoMessage: React.FC = () => {
  const styles = useMapStyles();
  return <div className={cs(styles.infoMessage)}>No map data available...</div>;
};

export default InfoMessage;
