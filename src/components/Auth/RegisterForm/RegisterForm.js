import React from "react";
import { MailIcon } from "./MailIcon";
import { UserIcon } from "./UserIcon";
import { PassIcon } from "./PassIcon";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./RegisterForm.form";

export function RegisterForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: (formValue) => {
      console.log("Formulario Enviado");
      console.log(formValue);
    },
  });
  return (
    <div>
      <form class="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
        <div class="mb-5">
          <label
            for="email"
            class="flex mb-2 text-sm font-medium text-white items-center"
          >
            <MailIcon />
            Tu correo electronico{" "}
          </label>
          <input
            type="text"
            name="email"
            id="email"
            class="shadow-xs bg-zinc-700 border-zinc-800 border-[1px] text-white text-sm rounded-lg block w-full p-2.5 focus:outline-none  "
            placeholder="tucorreo@dominio.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.errors.email}
          />
        </div>
        <div class="mb-5">
          <label for="user" class="flex mb-2 text-sm font-medium ">
            <UserIcon />
            Tu usuario
          </label>
          <input
            type="text"
            name="user"
            id="user"
            class="shadow-xs bg-zinc-700 border-zinc-800 border-[1px] text-sm rounded-lg block w-full p-2.5"
            value={formik.values.user}
            onChange={formik.handleChange}
            error={formik.errors.user}
          />
        </div>
        <div class="mb-5">
          <label for="name" class="flex mb-2 text-sm font-medium ">
            Nombre y apellidos
          </label>
          <input
            type="text"
            name="name"
            id="name"
            class="shadow-xs bg-zinc-700 border-zinc-800 border-[1px] text-sm rounded-lg block w-full p-2.5"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.errors.name}
          />
        </div>
        <div class="mb-5">
          <label for="password" class="flex mb-2 text-sm font-medium ">
            <PassIcon />
            Tu contraseña
          </label>
          <input
            type="password"
            name="password"
            id="password"
            class="shadow-xs bg-zinc-700 border-zinc-800 border-[1px] text-sm rounded-lg block w-full p-2.5"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.errors.password}
          />
        </div>

        <div class="flex items-start mb-5">
          <div class="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-[#26aa1a]"
              required
            />
          </div>
          <label
            for="terms"
            class="ms-2 text-sm font-medium text-gray-100 dark:text-gray-300"
          >
            Yo acepto los{" "}
            <a
              href="#"
              class="text-[#26aa1a] hover:underline transition-all duration-300"
            >
              términos y condiciones
            </a>
          </label>
        </div>
        <button
          type="submit"
          fluid
          loading={formik.isSubmitting}
          class="text-white bg-[#1d7a15] hover:bg-[#10310d] transition-all duration-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center w-full flex justify-center"
        >
          Crear Cuenta
        </button>
      </form>
    </div>
  );
}
