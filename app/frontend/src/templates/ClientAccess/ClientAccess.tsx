import { useMediaQuery } from '@material-ui/core';
import React, { useState, useEffect, CSSProperties } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../stories/Button/Button';
import clientAccessStyles from './ClientAccess.styles';

const currentDayAndMonth = (day: number) => {
  const month = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
  const currentMonth = new Date().getMonth() + 1;
  const currentDate = new Date().getDate() + day;
  return `${ currentDate } de ${ month[currentMonth] }`;
}

const ClientAccess: React.FC = () => {
  const [clientName, setClientName] = useState('');

  const matches = useMediaQuery('(min-width:600px)');

  const navigate = useNavigate();

  const verifyScreenClientContainer = () => !matches ?
    { ...clientAccessStyles.clientContainer, ...clientAccessStyles.clientContainerCell }
    : { ...clientAccessStyles.clientContainer, ...clientAccessStyles.clientContainerDesk }

  const verifyScreenBoxButton = () => !matches ?
    { ...clientAccessStyles.boxButtonCell }
    : { ...clientAccessStyles.boxButtonDesk };

  const verifyScreenBoxInfo = () => !matches ?
    { ...clientAccessStyles.boxInfo, ...clientAccessStyles.boxInfoCell }
    : { ...clientAccessStyles.boxInfo, ...clientAccessStyles.boxInfoDesk }

  useEffect(() => {
    const getInfoFromLocal = localStorage.getItem('user');
    if(getInfoFromLocal === null) return;
    const { name } = JSON.parse(getInfoFromLocal);
    setClientName(name);
  }, []);

  const handleClick = () => {
    navigate('/payments');
  }

  return (
    <section style={ verifyScreenClientContainer() as CSSProperties }>
      {
        clientName?.length > 0 && <h3
          style={{ display: 'flex', gap: '10px' }}
        >
          Bem-vindo,
          <span style={{ color: '#1ea7fd' }}>{ clientName }</span>
        </h3>
      }
      <h3> Selecione o dia: </h3>
      <article style={ verifyScreenBoxButton() as CSSProperties }>
        <Button
          label={ `${ currentDayAndMonth(0) }` }
          style={{ fontSize:'12px' }}
          onClick={ handleClick }
        />
        <Button
          label={ `${ currentDayAndMonth(1) }` }
          style={{ fontSize:'12px' }}
          onClick={ handleClick }
        />
        <Button
          primary
          label="outro"
          style={{ fontSize:'12px' }}
          onClick={ handleClick }
        />
      </article>
      <article style={ verifyScreenBoxInfo() as CSSProperties }>
      <p><strong>Local</strong>: Consultório Odontológico da Érica</p>
      <p><strong>Endereço:</strong> Rua do Consultório da Érica</p>
      </article>
    </section>
  );
}

export default ClientAccess;
