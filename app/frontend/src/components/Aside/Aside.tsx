import { useMediaQuery } from '@mui/material';
import React, { CSSProperties } from 'react';
import { asideStyles } from './Aside.styles';

const Aside: React.FC = () => {
  const matches = useMediaQuery('(min-width:600px)');

  const verifyMediaSize = () => !matches ?
    asideStyles.cardContainerDesk
    : asideStyles.cardContainerCell;

  return (
    <aside style={ {
      ...asideStyles.container as CSSProperties,
      ...verifyMediaSize()
    } }>
      {/* usuario */}
      <h3>Dados</h3>
      <h3>Agenda</h3>
      <h3>Calculadora</h3>
    </aside>
  );
}

export default Aside;