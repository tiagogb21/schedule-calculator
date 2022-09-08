import React from 'react';
import PathRouter from './PathRouter';
import { Header } from './stories/Header/Header';

function App() {
  const onLogin = () => {

  };
  const onLogout = () => {
    
  };
  const onCreateAccount = () => {
    
  };
  return (
    <>
      <Header
        onLogin={ onLogin }
        onLogout={ onLogout }
        onCreateAccount={ onCreateAccount }
      />
      <PathRouter />
    </>
  );
}

export default App;
