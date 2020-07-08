import React from 'react';
import { css } from '@emotion/core';
import LogoImage from '../atoms/LogoImage';

const style = css`
  display: flex;
  position: relative;
`;

function Logo() {
  return (
    <div className="logo" css={style}>
      <LogoImage />
    </div>
  );
}

export default Logo;
