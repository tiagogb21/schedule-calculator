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
