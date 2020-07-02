import React from 'react';
import { Global, css } from '@emotion/core';

const style = css`
  ::selection {
    background: #bababa;
    color: #fff;
  }

  ::-moz-selection {
    background: #bababa;
    color: #fff;
  }

  * {
    box-sizing: border-box;
    outline: none;
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;
    &:before {
      box-sizing: border-box;
    }
    &:after {
      box-sizing: border-box;
    }
  }

  html {
    font-size: 10px;
  }

  body {
    color: #1a1a1a;
    font-family: '游ゴシック', 'Yu Gothic', YuGothic,
      'Hiragino Kaku Gothic ProN', 'Hiragino Kaku Gothic Pro', 'メイリオ',
      Meiryo, 'ＭＳ ゴシック', sans-serif;
    line-height: 1.7;
    -webkit-text-size-adjust: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-feature-settings: 'palt';
    scroll-behavior: smooth;
  }

  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

const Foundation = () => {
  return <Global styles={style} />;
};

export default Foundation;
