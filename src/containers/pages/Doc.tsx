import React, { useContext } from 'react';
import Head from '../organisms/Head';
import Header from '../organisms/Header';
import { RootContext } from '../../context/RootContext';

function Doc() {
  const contextValue = useContext(RootContext);
  return (
    <div className="Doc">
      <Head />
      <Header />
      <h1>Doc</h1>
      {contextValue.backgroundColor}
    </div>
  );
}

export default Doc;
