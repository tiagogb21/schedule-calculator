import { Request, Response } from 'express';
import ScheduleService from '../services/schedule.service';
import { GenericError } from '../utils';

export default class ScheduleController {
  private service = new ScheduleService();

  getAllSchedule = async (req: Request, res: Response) => {
    try {
      const schedules = await this.service.getAllSchedule();
      return res.status(200).json(schedules);
    } catch (error) {
      const getError = error as GenericError;
      return res
        .status(401)
        .json({ message: getError.message });
    }
  };

  getSchedulesByClient = async (req: Request, res: Response) => {
    try {
      const schedule = await this.service.getSchedulesByClient(req.params);
      return res.status(200).json(schedule);
    } catch (error) {
      const getError = error as GenericError;
      return res
        .status(401)
        .json({ message: getError.message });
    }
  };

  getScheduleByDate = async (req: Request, res: Response) => {
    try {
      const schedule = await this.service.getScheduleByDate(req.params);
      return res.status(200).json(schedule);
    } catch (error) {
      const getError = error as GenericError;
      return res
        .status(401)
        .json({ message: getError.message });
    }
  };

  createNewSchedule = async (req: Request, res: Response) => {
    try {
      const newUser = await this.service.createNewSchedule(req.body);
      return res.status(200).json(newUser);
    } catch (error) {
      const getError = error as GenericError;
      return res
        .status(401)
        .json({ message: getError.message });
    }
  };

  updateSchedule = async (req: Request, res: Response) => {
    try {
      const newUser = await this.service.updateSchedule(req.body, req.params);
      return res.status(200).json(newUser);
    } catch (error) {
      const getError = error as GenericError;
      return res
        .status(401)
        .json({ message: getError.message });
    }
  };

  deleteSchedule = async (req: Request, res: Response) => {
    try {
      const deleteUser = await this.service.deleteSchedule(req.params);
      return res.status(200).json(deleteUser);
    } catch (error) {
      const getError = error as GenericError;
      return res
        .status(401)
        .json({ message: getError.message });
    }
  };
}
