import React, { useState } from 'react';
import { IconButton } from '@mui/material';

import { Button } from '../Button/Button';
import './header.css';

import logoSmile from '../../stories/assets/logo-dentist.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppDispatch } from '../../redux/store/hooks';
import { toggleAside } from '../../redux/reducers/asideReducers';
import { useNavigate } from 'react-router-dom';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({
  user,
  onLogout,
}: HeaderProps) => {
  const [verifyClickButton, setVerifyClickButton] = useState(true);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(toggleAside(verifyClickButton));
    setVerifyClickButton(!verifyClickButton);
  }

  const onLogin = () => {
    navigate('/');
  }

  const onCreateAccount = () => {
    navigate('/register');
  }

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
            <IconButton
              onClick={ handleClick }
            >
              <MenuIcon />
            </IconButton>
        </article>
        <article>
          {user ? (
            <>
              <span className="welcome">
                Bem-vindo, <b>{user.name}</b>!
              </span>
              <Button size="small" onClick={onLogout} label="Log out" />
            </>
          ) : (
            <>
              <Button size="small" onClick={ onLogin } label="Log in" />
              <Button primary size="small" onClick={ onCreateAccount } label="Cadastrar" />
            </>
          )}
        </article>
      </section>
    </header>
)};
