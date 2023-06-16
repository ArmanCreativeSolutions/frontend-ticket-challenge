import React from 'react';
import useMapStyles from '../useMap.style';
import cs from 'classnames';
import { Map } from '../../../types';

interface MapBoxProps {
  mapSource: Map;
  onMapClick: (e: React.MouseEvent, map: Map) => void;
}

const MapBox: React.FC<MapBoxProps> = ({ mapSource, onMapClick }) => {
  const styles = useMapStyles();

  return (
    <div
      key={mapSource.id}
      className={cs(styles.mapBox)}
      onClick={(e) => onMapClick(e, mapSource)}
    >
      {mapSource.id}
    </div>
  );
};

export default MapBox;
