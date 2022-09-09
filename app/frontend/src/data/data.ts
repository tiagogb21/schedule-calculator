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
  professional: '',
  pacient: '',
  status: 'pendente',
  data: '',
  value: '',
}

export const clientRegisterInitialState = {
  name: '',
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
