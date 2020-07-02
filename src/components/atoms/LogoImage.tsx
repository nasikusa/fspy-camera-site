import React from 'react';
import { css } from '@emotion/core';

const style = css`
  width: 30px;
  height: 30px;
`;

function LogoImage() {
  return <img src="https://fspy.io/assets/icon.png" alt="logo" css={style} />;
}

export default LogoImage;
