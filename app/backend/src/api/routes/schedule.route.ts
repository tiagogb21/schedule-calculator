import { Router } from 'express';
import ScheduleController from '../controllers/schedule.controller';
import ScheduleMiddleware from '../middlewares/schedule.middleware';

const routes = Router();

const controller = new ScheduleController();

routes.get(
  '/',
  controller.createNewSchedule,
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
  '/',
  ScheduleMiddleware.isValidCreatedBy,
  ScheduleMiddleware.isValidClient,
  ScheduleMiddleware.isValidValue,
  ScheduleMiddleware.isValidStatus,
  ScheduleMiddleware.isValidDate,
  controller.createNewSchedule,
);

routes.delete(
  '/',
  ScheduleMiddleware.isValidCreatedBy,
  ScheduleMiddleware.isValidClient,
  ScheduleMiddleware.isValidValue,
  ScheduleMiddleware.isValidStatus,
  ScheduleMiddleware.isValidDate,
  controller.createNewSchedule,
);

export default routes;
