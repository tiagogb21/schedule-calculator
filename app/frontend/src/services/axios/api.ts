import axios from 'axios';

interface IData {
  email: string;
  password: string;
}

interface IDataRegister {
  name: string;
  email: string;
  password: string;
  role: string;
}

const URL_LOGIN = 'http://localhost:3001/login';
const URL_REGISTER = 'http://localhost:3001/register';

export const postAxiosInfoData = async (data: IData) => await axios.post(
  URL_LOGIN,
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

export const postAxiosInfoDataRegister = async (data: IDataRegister) => await axios.post(
  URL_REGISTER,
  data,
).then((res: any) => res)
.catch((err: any) => err);
