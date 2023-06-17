import React, { MouseEventHandler } from 'react';
import cs from 'classnames';
import useButtonStyles from './useButton.style';

interface ButtonProps {
  text?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  classNames: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  classNames,
  disabled = false,
  children,
}) => {
  const styles = useButtonStyles();

  return (
    <button
      className={cs(styles.root, classNames)}
      onClick={onClick}
      disabled={disabled}
    >
      {children ?? text}
    </button>
  );
};

export default Button;
