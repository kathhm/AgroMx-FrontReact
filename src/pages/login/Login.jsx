import "./login.css";
import {jwtDecode} from 'jwt-decode';
import { useEffect, useContext } from 'react';
import { UserContext } from '../../context/UserContext';

function Login() {
  const { setUser } = useContext(UserContext);

  const handleGoogleResponse = (response) => {
    const token = response.credential;
    const decodedToken = jwtDecode(token);
    console.log(decodedToken);
    setUser(decodedToken);
    // Aquí puedes manejar la información del usuario decodificada
  };

  useEffect(() => {
    window.handleGoogleResponse = handleGoogleResponse;
  }, []);

  return (
    <main className="container">
      <div className="container login-card my-5 p-5">
        <h1 className="titulo text-center">Inicia sesión</h1> <hr />
        <div className="container-fluid justify-content-center d-flex">
          <form className="form col-8 row">
            <label
              className="etiqueta me-2 form-label text-align-start"
              htmlFor="correo"
            >
              Correo electronico:
            </label>
            <input
              className="form-control"
              type="text"
              placeholder="example@dominio.com"
              id="correo"
            />
            <br />
            <label
              className="etiqueta me-2 form-label text-align-start"
              htmlFor="contraseña"
            >
              Contraseña:
            </label>
            <input
              className="form-control"
              type="password"
              placeholder="Introduce tu contraseña"
              id="contraseña"
            />
            <button
              className="btn btn-primary w-100 addToCartBtn mt-3"
              type="submit"
            >
              iniciar sesión
            </button>
          </form>
        </div>
        <div className="container-fluid mt-4">
          <div
            id="g_id_onload"
            data-client_id="852189199431-elq37edvmgere2fgboo0gemqrouggcif.apps.googleusercontent.com"
            data-login_uri="" //TODO: Agregar la URL de Backend para manejar el JWt del login con Google
            data-callback="handleGoogleResponse"
          ></div>
          <div
            className="g_id_signin justify-content-center d-flex"
            data-type="standard"
            data-size="large"
            data-theme="outline"
            data-text="sign_up_with"
            data-shape="circle"
            data-logo_alignment="left"
          ></div>
        </div>
      </div>
      <script src="https://accounts.google.com/gsi/client" async></script>
    </main>
  );
}

export default Login;