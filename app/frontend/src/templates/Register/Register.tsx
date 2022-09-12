import React, { useState, CSSProperties, useEffect } from 'react';
// import { useForm } from "react-hook-form";
import { Formik, Form } from "formik";

import { Button } from '../../stories/Button/Button';

import AuthService from "../../services/auth.service";
import { Link, useNavigate } from 'react-router-dom';

import registerStyles from './Register.styles';
import { useMediaQuery } from "@mui/material";

import { IRegisterState } from '../../interfaces/register.interface';
import { registerInitialState } from '../../data/data';

import useFormValidation from '../../FormValidation/useFormValidation';
import TextInput from '../../stories/TextInput/TextInput';
import { postAxiosInfoDataRegister } from '../../services/axios/api';

const Register: React.FC = () => {
  const [registerData, setRegisterData] = useState(registerInitialState);
  const [verifyInputType, setVerifyInputType] = useState(true);
  const [userAlreadyExists, setUserAlreadyExists] = useState(false)

  const { validateError, handleErrorMessage } = useFormValidation<IRegisterState>("register");

  const navigate = useNavigate();

  const matches = useMediaQuery('(min-width:600px)');
  const verifyMediaSize = () => matches ? registerStyles.cardContainerDesk : registerStyles.cardContainerCell;

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRegisterData({
      ...registerData,
      [name]: value,
    });
  }

  const handleClick = async () => {
    await validateError(registerData);
    const { name, email, password } = registerData;
    const postAxiosInfo = await postAxiosInfoDataRegister({
      name,
      email,
      password,
      role: 'client',
    });
    if(postAxiosInfo?.message?.includes('401')) {
      setUserAlreadyExists(true);
      return;
    }
    if(postAxiosInfo?.message?.includes('401')
      || postAxiosInfo?.message?.includes('400')
    ) return;
    localStorage.setItem('user', JSON.stringify(postAxiosInfo.data));
    navigate('/client');
  }

  return (
    <section style={ registerStyles.container }>
      <section style={ registerStyles.cardContainer as CSSProperties }>
      <Formik
          initialValues={ registerInitialState }
          onSubmit={async (values, { resetForm }) => {
            // resetForm();
          }}
        >
          <Form style={ {
              ...registerStyles.cardContainer as CSSProperties,
              ...verifyMediaSize()
            } }
          >

            <h1 style={{ color: '#1ea7fd', fontSize: '30px', margin: 0 }}>Cadastrar</h1>

            <TextInput
              id="register-name"
              label="Nome"
              name="name"
              value={ registerData.name }
              onChange={ handleChange }
              style={{ width: '100%' }}
              { ...handleErrorMessage('name') }
            />

            <TextInput
              id="register-email"
              type="email"
              label="E-mail"
              name="email"
              value={ registerData.email }
              onChange={ handleChange }
              style={{ width: '100%' }}
              { ...handleErrorMessage('email', 'Insira o email') }
            />

          <article style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            <TextInput
              id="register-password"
              type="password"
              label="Senha"
              name="password"
              value={ registerData.password }
              onChange={ handleChange }
              style={{ width: '100%' }}
              { ...handleErrorMessage('password') }
            />

            <label htmlFor="input-login-check" style={{ width: '80%', display: 'flex', justifyContent: 'flex-start', gap: '10px' }}>
              <input
                id="input-login-check"
                type="checkbox"
                onClick={ () => setVerifyInputType(!verifyInputType) }
              />
              Mostrar password
            </label>
          </article>

            <Button
              primary
              label="Entrar"
              type="submit"
              style={{ width: '50%', height: '12%' }}
              onClick={ handleClick }
            />

            {
              userAlreadyExists
              && (
                <p style={{ color: 'red' }}>Usuário já existente</p>
              )
            }

            <h3 style={ registerStyles.message }>
              Já possui conta?
              <Link style={ registerStyles.link } to="/">Fazer login</Link>
            </h3>
          </Form>
        </Formik>
      </section>
    </section>
  );
}

export default Register;
