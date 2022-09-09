import React, { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';

import { Button } from '../Button/Button';
import './header.css';

import logoSmile from '../../stories/assets/logo-dentist.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch } from '../../redux/store/hooks';
import { toggleAside } from '../../redux/reducers/asideReducers';
import { useLocation, useNavigate } from 'react-router-dom';

type User = {
  name: string;
};

export const Header = () => {
  const [verifyClickButton, setVerifyClickButton] = useState(true);
  const [user, setUser] = useState('');

  const navigate = useNavigate();

  const location = useLocation();

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleAside(verifyClickButton));
    setVerifyClickButton(!verifyClickButton);
  }

  const onLogout = () => {
    localStorage.clear();
    document.location.reload();
  }

  const onLogin = () => {
    navigate('/');
  }

  const onCreateAccount = () => {
    navigate('/register');
  }

  useEffect(() => {
    const getInfoFrom = localStorage.getItem('user');

    if(getInfoFrom === null && !location.pathname.includes('/register')) {
      navigate('/');
      return;
    };

  }, [navigate]);

  return (
    <header>
      <section className="wrapper">
        <article className="title__box">
          <img src={ logoSmile } alt="logo-smile" />
          <h1>
            Smi
            <span className="title-blue">
              le
            </span>
          </h1>
          {
            location.pathname.includes('/home') && (
              <IconButton
                onClick={ handleClick }
              >
                <MenuIcon />
              </IconButton>
            )
          }
        </article>
        <article style={{display: 'flex', alignItems:'center'}}>
          {
           user?.length > 0 ? (
              <>
                <span className="welcome" style={{ textAlign:'center' }}>
                  Bem-vindo, <b>{ user.split(' ')[0] }</b>!
                </span>
                <Button size="small" onClick={onLogout} label="Sair" />
              </>
            ) : (
              <>
                <Button size="small" onClick={ onLogin } label="Entrar" />
                <Button primary size="small" onClick={ onCreateAccount } label="Cadastrar" />
              </>
          )}
        </article>
      </section>
    </header>
)};
