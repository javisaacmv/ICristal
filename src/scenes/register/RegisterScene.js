import React from "react";
import envConfig from "../../config";
import axios from "axios";

const RegisterScene = () => {
  const fetchUrl = envConfig();

  const [name, setName] = React.useState({ value: "", error: "" });
  const [email, setEmail] = React.useState({ value: "", error: "" });
  const [pass, setPass] = React.useState({ value: "", error: "" });
  const [pass2, setPass2] = React.useState({ value: "", error: "" });

  function ValidateEmail(mail) {
    return /\S+@\S+\.\S+/.test(mail);
  }

  function validatePass(pass) {
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(pass)) {
      return true;
    }

    return false;
  }

  function onSubmit() {
    if (!name.value) {
      setName({ ...name, error: "Nombre es requerido" });
      return;
    } else {
      setName({ ...name, error: "" });
    }
    if (!ValidateEmail(email.value)) {
      setEmail({ ...email, error: "Ingrese un email valido" });
      return;
    } else {
      setEmail({ ...email, error: "" });
    }
    if (!validatePass(pass.value)) {
      setPass({ ...pass, error: "Ingrese una contraseña valida" });
      return;
    } else {
      setPass({ ...pass, error: "" });
    }
    if (pass2.value !== pass.value) {
      setPass2({ ...pass2, error: "Las contraseñas no coinciden" });
    } else {
      setPass2({ ...pass2, error: "" });
    }
  }

  return (
    <div className="section columns">
      <div className="column" />
      <div className="box column">
        <div className="section">
          <h1 className="title has-text-white">Registro</h1>
          <div className="field ">
            <div className="control">
              <input
                className="input "
                type="text"
                placeholder="Nombre"
                value={name.value}
                onChange={e =>
                  setName({ ...name, value: e.currentTarget.value })
                }
              />
            </div>
            {name.error && <p className="help is-danger">{name.error}</p>}
          </div>
          <div className="field ">
            <div className="control">
              <input
                className="input "
                type="email"
                placeholder="Email"
                value={email.value}
                onChange={e =>
                  setEmail({ ...email, value: e.currentTarget.value })
                }
              />
            </div>
            {email.error && <p className="help is-danger">{email.error}</p>}
          </div>
          <div className="field ">
            <div className="control">
              <input
                className="input "
                type="password"
                placeholder="Contraseña"
                value={pass.value}
                onChange={e =>
                  setPass({ ...pass, value: e.currentTarget.value })
                }
              />
            </div>
            {pass.error && <p className="help is-danger">{pass.error}</p>}
          </div>
          <div className="field ">
            <div className="control">
              <input
                className="input "
                type="password"
                placeholder="Ingrese de nuevo la contraseña"
                value={pass2.value}
                onChange={e =>
                  setPass2({ ...pass2, value: e.currentTarget.value })
                }
              />
            </div>
            {pass2.error && <p className="help is-danger">{pass2.error}</p>}
          </div>
          <div className="field ">
            <div
              className="control"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button className="button is-primary " onClick={() => onSubmit()}>
                {" "}
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="column" />
    </div>
  );
};

export default RegisterScene;
