import * as yup from 'yup';

const tableSchema = yup.object().shape({
  patient: yup
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
