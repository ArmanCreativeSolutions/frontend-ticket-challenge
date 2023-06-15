// Import necessary dependencies and types
import React from 'react';
import useMapStyles from './useMap.style';
import cs from 'classnames';

/** Props for this component */
interface MapProps {}

/** Component that displays a confirmation message after purchase is successful*/
const Map: React.FC<MapProps> = () => {
  const styles = useMapStyles();
  return (
    <div className={cs(styles.root)}>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
      <div className={cs(styles.mapBox)}>The map: 1</div>
    </div>
  );
};

export default Map;
