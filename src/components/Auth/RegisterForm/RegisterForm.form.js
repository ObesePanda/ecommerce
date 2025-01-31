import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    username: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("Correo electrónico inválido")
      .required("Este campo es requerido"),
    username: Yup.string().required("Este campo es requerido"),
    password: Yup.string().required("Este campo es requerido"),
  });
}
