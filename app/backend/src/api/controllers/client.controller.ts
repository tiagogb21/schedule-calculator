import { Request, Response } from 'express';
import ClientService from '../services/client.service';
import { GenericError } from '../utils';

export default class ClientController {
  private service = new ClientService();

  getAllClients = async (req: Request, res: Response) => {
    try {
      const schedules = await this.service.getAllClients();
      return res.status(200).json(schedules);
    } catch (error) {
      const getError = error as GenericError;
      return res
        .status(401)
        .json({ message: getError.message });
    }
  };

  getClientByName = async (req: Request, res: Response) => {
    try {
      const schedule = await this.service.getClientByName(req.params);
      return res.status(200).json(schedule);
    } catch (error) {
      const getError = error as GenericError;
      return res
        .status(401)
        .json({ message: getError.message });
    }
  };

  createNewClient = async (req: Request, res: Response) => {
    try {
      const schedule = await this.service.createNewClient(req.body);
      return res.status(200).json(schedule);
    } catch (error) {
      const getError = error as GenericError;
      return res
        .status(401)
        .json({ message: getError.message });
    }
  };

  updateClient = async (req: Request, res: Response) => {
    try {
      const newUser = await this.service.updateClients(req.body, req.params);
      return res.status(200).json(newUser);
    } catch (error) {
      const getError = error as GenericError;
      return res
        .status(401)
        .json({ message: getError.message });
    }
  };

  deleteClient = async (req: Request, res: Response) => {
    try {
      const deleteClient = await this.service.deleteClient(req.params);
      return res.status(200).json(deleteClient);
    } catch (error) {
      const getError = error as GenericError;
      return res
        .status(401)
        .json({ message: getError.message });
    }
  };
}
