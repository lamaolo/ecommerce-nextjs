import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) =>
    alert(
      "Validaciones correctas, contenido del formulario: \n\n" +
        JSON.stringify(data)
    );

  return (
    <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-group input-group-lg mb-3">
        <input
          type="text"
          ref={register({
            required: { value: true, message: "Este campo es obligatorio" },
            minLength: { value: 3, message: "Minimo 3 caracteres" },
            maxLength: { value: 15, message: "Máximo 15 caracteres" },
          })}
          name="nombre"
          className="form-control"
          placeholder="Nombre"
          aria-label="Nombre"
          aria-describedby="basic-addon1"
        />
        {errors?.nombre?.message && (
          <div className="input-group alert alert-danger" role="alert">
            {errors.nombre.message}
          </div>
        )}
      </div>

      <div className="input-group input-group-lg mb-3 my-5">
        <input
          type="email"
          ref={register({
            required: { value: true, message: "Este campo es obligatorio" },
            minLength: { value: 5, message: "Minimo 5 caracteres" },
            maxLength: { value: 30, message: "Máximo 30 caracteres" },
            pattern: {
              value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Introduce un email válido",
            },
          })}
          name="email"
          className="form-control"
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon1"
        />
        {errors?.email?.message && (
          <div className="input-group alert alert-danger" role="alert">
            {errors.email.message}
          </div>
        )}
      </div>

      <div className="input-group input-group-lg mb-4">
        <textarea
          type="text"
          ref={register({
            required: { value: true, message: "Este campo es obligatorio" },
            minLength: { value: 5, message: "Minimo 5 caracteres" },
            maxLength: { value: 200, message: "Máximo 200 caracteres" },
          })}
          name="mensaje"
          className="form-control"
          placeholder="Mensaje"
          aria-label="Mensaje"
          aria-describedby="basic-addon1"
        />
        {errors?.mensaje?.message && (
          <div className="input-group alert alert-danger" role="alert">
            {errors.mensaje.message}
          </div>
        )}
      </div>

      <button className="btn btn-primary" type="submit">
        Enviar
      </button>

      <style jsx>{`
        .form-control,
        input {
          font-size: 1.7rem;
        }

        .form-control {
          padding: 10px 15px;
          border-radius: 10px;
        }

        .alert {
          border-radius: 10px;
          margin-top: 10px;
          margin-bottom: 0;
        }
      `}</style>
    </form>
  );
}
