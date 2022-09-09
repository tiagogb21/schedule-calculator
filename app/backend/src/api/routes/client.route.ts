import { Router } from 'express';
import ClientController from '../controllers/client.controller';
import ClientMiddleware from '../middlewares/client.middleware';

const routes = Router();

const controller = new ClientController();

routes.get(
  '/',
  controller.getAllClients,
);

routes.get(
  '/client/:id',
  controller.getClientByName,
);

routes.post(
  '/',
  ClientMiddleware.isValidClientName,
  ClientMiddleware.isValidGenre,
  ClientMiddleware.isValidBirthday,
  ClientMiddleware.isValidNaturalness,
  ClientMiddleware.isValidProfession,
  ClientMiddleware.isValidMaritalStatus,
  ClientMiddleware.isValidCellphone,
  ClientMiddleware.isValidEmail,
  controller.createNewClient,
);

routes.put(
  '/new-schedule/client/:id',
  ClientMiddleware.isValidClientName,
  ClientMiddleware.isValidGenre,
  ClientMiddleware.isValidBirthday,
  ClientMiddleware.isValidNaturalness,
  ClientMiddleware.isValidProfession,
  ClientMiddleware.isValidMaritalStatus,
  ClientMiddleware.isValidCellphone,
  ClientMiddleware.isValidEmail,
  controller.updateClient,
);

routes.delete(
  '/delete/:id',
  ClientMiddleware.isValidClientName,
  ClientMiddleware.isValidGenre,
  ClientMiddleware.isValidBirthday,
  ClientMiddleware.isValidNaturalness,
  ClientMiddleware.isValidProfession,
  ClientMiddleware.isValidMaritalStatus,
  ClientMiddleware.isValidCellphone,
  ClientMiddleware.isValidEmail,
  controller.deleteClient,
);

export default routes;
