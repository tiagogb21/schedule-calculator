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
    <section style={{ width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <section style={{ width: '60vw', height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <h2>Confirme os dados do exame para continuar</h2>
        <p><strong>Produto:</strong> Tratamento dentário - doutora Érica</p>
        <p><strong>Dia</strong>: { clientData.dia } <strong>Hora</strong>: { clientData.hora }</p>
        <p><strong>Paciente</strong>: { clientData.name }</p>
        <section style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Button
            primary
            label="confirmar"
            onClick={ handleClick }
            style={{ width: '50%' }}
          />
        </section>
      </section>
    </section>
  );
}

export default Payments;
