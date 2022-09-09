import { Router } from 'express';
import ScheduleController from '../controllers/schedule.controller';
import ScheduleMiddleware from '../middlewares/schedule.middleware';

const routes = Router();

const controller = new ScheduleController();

routes.get(
  '/',
  controller.getAllSchedule,
);

routes.get(
  '/client/:id',
  controller.getSchedulesByClient,
);

routes.get(
  '/date/:id',
  controller.getScheduleByDate,
);

routes.post(
  '/',
  ScheduleMiddleware.isValidCreatedBy,
  ScheduleMiddleware.isValidClient,
  ScheduleMiddleware.isValidValue,
  ScheduleMiddleware.isValidStatus,
  ScheduleMiddleware.isValidDate,
  controller.createNewSchedule,
);

routes.put(
  '/new-schedule/client/:id',
  ScheduleMiddleware.isValidCreatedBy,
  ScheduleMiddleware.isValidClient,
  ScheduleMiddleware.isValidValue,
  ScheduleMiddleware.isValidStatus,
  ScheduleMiddleware.isValidDate,
  controller.createNewSchedule,
);

routes.delete(
  '/delete/:id',
  ScheduleMiddleware.isValidCreatedBy,
  ScheduleMiddleware.isValidClient,
  ScheduleMiddleware.isValidValue,
  ScheduleMiddleware.isValidStatus,
  ScheduleMiddleware.isValidDate,
  controller.createNewSchedule,
);

export default routes;
