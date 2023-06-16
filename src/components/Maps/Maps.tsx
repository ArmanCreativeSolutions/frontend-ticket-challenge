// Import necessary dependencies and types
import React from 'react';
import useMapStyles from './useMap.style';
import cs from 'classnames';
import { Map } from '../../types';

/** Props for this component */
interface MapProps {
  mapData: Map[]; // mapData
  onMapClick: (e: React.MouseEvent, map: Map) => void;
}

/** Component that displays a confirmation message after purchase is successful*/
const Maps: React.FC<MapProps> = ({ mapData, onMapClick }) => {
  const styles = useMapStyles();

  // Check if mapData exists and is not empty, if not, display a message.
  // If it exists, map through the mapData and render each map.
  const map =
    mapData && mapData.length > 0 ? (
      mapData.map((mapSource, index) => (
        <div
          key={mapSource.id}
          className={cs(styles.mapBox)}
          onClick={(e) => onMapClick(e, mapSource)}
        >
          {mapSource.id}
        </div>
      ))
    ) : (
      <div className={cs(styles.infoMessage)}>No map data available...</div>
    );

  return (
    <div className={cs(styles.root)}>
      <div className={cs(styles.mapContainer)}>{map}</div>
    </div>
  );
};

export default Maps;
