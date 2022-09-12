import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import Calculator from '../components/Calculator/Calculator';
import ClientAccess from '../templates/ClientAccess/ClientAccess';
import ClientRegister from '../templates/ClientRegister/ClientRegister';
import Login from '../templates/Login/Login';
import Payments from '../templates/Payments/Payments';
import Register from '../templates/Register/Register';
import ScheduleHome from '../templates/ScheduleHome.ts/ScheduleHome';

const PathRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/home" element={<ScheduleHome />}/>
      <Route path="/calc" element={<Calculator />}/>
      <Route path="/client" element={<ClientAccess />}/>
      <Route path="/client-register" element={<ClientRegister />}/>
      <Route path="/payments" element={<Payments />}/>
    </Routes>
  );
}

export default PathRouter;
