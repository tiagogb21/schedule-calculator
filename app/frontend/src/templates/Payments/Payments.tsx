import React from 'react';
import { Button } from '../../stories/Button/Button';

const clientData = {
  dia: '',
  hora: '',
  name: '',
}

const Payments: React.FC = () => {
  const handleClick = () => {

  }

  return (
    <>
      <h2>Confirme os dados do exame para continuar</h2>
      <h3>Produto</h3>
      <h4>Tratamento dentário - doutora Érica</h4>
      <h3>Data</h3>
      <h4>dia: { clientData.dia } hora: { clientData.hora }</h4>
      <h3>Paciente</h3>
      <h4>Nome: { clientData.name }</h4>
      <Button
        primary
        label="confirmar"
        onClick={ handleClick }
      />
    </>
  );
}

export default Payments;
