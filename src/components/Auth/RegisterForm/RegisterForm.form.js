import { validateYupSchema } from "formik";
import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    user: "",
    name: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email(true).required(true),
    user: Yup.string().required(true),
    name: Yup.string().required(true),
    password: Yup.string().required(true),
  });
}
