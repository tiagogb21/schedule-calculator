import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';
import Login from '../templates/Login/Login';
import Register from '../templates/Register/Register';
import ScheduleHome from '../templates/ScheduleHome.ts/ScheduleHome';

const PathRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/home" element={<ScheduleHome />}/>
    </Routes>
  );
}

export default PathRouter;