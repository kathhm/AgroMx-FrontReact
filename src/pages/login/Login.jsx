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

	// Manejar la respuesta de Google
	const handleGoogleResponse = async (response) => {
		const token = response.credential;
		const decodedToken = jwtDecode(token);
		/*console.log("Decoded Token:", decodedToken);*/

		try {
			// Guardar la imagen del perfil en localStorage usando el correo como clave
			if (decodedToken.picture) {
				localStorage.setItem(`profileImage_${decodedToken.email}`, decodedToken.picture);
			}

			// Verificar si el usuario ya existe en la base de datos
			const userResponse = await fetch(`https://agromxecommerce.agromx.live/users/email/${decodedToken.email}`);
			if (userResponse.ok) {
				const userData = await userResponse.json();
				/*console.log("User Data from DB:", userData);*/

				// Obtener la imagen del perfil desde localStorage usando el correo del usuario
				const profileImage = localStorage.getItem(`profileImage_${decodedToken.email}`);

				// Combinar los datos del usuario con la imagen del perfil
				const userDataWithImage = {
					...userData, // Copia todos los campos de userData
					profileImage: profileImage || null, // Añade la imagen del perfil (o null si no existe)
				};

				// Guardar los datos del usuario (incluyendo la imagen) en el contexto
				setUser(userDataWithImage);
				/*console.log("User Data with Image:", userDataWithImage);*/
			} else {
				// Si el usuario no existe, registrarlo
				const newUser = {
					name: decodedToken.name,
					email: decodedToken.email,
					userName: decodedToken.family_name,
					firstName: decodedToken.family_name,
					lastName: decodedToken.given_name,
					password: decodedToken.jti,
				};
				console.log("New User:", newUser);

				const createUserResponse = await fetch("https://agromxecommerce.agromx.live/users", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(newUser),
				});

				if (createUserResponse.ok) {
					const userData = await createUserResponse.json();
					console.log("Created User Data:", userData);

					// Obtener la imagen del perfil desde localStorage usando el correo del usuario
					const profileImage = localStorage.getItem(`profileImage_${decodedToken.email}`);

					// Combinar los datos del usuario con la imagen del perfil
					const userDataWithImage = {
						...userData, // Copia todos los campos de userData
						profileImage: profileImage || null, // Añade la imagen del perfil (o null si no existe)
					};

					// Guardar los datos del usuario (incluyendo la imagen) en el contexto
					setUser(userDataWithImage);
				} else {
					throw new Error("Error al registrar el usuario");
				}
			}

			// Redirigir al usuario a la página de inicio
			navigate("/Inicio");
		} catch (error) {
			console.error("Error:", error);
			setError("Error al autenticar con Google");
		}
	};

	useEffect(() => {
		window.handleGoogleResponse = handleGoogleResponse;
	}, []);

	// Manejar cambios en el campo de correo electrónico
	const handleEmailChange = (e) => {
		const value = e.target.value;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(value)) {
			setError("Correo electrónico no válido");
		} else {
			setError("");
		}
		setEmail(value);
	};

	// Manejar cambios en el campo de contraseña
	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	// Manejar el inicio de sesión con correo y contraseña
	const handleLogin = async () => {
		try {
			// Verificar si el usuario existe
			const userResponse = await fetch(`https://agromxecommerce.agromx.live/users/email/${email}`);
			if (!userResponse.ok) {
				throw new Error("Usuario no encontrado");
			}

			const userData = await userResponse.json();

			// Verificar la contraseña (esto debería hacerse en el backend)
			if (userData.password !== password) {
				throw new Error("Contraseña incorrecta");
			}

			// Guardar los datos del usuario en el contexto
			setUser(userData);

			// Redirigir al usuario a la página de inicio
			alert("Inicio de sesión exitoso");
			setTimeout(() => {
				navigate("/Inicio");
			}, 2000);
		} catch (error) {
			setError(error.message);
		}
	};

	return (
		<main className="container">
			{user ? (
				<div className="container login-card my-5 p-5">
					<h1 className="titulo text-center">
						Bienvenid@, {user.userName}
					</h1>
				</div>
			) : (
				<div className="container login-card my-5 p-5">
					<h1 className="titulo text-center">Inicia sesión</h1> <hr />
					<div className="container-fluid justify-content-center d-flex">
						<form className="form col-8 row justify-content-center">
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