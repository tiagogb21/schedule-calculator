import * as yup from 'yup';

const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Campo obrigatório!"),
  email: yup
    .string()
    .required("Campo obrigatório!")
    .email("Email inválido!"),
  password: yup
    .string()
    .required("Campo obrigatório!"),
  client: yup
    .string()
    .required("Campo obrigatório!"),
  value: yup
    .number()
    .typeError("Especifique um número!")
    .min(0, "Apenas valores positivos!")
    .required("Campo obrigatório!"),
  status: yup
    .string()
    .required("Campo obrigatório!"),
  address: yup
    .string()
    .required("Campo obrigatório!"),
  district: yup
    .string()
    .required("Campo obrigatório!"),
  city: yup
    .string()
    .required("Campo obrigatório!"),
  state: yup
    .string()
    .required("Campo obrigatório!"),
  phone: yup
    .string()
    .required("Campo obrigatório!"),
});

/*
birthday: yup.string().test('is-underage', 'you are underage', (birthday) => {
  if(!birthday) return false;
  const date = new Date(birthday);
  const now = new Date();
  return now.getFullYear() - date.getFullYear() < 18;
})
*/

export default registerSchema;
