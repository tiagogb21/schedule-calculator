import { Request, Response, NextFunction } from 'express';
import { allFieldsMustBeFilledMessage, incorrectMessageRegister } from '../data/data';

export default class ScheduleMiddleware {
  static isValidCreatedBy(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { createdBy } = req.body;
    if (createdBy?.length === 0 || !createdBy) {
      return res.status(400).json({ message: allFieldsMustBeFilledMessage });
    }
    next();
  }

  static isValidClient(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { client } = req.body;
    if (client?.length === 0 || !client) {
      return res.status(400).json({ message: allFieldsMustBeFilledMessage });
    }
    next();
  }

  static isValidValue(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { value } = req.body;
    if (value?.length === 0 || !value) {
      return res.status(400).json({ message: allFieldsMustBeFilledMessage });
    }
    next();
  }

  static isValidStatus(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { status } = req.body;
    if (status?.length === 0 || !status) {
      return res.status(400).json({ message: allFieldsMustBeFilledMessage });
    }
    next();
  }

  static isValidDate(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { date } = req.body;
    if (date?.length === 0 || !date) {
      return res.status(400).json({ message: allFieldsMustBeFilledMessage });
    }
    next();
  }
}
