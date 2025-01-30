import React from "react";
import { MailIcon } from "./MailIcon";
import { UserIcon } from "./UserIcon";
import { PassIcon } from "./PassIcon";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.form";
import { Auth } from "@/api";

const authCtrl = new Auth();

export function RegisterForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: true, // Cambiado a true para validar en tiempo real
    onSubmit: async (formRegister) => {
      try {
        await authCtrl.register(formRegister);
        console.log("Usuario registrado correctamente");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div>
      <form
        name="formRegister"
        id="formRegister"
        className="max-w-sm mx-auto"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="flex mb-2 text-sm font-medium text-white items-center"
          >
            <MailIcon />
            Tu correo electronico{" "}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="shadow-xs bg-zinc-700 border-zinc-800 border-[1px] text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none"
            placeholder="tucorreo@dominio.com"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <div className="text-red-500">{formik.errors.email}</div>
          )}
        </div>
        <div className="mb-5">
          <label htmlFor="username" className="flex mb-2 text-sm font-medium">
            <UserIcon />
            Tu usuario
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="shadow-xs bg-zinc-700 border-zinc-800 border-[1px] text-sm rounded-lg block w-full p-2.5"
            value={formik.values.username}
            onChange={formik.handleChange}
          />
          {formik.errors.username && (
            <div className="text-red-500">{formik.errors.username}</div>
          )}
        </div>

        <div className="mb-5">
          <label htmlFor="password" className="flex mb-2 text-sm font-medium">
            <PassIcon />
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
          className="text-white bg-[#1d7a15] hover:bg-[#10310d] transition-all duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center w-full flex justify-center"
        >
          Crear Cuenta
        </button>
      </form>
    </div>
  );
}
