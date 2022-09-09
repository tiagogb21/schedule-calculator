import { GenericError } from '../utils';

import ClientModel from '../../database/models/client.model';

import { IClient } from '../interfaces/client.interface';

const clientRegistered = 'Cliente já cadastrado!';

const clientNotFound = 'Cliente não encontrado';

export default class ClientService {
  private model = ClientModel;

  getAllClients = async () => {
    return await this.model.findAll();
  };

  getClientByName = async (params: any) => {
    const { id } = params;
    const findClient = await this.model.findAll({
      where: {
        name: id,
      }
    });
    return findClient;
  }

  createNewClient = async (newSchedule: IClient) => {
    const { client } = newSchedule;
    const clientAlreadyRegistered = await this.model.findOne({
      where: {
        client,
      },
    });

    if (clientAlreadyRegistered) throw new GenericError(401, clientRegistered);

    await this.model.create(newSchedule);

    return {
      newSchedule,
    };
  };

  updateClients = async (body: IClient, params: any) => {
    const getClient = await this.getClientByName(params);
    if(!getClient) throw new GenericError(401, clientNotFound);
    const { client } = body;
    const { id } = params;
    const newSchedule = await this.model.update(
      { id },
      {
        where: {
          client,
        }
      },
    );
    return newSchedule;
  }

  deleteClient = async (params: any) => {
    const { id } = params;
    const newSchedule = await this.model.destroy({
      where: { date: id }
    });
    return newSchedule;
  }
}
