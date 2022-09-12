import * as yup from 'yup';

const tableSchema = yup.object().shape({
  client: yup
    .string()
    .required("Campo obrigatório!"),
  value: yup
    .string()
    .required("Campo obrigatório!"),
  status: yup
    .string()
    .required("Campo obrigatório!"),
});

export default tableSchema;
