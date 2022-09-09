import { GenericError } from '../utils';

import ScheduleModel from '../../database/models/schedule.model';

import { ISchedule } from '../interfaces/schedule.interface';

const dateRegistered = 'Data já cadastrada!';

const dateNotFound = 'Data não encontrada';

export default class ScheduleService {
  private model = ScheduleModel;

  getAllSchedule = async () => {
    return await this.model.findAll();
  };

  getSchedulesByClient = async (params: any) => {
    const { id } = params;
    const findSchedule = await this.model.findAll({
      where: {
        name: id,
      }
    });
    return findSchedule;
  }

  getScheduleByDate = async (params: any) => {
    const { id } = params;
    const findSchedule = await this.model.findOne({
      where: {
        date: id,
      }
    });
    return findSchedule;
  }

  createNewSchedule = async (newSchedule: ISchedule) => {
    const { date } = newSchedule;
    const dateAlreadyRegistered = await this.model.findOne({
      where: {
        date,
      },
    });

    if (dateAlreadyRegistered) throw new GenericError(401, dateRegistered);

    await this.model.create(newSchedule);

    return {
      newSchedule,
    };
  };

  updateSchedule = async (body: ISchedule, params: any) => {
    const getByDate = await this.getScheduleByDate(params);
    if(!getByDate) throw new GenericError(401, dateNotFound);
    const { date } = body;
    const { id } = params;
    const newSchedule = await this.model.update(
      { date },
      { where: { client: id } },
    );
    return newSchedule;
  }

  deleteSchedule = async (params: any) => {
    const { id } = params;
    const newSchedule = await this.model.destroy({
      where: { date: id }
    });
    return newSchedule;
  }
}
