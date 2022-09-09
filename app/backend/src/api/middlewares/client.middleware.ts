import { Request, Response, NextFunction } from 'express';
import { allFieldsMustBeFilledMessage, incorrectMessageRegister } from '../data/data';

export default class ClientMiddleware {
  static isValidClientName(
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

  static isValidGenre(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { genre } = req.body;
    if (genre?.length === 0 || !genre) {
      return res.status(400).json({ message: allFieldsMustBeFilledMessage });
    }
    next();
  }

  static isValidBirthday(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { birthday } = req.body;
    if (birthday?.length === 0 || !birthday) {
      return res.status(400).json({ message: allFieldsMustBeFilledMessage });
    }
    next();
  }

  static isValidNaturalness(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { naturalness } = req.body;
    if (naturalness?.length === 0 || !naturalness) {
      return res.status(400).json({ message: allFieldsMustBeFilledMessage });
    }
    next();
  }

  static isValidProfession(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { profession } = req.body;
    if (profession?.length === 0 || !profession) {
      return res.status(400).json({ message: allFieldsMustBeFilledMessage });
    }
    next();
  }

  static isValidMaritalStatus(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { marital } = req.body;
    if (marital?.length === 0 || !marital) {
      return res.status(400).json({ message: allFieldsMustBeFilledMessage });
    }
    next();
  }

  static isValidCellphone(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { cellphone } = req.body;
    if (cellphone?.length === 0 || !cellphone) {
      return res.status(400).json({ message: allFieldsMustBeFilledMessage });
    }
    next();
  }

  static isValidEmail(
    req: Request,
    res: Response,
    next: NextFunction,
  ): Response | void {
    const { email } = req.body;
    if (email?.length === 0 || !email) {
      return res.status(400).json({ message: allFieldsMustBeFilledMessage });
    }
    next();
  }
}
