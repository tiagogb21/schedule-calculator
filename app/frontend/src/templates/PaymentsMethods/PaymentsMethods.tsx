import React, { useState } from 'react';
import TextInput from '../../stories/TextInput/TextInput';
import { Button } from '../../stories/Button/Button';
import useFormValidation from '../../FormValidation/useFormValidation';

const paymentsMethodsInitialValue = {
  cardNumber: '',
  cardValidate: '',
  cardCvv: '',
  cardName: '',
  numberOfInstallments: '',
}

interface ICardState {
  cardNumber: string;
  cardValidate: string;
  cardCvv: string;
  cardName: string;
  numberOfInstallments: string;
}

const PaymentsMethods: React.FC = () => {
  const [cardData, setCardData] = useState(paymentsMethodsInitialValue);

  const { validateError, handleErrorMessage } = useFormValidation<ICardState>("register");

  const handleClick = () => {
    return;
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCardData({
      ...cardData,
      [name]: value,
    })
  }

  return (
    <>
      <h2>Como você prefere pagar:</h2>
      <h4>Selecione a melhor forma de realizar o pagamento</h4>
      <TextInput
        id="register-name"
        label="Nome"
        name="name"
        value={ cardData.cardNumber }
        onChange={ handleChange }
        style={{ width: '80%' }}
        { ...handleErrorMessage('cardNumber') }
      />
      <TextInput
        id="register-name"
        label="Nome"
        name="name"
        value={ cardData.cardValidate }
        onChange={ handleChange }
        style={{ width: '80%' }}
        { ...handleErrorMessage('cardValidate') }
      />
      <TextInput
        id="register-name"
        label="Nome"
        name="name"
        value={ cardData.cardCvv }
        onChange={ handleChange }
        style={{ width: '80%' }}
        { ...handleErrorMessage('cardCvv') }
      />
      <TextInput
        id="register-name"
        label="Nome"
        name="name"
        value={ cardData.cardName }
        onChange={ handleChange }
        style={{ width: '80%' }}
        { ...handleErrorMessage('cardName') }
      />
      <TextInput
        id="register-name"
        label="Nome"
        name="name"
        value={ cardData.numberOfInstallments }
        onChange={ handleChange }
        style={{ width: '80%' }}
        { ...handleErrorMessage('numberOfInstallments') }
      />
      <Button
        primary
        onClick={ handleClick }
        label="confirmar pagamento"
      />
    </>
  );
}

export default PaymentsMethods;