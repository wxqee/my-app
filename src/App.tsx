import React from 'react';
import {withNamespaces} from 'react-i18next';
import logo from './logo.svg';
import './App.css';

const App = (props: any) => {
  const { t, tReady } = props;

  if (!tReady) {
    return <div>{t('common:LOADING')}</div>
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('LEARN_REACT')}
        </a>
      </header>
    </div>
  );
};

export default withNamespaces(['app', 'common'])(App);
