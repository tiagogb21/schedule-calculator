import React, { CSSProperties, useEffect, useState } from 'react';
import { Formik, Form } from "formik";

import { Button } from '../../stories/Button/Button';

import AuthService from "../../services/auth.service";
import { Link, useNavigate } from 'react-router-dom';

import loginStyles from './Login.styles';
import { useMediaQuery } from "@mui/material";

import { ILoginState } from '../../interfaces/login.interface';
import { loginInitialState } from '../../data/data';
import useFormValidation from '../../FormValidation/useFormValidation';
import TextInput from '../../stories/TextInput/TextInput';
import { getAxiosRole, postAxiosInfoData } from '../../services/axios/api';

const Login: React.FC = (props) => {
  const [loginData, setLoginData] = useState(loginInitialState);
  const [verifyInputType, setVerifyInputType] = useState(true);
  const [verifyLogin, setVerifyLogin] = useState(false);

  const { validateError, handleErrorMessage } = useFormValidation<ILoginState>("register");

  const navigate = useNavigate();

  const matches = useMediaQuery('(min-width:600px)');

  const verifyMediaSize = () => matches ?
    loginStyles.cardContainerDesk
    : loginStyles.cardContainerCell;

  useEffect(() => {
    localStorage.clear();
  }, [])

  const handleLogin = (formValue: ILoginState) => {
    const { email, password } = formValue;

    AuthService.login(email, password).then(
      () => {
        navigate("/profile");
        window.location.reload();
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoginData({
          ...formValue,
          loading: false,
          message: resMessage
        });
      }
    );
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleClick = async () => {
    await validateError(loginData);
    const { email, password } = loginData;
    const data = { email, password };
    const postAxiosInfo = await postAxiosInfoData(data)
    if(postAxiosInfo?.message?.includes('401')) return setVerifyLogin(true);
    const { token, name } = postAxiosInfo.data;
    const user = { token, name };
    const getAxiosInfo = await getAxiosRole(token)
    const { role } = getAxiosInfo.data;
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('role', role);
    switch(role) {
      case 'admin':
        navigate('/home');
        break;
      case 'user':
        navigate('/home');
        break;
      case 'client':
        navigate('/client');
        break;
      default:
        navigate('/client');
        break;
    }
  }

  return (
    <section style={ loginStyles.container }>
      <section style={ loginStyles.cardContainer as CSSProperties }>
      <Formik
          initialValues={ loginInitialState }
          onSubmit={async (values, { resetForm }) => {
            await handleLogin(values);
            resetForm();
          }}
        >
          <Form style={ {
              ...loginStyles.cardContainer as CSSProperties,
              ...verifyMediaSize()
            } }
          >

            <h1 style={{ color: '#1ea7fd', fontSize: '30px', margin: '0' }}>Login</h1>

            <TextInput
              id="login-email"
              label="E-mail"
              name="email"
              value={ loginData.email }
              onChange={ handleChange }
              style={{ width: '100%' }}
              { ...handleErrorMessage('email', 'Insira o email') }
            />

          <article style={ loginStyles.passBox as CSSProperties }>
            <TextInput
              id="outlined-basic"
              label="Senha"
              name="password"
              type={ verifyInputType ? "password" : "text" }
              value={ loginData.password }
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

            <h3 style={ loginStyles.message }>
              N??o possui conta?
              <Link style={ loginStyles.link } to="/register">Cadastre-se</Link>
            </h3>

            {
              verifyLogin && <p style={{ color: 'red' }}>Email ou senha inv??lido.</p>
            }
          </Form>
        </Formik>
      </section>
    </section>
  );
}

export default Login;
