import { Request, Response } from 'express';
import ScheduleService from '../services/schedule.service';
import { GenericError } from '../utils';

export default class ScheduleController {
  private service = new ScheduleService();

  getAllSchedule = async (req: Request, res: Response) => {
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

  getScheduleByDate = async (req: Request, res: Response) => {
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
}
