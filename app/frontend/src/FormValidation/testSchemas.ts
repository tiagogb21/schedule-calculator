import * as yup from 'yup';
import { ILoginState } from '../interfaces/login.interface';
import { IRegisterState } from '../interfaces/register.interface';
import { ITable } from '../interfaces/table.interface';

import register from './schemas/register.schema';

const listSchemas = {
  register,
};

export type FormName = keyof typeof listSchemas;

export type FormValues = IRegisterState | ILoginState | ITable;

const testSchema = async (
  schema: FormName,
  value: FormValues
): Promise<true | yup.ValidationError[]> => {
  try {
    const formSchema = listSchemas[schema];
    await formSchema.validate(value, { abortEarly: false });
    return true;
  } catch (err: any) {
    return err.inner;
  }
}

export default testSchema;
