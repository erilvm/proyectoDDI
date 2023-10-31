import * as Yup from 'yup';

export function initialValues(firstname, lastname, username, email, currentPassword, newPassword) {
  return {
    firstname: firstname || '',
    lastname: lastname || '',
    username: username || '',
    email: email || '',
    currentPassword: currentPassword || '',
    newPassword: newPassword || '',
  };
}

export function validationSchema() {
  return Yup.object().shape({
    firstname: Yup.string().required('El nombre es obligatorio'),
    lastname: Yup.string().required('El apellido es obligatorio'),
    username: Yup.string().required('El nombre de usuario es obligatorio'),
    email: Yup.string().email('Correo electrónico no válido').required('El correo electrónico es obligatorio'),
    currentPassword: Yup.string().required('La contraseña actual es obligatoria'),
    newPassword: Yup.string()
      .min(6, 'La contraseña debe tener al menos 6 caracteres')
      .required('La contraseña nueva es obligatoria'),
  });
}

