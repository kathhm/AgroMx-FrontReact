import "./login.css";
import { jwtDecode } from "jwt-decode";
import { useEffect, useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
	const { user, setUser } = useContext(UserContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleGoogleResponse = (response) => {
		const token = response.credential;
		const decodedToken = jwtDecode(token);
		console.log(decodedToken);
		setUser(decodedToken);
		// Aquí puedes manejar la información del usuario decodificada
		setTimeout(() => {
			navigate("/Inicio");
		}, 2000); // Retraso de 2 segundos antes de redirigir
	};

	useEffect(() => {
		window.handleGoogleResponse = handleGoogleResponse;
	}, []);

	const handleEmailChange = (e) => {
		const value = e.target.value;
        setEmail(value);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setError("Correo electrónico no válido");
        } else {
            setError("");
        }
    };

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	// Guardar usuario en localStorage
const saveUser = (user) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
};

// Validar campos vacíos
const validateFields = () => {
    if (email.trim() === "" || password.trim() === "") {
        setError("Todos los campos son obligatorios");
        return false;
    }
    return true;
};

// Manejar envío del formulario
const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateFields()) return;

    saveUser({ email, password });
    setError("");
    alert("Usuario guardado en localStorage");
};

// Iniciar sesión
const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
        (u) => u.email === email && u.password === password
    );

    if (user) {
        setUser(user);
        alert("Inicio de sesión exitoso");
        setTimeout(() => {
            navigate("/Inicio");
        }, 2000);
    } else {
        setError("Correo electrónico o contraseña incorrectos");
    }
};

// Restaurar estado al cargar la página
useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
        setUser(storedUser);
    }
}, []);


	return (
		<main className="container">
			{user ? (
				<div className="container login-card my-5 p-5">
					<h1 className="titulo text-center">
						Bienvenido, {user.name}
					</h1>
				</div>
			) : (
				<div className="container login-card my-5 p-5">
					<h1 className="titulo text-center">Inicia sesión</h1> <hr />
					<div className="container-fluid justify-content-center d-flex">
						<form
							className="form col-8 row justify-content-center"
						>
							<label
								className="etiqueta me-2 form-label text-start"
								htmlFor="correo"
							>
								Correo electronico:
							</label>
							<input
								className="form-control"
								type="email"
								placeholder="example@dominio.com"
								id="correo"
								value={email}
								onChange={handleEmailChange}
							/>
							<br />
							<label
								className="etiqueta me-2 form-label text-start"
								htmlFor="contraseña"
							>
								Contraseña:
							</label>
							<input
								className="form-control"
								type="password"
								placeholder="Introduce tu contraseña"
								id="contraseña"
								value={password}
								onChange={handlePasswordChange}
							/>
							<button
								className="btn btn-primary w-100 addToCartBtn mt-3"
								type="button"
								onClick={handleLogin}
							>
								Inicia sesión
							</button>
							{/* <button
								className="btn btn-secondary w-100 addToCartBtn mt-3"
								type="button"
								onClick={handleLogin}
							>
								Iniciar sesión
							</button> */}
							{error && (
								<p className="text-danger mt-3">{error}</p>
							)}
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
			)}
			<script src="https://accounts.google.com/gsi/client" async></script>
		</main>
	);
}

export default Login;
