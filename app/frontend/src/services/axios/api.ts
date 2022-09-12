import axios from 'axios';

interface IData {
  email: string;
  password: string;
}

interface IDataTable {
  id?: number;
  createdBy: string;
  client: string;
  value: string;
  status: string;
  date: string;
}

interface IDataRegister {
  name: string;
  email: string;
  password: string;
  role: string;
}

const URL_LOGIN = 'http://localhost:3001/login';
const URL_REGISTER = 'http://localhost:3001/register';
const URL_SCHEDULE = 'http://localhost:3001/schedule';
const URL_CLIENT = 'http://localhost:3001/client';

export const postAxiosInfoData = async (data: IData) => await axios.post(
  URL_LOGIN,
  data,
).then((res: any) => res)
.catch((err: any) => err);

export const postAxiosInfoDataTable = async (data: IDataTable) => await axios.post(
  URL_SCHEDULE,
  data,
).then((res: any) => res)
.catch((err: any) => err);

export const getAxiosRole = async (token: string) => await axios.get(
  `${ URL_LOGIN }/validate`,
  {
    headers: {
      'Authorization': `${token}`
    }
  },
).then((res: any) => res)
.catch((err: any) => err);

export const getAxiosClient = async () => await axios.get(
  URL_CLIENT
).then((res: any) => res)
.catch((err: any) => err);

export const postAxiosInfoDataRegister = async (data: IDataRegister) => await axios.post(
  URL_REGISTER,
  data,
).then((res: any) => res)
.catch((err: any) => err);
