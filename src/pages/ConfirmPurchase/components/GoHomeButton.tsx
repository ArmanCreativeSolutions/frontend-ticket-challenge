// Import necessary dependencies and types
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from '../useConfirmPurchase.style';
import cs from 'classnames';
import Button from '../../../components/Button/Button';

interface GoHomeButtonProps {
  success: boolean;
}

/** Component that displays a button to navigate back home */
const GoHomeButton: React.FC<GoHomeButtonProps> = ({ success }) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Button
      classNames={cs(
        styles.goBackButton,
        success ? styles.successButton : styles.dangerButton,
      )}
      onClick={handleGoHome}
    >
      Go home
    </Button>
  );
};

export default GoHomeButton;
