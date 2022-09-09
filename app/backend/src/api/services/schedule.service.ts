import { GenericError } from '../utils';

import ScheduleModel from '../../database/models/schedule.model';

import { ISchedule } from '../interfaces/schedule.interface';

const dateRegistered = 'Data já cadastrada!';

export default class ScheduleService {
  private model = ScheduleModel;

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
}
