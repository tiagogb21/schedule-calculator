import React, { CSSProperties, useState } from 'react';
import { Form, Formik } from 'formik';
import TextInput from '../../stories/TextInput/TextInput';
import useFormValidation from '../../FormValidation/useFormValidation';
import IClientRegister from '../../interfaces/clientregister.interface';
import { Button } from '../../stories/Button/Button';
import { clientRegisterInitialState } from '../../data/data';
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import clientRegisterStyles from './ClientRegister.styles';
import { useMediaQuery } from '@material-ui/core';

const ClientRegister: React.FC = () => {
  const [clientRegister, setClientRegister] = useState(clientRegisterInitialState);

  const { validateError, handleErrorMessage } = useFormValidation<IClientRegister>("register");

  const matches = useMediaQuery('(min-width:600px)');

  const verifyMediaSize = () => !matches ?
    clientRegisterStyles.inputCell
    : clientRegisterStyles.inputDesk;
  
  const verifyMediaSizeButton = () => !matches ?
    clientRegisterStyles.buttonBoxCell
    : clientRegisterStyles.buttonBoxDesk;

  const navigate = useNavigate();

  const handleLogin = (formValue: IClientRegister) => {
    const { email } = formValue;

    AuthService.login(email, '').then(
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

          setClientRegister({
          ...formValue,
          // loading: false,
          // message: resMessage
        });
      }
    );
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setClientRegister({
      ...clientRegister,
      [name]: value,
    })
  }

  const handleClick = async () => {
    // await validateError(clientRegister);
  }

  const handleClickUpdate = async () => {
    
  }

  return (
    <Formik
      initialValues={ clientRegisterInitialState }
      onSubmit={async (values, { resetForm }) => {
        await handleLogin(values);
        resetForm();
      }}
    >
      <Form
        style={ clientRegisterStyles.container as CSSProperties }
      >
        <TextInput
          id="client-register-name"
          label="Nome"
          name="name"
          value={ clientRegister.name }
          onChange={ handleChange }
          style={ verifyMediaSize() }
          { ...handleErrorMessage('name') }
        />

        <TextInput
          id="client-register-address"
          label="Endereço"
          name="address"
          value={ clientRegister.address }
          onChange={ handleChange }
          style={ verifyMediaSize() }
          { ...handleErrorMessage('address') }
        />

        <TextInput
          id="client-register-district"
          label="Bairro"
          name="district"
          value={ clientRegister.district }
          onChange={ handleChange }
          style={ verifyMediaSize() }
          { ...handleErrorMessage('district') }
        />

        <TextInput
          id="client-register-city"
          label="Cidade"
          name="city"
          value={ clientRegister.city }
          onChange={ handleChange }
          style={ verifyMediaSize() }
          { ...handleErrorMessage('city') }
        />

        <TextInput
          id="client-register-state"
          label="Estado"
          name="state"
          value={ clientRegister.state }
          onChange={ handleChange }
          style={ verifyMediaSize() }
          { ...handleErrorMessage('state') }
        />

        <TextInput
          id="client-register-phone"
          label="Celular ou Telefone"
          name="phone"
          value={ clientRegister.phone }
          onChange={ handleChange }
          style={ verifyMediaSize() }
          { ...handleErrorMessage('phone') }
        />

        <TextInput
          id="client-register-email"
          label="Email"
          name="email"
          value={ clientRegister.email }
          onChange={ handleChange }
          style={ verifyMediaSize() }
          { ...handleErrorMessage('email') }
        />

        <article style={ verifyMediaSizeButton() }>
          <Button
            label="Adicionar"
            type="submit"
            style={{ width: '50%', height: '15%', border: '2px solid #1ea7fd' }}
            onClick={ handleClick }
          />
          <Button
            primary
            label="Atualizar"
            type="button"
            style={{ width: '50%', height: '15%' }}
            onClick={ handleClickUpdate }
          />
        </article>
      </Form>
    </Formik>
  );
}

export default ClientRegister;