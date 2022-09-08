import { Request, Response } from 'express';
import LoginService from '../services/login.service';
import GenericError from '../utils/error';

export default class LoginController {
  private service = new LoginService();

  loginSuccess = async (req: Request, res: Response) => {
    try {
      const token = await this.service.loginSuccess(req.body);
      return res.status(200).json(token);
    } catch (error) {
      const genericError = error as GenericError;
      return res.status(401).json({ message: genericError.message });
    }
  };

  validateToken = async (req: Request, res: Response) => {
    try {
      const { authorization } = req.headers;
      const token = authorization as string;
      const role = this.service.validateToken(token);
      return res.status(200).json(role);
    } catch (error) {
      const genericError = error as GenericError;
      return res.status(401).json({ message: genericError.message });
    }
  };
}
