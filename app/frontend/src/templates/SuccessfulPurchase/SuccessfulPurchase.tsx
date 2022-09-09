import React from 'react';

const SuccessfulPurchase: React.FC = () => {
  return (
    <>
      <h2>Exame marcado</h2>
      <article>
        <p>A doutora Érica já recebeu o agendamento de seu exame e espera por você em seu consultório.</p>
        {/* <p><b>Horário: </b> {data} </p> */}
        <p><b>Endereço: </b> Rua Consultório Érica </p>
        {/* <p><b>Paciente:</b> { successfullPurchaseData.name }</p> */}
      </article>
      <h2>A dra Érica agradece seu voto de confiança!</h2>
    </>
  );
}

export default SuccessfulPurchase;