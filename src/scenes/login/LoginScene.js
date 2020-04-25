import React from "react";
import AuthContext from "../../context/authContext/authContext";

const LoginScene = (props) => {
  const { loginUser, userAuth, errors } = React.useContext(AuthContext);

  const [email, setEmail] = React.useState({ value: "", error: "" });
  const [pass, setPass] = React.useState({ value: "", error: "" });

  React.useEffect(() => {
    if (!userAuth) return;
    if (userAuth) {
      console.log(userAuth);
      props.history.push("/");
    }
  }, [userAuth, props.history]);

  function onSubmit() {
    loginUser({
      email: email.value,
      password: pass.value,
    });
  }

  return (
    <div>
      <br />
      <br />
      <div className="section columns">
        <div className="column" />
        <div className="box column">
          <div className="section">
            <h1 className="title has-text-white">Login</h1>

            <div className="field ">
              <div className="control">
                <input
                  className="input "
                  type="email"
                  placeholder="Email"
                  value={email.value}
                  onChange={(e) =>
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
                  onChange={(e) =>
                    setPass({ ...pass, value: e.currentTarget.value })
                  }
                />
              </div>
              {pass.error && <p className="help is-danger">{pass.error}</p>}
            </div>

            <div className="field ">
              <div
                className="control"
                style={{ display: "flex", justifyContent: "center" }}
              >
                <button
                  className="button is-primary "
                  onClick={() => onSubmit()}
                >
                  {" "}
                  Aceptar
                </button>
              </div>
              {errors && <p className="help is-danger">{errors}</p>}
            </div>
          </div>
        </div>
        <div className="column" />
      </div>
    </div>
  );
};

export default LoginScene;
