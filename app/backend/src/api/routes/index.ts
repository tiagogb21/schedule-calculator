import { Router } from 'express';

import login from './login.route';
import register from './register.route';
import schedule from './schedule.route';
import client from './client.route';

const routes = Router();

routes.use('/login', login);
routes.use('/register', register);
routes.use('/schedule', schedule);
routes.use('/client', client);

export default routes;
