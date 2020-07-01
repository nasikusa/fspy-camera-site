import React from 'react';
import { css } from '@emotion/core';
import LogoImage from '../atoms/LogoImage';

const style = css`
  position: relative;
  height: 30px;
  width: 30px;
`;


function Logo() {
  return (
    <div
      className="logo"
      css={style}
    >
        <LogoImage />
    </div>
  );
}

export default Logo;