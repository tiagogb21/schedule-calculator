import { NextFunction, Request, Response } from 'express';

export default class LoginMiddleware {
  static isValidEmail(req: Request, res: Response, next: NextFunction): Response | void {
    const { email } = req.body;
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email) return res.status(400).json({ message: 'All fields must be filled' });
    if (!emailRegex.test(email)) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    next();
  }

  static isValidPassword(req: Request, res: Response, next: NextFunction): Response | void {
    const { password } = req.body;
    if (!password) return res.status(400).json({ message: 'All fields must be filled' });
    if (password.length < 8) {
      return res.status(400).json({ message: 'Incorrect email or password' });
    }
    next();
  }
}
