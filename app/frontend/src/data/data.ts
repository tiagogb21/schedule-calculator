import {
  GridColDef,
} from '@mui/x-data-grid';

export const loginInitialState = {
  email: '',
  password: '',
  loading: true,
  message: '',
};

export const registerInitialState = {
  name: '',
  email: '',
  password: '',
  loading: true,
  message: '',
};

export const mainTopScheduleInitialState = {
  createdBy: '',
  client: '',
  status: 'pendente',
  value: '',
  date: '',
}

export const clientRegisterInitialState = {
  client: '',
  address: '',
  district: '',
  city: '',
  state: '',
  phone: '',
  email: '',
}

export const calculatorButtons = [
  [
    {
      name: '←',
      color: 'lightgray',
      width: '48%',
      func: 'clear',
    },
    {
      name: 'ac',
      color: 'lightgray',
      width: '48%',
      func: 'shiftDigit',
    }
  ],
  [
    {
      name: '7',
      color: 'inherit',
      width: '23%',
    },
    {
      name: '8',
      color: 'inherit',
      width: '23%',
    },
    {
      name: '9',
      color: 'inherit',
      width: '23%',
    },
    {
      name: '/',
      color: 'lightgray',
      width: '23%',
    },
  ],
  [
    {
      name: '4',
      color: 'inherit',
      width: '23%',
    },
    {
      name: '5',
      color: 'inherit',
      width: '23%',
    },
    {
      name: '6',
      color: 'inherit',
      width: '23%',
    },
    {
      name: '*',
      color: 'lightgray',
      width: '23%',
    },
  ],
  [
    {
      name: '1',
      color: 'inherit',
      width: '23%',
    },
    {
      name: '2',
      color: 'inherit',
      width: '23%',
    },
    {
      name: '3',
      color: 'inherit',
      width: '23%',
    },
    {
      name: '-',
      color: 'lightgray',
      width: '23%',
    },
  ],
  [
    {
      name: '0',
      color: 'inherit',
      width: '23%',
    },
    {
      name: '.',
      color: 'inherit',
      width: '23%',
    },
    {
      name: '=',
      color: 'inherit',
      width: '23%',
    },
    {
      name: '+',
      color: 'lightgray',
      width: '23%',
    },
  ],
];

export const dummyMenuItems = [
  {
    title: "Adicionar Registro"
  },
  {
    title: "Atualizar Registro"
  },
  {
    title: "Deletar Registro"
  }
];

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'createdBy', headerName: 'CRIADO POR', width: 170 },
  { field: 'client', headerName: 'PACIENTE', width: 150 },
  { field: 'value', headerName: 'VALOR', width: 130 },
  { field: 'status', headerName: 'STATUS', width: 150 },
  { field: 'date', headerName: 'DATE', width: 150 },
];

export const formatedDate = () => {
  const date = new Date(),
      day = date.getDate().toString(),
      dayF = (day.length === 1) ? '0' + day : day,
      month  = (date.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      monthF = (month.length === 1) ? '0' + month : month,
      yearF = date.getFullYear();
  return `${ dayF } / ${ monthF } / ${ yearF }`;
}
