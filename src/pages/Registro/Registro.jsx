import "./Registro.css";
import React, { useState } from "react";  //importación de useState

function Registro() {

	const [formData, setFormData] = useState({
		usuario: "",
		nombre: "",
		apellidos: "",
		email: "",
		password: "",
		confirmPassword: "",
		termsAccepted: false,
	  });
	
	  const [successMessage, setSuccessMessage] = useState(false);
	  const [passwordVisible, setPasswordVisible] = useState(false);
	  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
	
	  // Manejar cambios en los inputs
	  const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
		  ...prev,
		  [name]: type === "checkbox" ? checked : value,
		}));
	  };
	
	  // Validar y enviar el formulario
	  const handleSubmit = (evento) => {
		evento.preventDefault();
		if (formData.password !== formData.confirmPassword) {
		  alert("Las contraseñas no coinciden");
		  return;
		}
	
		// Guardar en localStorage
		localStorage.setItem("userData", JSON.stringify(formData));
		setSuccessMessage(true);  
	}

	return (
		<>
			<header id="header"></header>
			<div className="container mt-5">
				<h2 id="titulo" className="text-center titulo">
					Regístrate
				</h2>
				<h2 id="subtitulo" className="text-center">
					y sé parte de la comunidad
				</h2>

				<form onSubmit={handleSubmit}>
					{/* <!-- Usuario --> */}
					<div className="mb-3 usuario col-8 mx-auto">
						<label htmlFor="nombre" className="form-label">
							Usuario
						</label>
						<input
							type="text"
							className="form-control"
							id="usuario"
							name="usuario"
            				value={formData.usuario}
            				onChange={handleChange}
							placeholder="Ingresa tu usuario"
							required
						/>
						<div className="invalid-feedback" id="usuarioError">
							El nombre es obligatorio.
						</div>
					</div>

					{/* <!-- Nombre --> */}
					<div className="mb-3 nombre col-8 mx-auto">
						<label htmlFor="nombre" className="form-label">
							Nombre(s)
						</label>
						<input
							type="text"
							className="form-control"
							id="nombre"
							name="nombre"
            				value={formData.nombre}
            				onChange={handleChange}
							placeholder="Ingresa tu nombre"
							required
						/>
						<div className="invalid-feedback" id="nombreError">
							El nombre es obligatorio.
						</div>
					</div>
					{/* <!-- Apellidos --> */}
					<div className="mb-3 apellidos col-8 mx-auto">
						<label htmlFor="nombre" className="form-label">
							Apellidos
						</label>
						<input
							type="text"
							className="form-control"
							id="apellidos"
							name="apellidos"
            				value={formData.apellidos}
            				onChange={handleChange}
							placeholder="Ingresa tu nombre"
							required
						/>
						<div className="invalid-feedback" id="apellidoError">
							Los apellidos son obligatorios.
						</div>
					</div>

					{/* <!-- Email --> */}
					<div className="mb-3 email col-8 mx-auto">
						<label htmlFor="correo" className="form-label">
							Email
						</label>
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
            				value={formData.email}
           					onChange={handleChange}
							placeholder="Ingresa tu correo electrónico"
							required
						/>
						<div className="invalid-feedback" id="correoError">
							Por favor ingresa un correo electrónico válido.
						</div>
					</div>
					{/* <!-- contraseña --> */}
					<div className="mb-3 contraseña col-8 mx-auto">
						{" "}
						<label htmlFor="password" className="form-label">
							Contraseña
						</label>
						<div className="password-container position-relative">
							{" "}
							<input
								type={passwordVisible ? "text" : "password"}
								required
								minlength="6"
								className="form-control"
								id="password"
								name="password"
              					value={formData.password}
              					onChange={handleChange}
								placeholder="Ingresa tu contraseña"
							/>{" "}
							<span
								id="toggle-password"
								className="eye-icon position-absolute top-50 end-0 translate-middle-y pe-3" 
								onClick={() => setPasswordVisible(!passwordVisible)}
								style={{ cursor: "pointer" }}
							>
								👁️
							</span>
						</div>
						<div className="invalid-feedback" id="contraseñaError">
							Por favor ingresa una contraseña.{" "}
						</div>
					</div>

					{/* <!-- Confirma tu contraseña --> */}
					<div className="mb-3 contraseña col-8 mx-auto">
						{" "}
						<label htmlFor="password" className="form-label">
							Confirma tu contraseña
						</label>
						<div className="password-container position-relative">
							{" "}
							<input
								type={confirmPasswordVisible ? "text" : "password"}
								required
								minlength="6"
								className="form-control"
								name="confirmPassword"
              					value={formData.confirmPassword}
              					onChange={handleChange}
								id="contraseña"
								placeholder="Confirma tu contraseña"
							/>{" "}
							<span
								id="confirm-password"
								className="eye-icon position-absolute top-50 end-0 translate-middle-y pe-3"
								onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
              					style={{ cursor: "pointer" }}
							>
								👁️
							</span>
						</div>
						<div
							className="invalid-feedback"
							id="confirmaContraseñaError"
						>
							Tu contraseña no coincide.
						</div>
					</div>

					{/* <!-- Confirmación de Acuerdos y Condiciones --> */}
					<div className="form-check mb-3">
						<input
							className="form-check-input"
							type="checkbox"
							name="termsAccepted"
            				checked={formData.termsAccepted}
            				onChange={handleChange}
							id="termsCheckbox"
							required
						/>
						<label
							className="form-check-label terminos-condiciones"
							htmlFor="termsCheckbox"
						>
							Acepto los{" "}
							<a
								className="terminos-condiciones"
								href="#"
								target="_blank"
							>
								 términos y condiciones.
							</a>
						</label>
						<div className="invalid-feedback terminos-condiciones">
							Debes aceptar los términos y condiciones.
						</div>
					</div>

					<div className="mb-3 col-8 mx-auto">
						<button type="submit" className="btn custom-btn w-100">
							Regístrame
						</button>
					</div>
					{successMessage && (
          			<div className="alert alert-success mt-3">¡Tu registro ha sido exitoso!</div>
        			)}

					{/*  <!-- Inicio de sesión --> */}

					<div>
						<a className="inicio-sesion" href="pagina inexistente">
							¿Ya tienes cuenta? Inicia sesión.
						</a>
					</div>
				</form>
			</div>
		</>
	);
}

export default Registro;
