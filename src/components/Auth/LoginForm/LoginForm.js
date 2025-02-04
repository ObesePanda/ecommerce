import React from "react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.form";
import { Auth } from "@/api";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
const authCtrl = new Auth();

export function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();

  console.log(useAuth());
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: true, // Cambiado a true para validar en tiempo real
    onSubmit: async (formLogin) => {
      try {
        const response = await authCtrl.login(formLogin);
        login(response.jwt);
        console.log(response);
        //router.push("/");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div>
      <form
        name="formLogin"
        id="formLogin"
        className="max-w-md mx-auto "
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="identifier"
            className="flex mb-2 text-sm font-medium text-white items-center"
          >
            Tu correo electronico{" "}
          </label>
          <input
            type="text"
            name="identifier"
            id="identifier"
            className="shadow-xs bg-zinc-700 border-zinc-800 border-[1px] text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
            placeholder="Correo electronico o nombre de usuario"
            value={formik.values.identifier}
            onChange={formik.handleChange}
          />
          {formik.errors.identifier && (
            <div className="text-red-500">{formik.errors.identifier}</div>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="password" className="flex mb-2 text-sm font-medium">
            Tu contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="shadow-xs bg-zinc-700 border-zinc-800 border-[1px] text-sm rounded-lg block w-full p-2.5"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && (
            <div className="text-red-500">{formik.errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-[#1d7a15] hover:bg-[#10310d] transition-all duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center w-[300px] flex justify-center"
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
}
