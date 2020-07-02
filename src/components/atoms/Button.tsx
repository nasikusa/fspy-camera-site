import React from 'react';
import { css } from '@emotion/core';

// size - text - arrow - border-radius - responsive -

interface ButtonInterface {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  color?: 'primary' | 'basic' | 'irregular';
  clickFunction?: () => void;
}

interface ButtonSizeInterface {
  width: string;
  height: string;
}

const Button: React.FC<ButtonInterface> = (props: ButtonInterface) => {
  let size: ButtonSizeInterface = {
    width: '6rem',
    height: '2.5rem',
  };
  if (props.size != null) {
    switch (props.size) {
      case 'small':
        size = {
          width: '4rem',
          height: '1.5rem',
        };
        break;
      case 'medium':
        size = {
          width: '6rem',
          height: '2.5rem',
        };
        break;
      case 'large':
        size = {
          width: '8rem',
          height: '3.5rem',
        };
        break;
      default:
        size = {
          width: '6rem',
          height: '2.5rem',
        };
        break;
    }
  }

  const componentStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${size.width};
    height: ${size.height};
    background-color: #cccccc;
    font-size: 1.6rem;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.3s ease;
    &:hover {
      opacity: 0.8;
    }
  `;

  return (
    <div css={componentStyle} onClick={props.clickFunction}>
      {props.text}
    </div>
  );
};

Button.defaultProps = {
  size: 'medium',
  text: 'ボタンテキスト',
  color: 'primary',
};

export default Button;
