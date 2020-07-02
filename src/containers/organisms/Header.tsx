import React from 'react';
import Logo from '../../components/molecules/Logo';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';
import Button from '../../components/atoms/Button';

function Header() {
  const style = css`
    background-color: #fff;
    font-size: 24rem;
    width: 100%;
    height: 30px;
  `;

  return (
    <header id="header" css={style}>
      <Logo />

      <div>
        <Link to="/">Home</Link>
        <Link to="/docs">Docs</Link>
        <Button
          size="large"
          color="primary"
          clickFunction={() => {
            console.log('fire!');
          }}
        />
      </div>
    </header>
  );
}

export default Header;
