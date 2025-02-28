import "./Registro.css";

function Registro() {



        document.addEventListener("DOMContentLoaded", function () {

        document.getElementById("toggle-password").addEventListener("click", function () {
          const passwordField = document.getElementById("password");
          passwordField.type = passwordField.type === "password" ? "text" : "password";
        });
      
        document.getElementById("confirm-password").addEventListener("click", function () {
          const confirmPasswordField = document.getElementById("contraseña");
          confirmPasswordField.type = confirmPasswordField.type === "password" ? "text" : "password";
        });
      
      
        const form = document.getElementById("contactForm");
        const passwordField = document.getElementById("password");
        const confirmPasswordField = document.getElementById("contraseña");
        const successMessage = document.getElementById("successMessage");
      
        form.addEventListener("submit", function (event) {
          // Verificar si las contraseñas coinciden
          if (passwordField.value !== confirmPasswordField.value) {
            confirmPasswordField.setCustomValidity("Las contraseñas no coinciden");
          } else {
            confirmPasswordField.setCustomValidity("");
          }
      
      
          if (!form.checkValidity()) {
            event.preventDefault();
            form.reportValidity();
          } else {
            event.preventDefault();
            successMessage.style.display = "block";
            setTimeout(() => successMessage.style.display = "none", 3000);
            setTimeout(() => form.reset(), 500);
          }
        });
      
        confirmPasswordField.addEventListener("input", function () {
          this.setCustomValidity("");
        });
      });


      function guardarUsuario(event) {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario
      
        const userData = {
          usuario: document.getElementById("usuario").value,
          nombre: document.getElementById("nombre").value,
          apellido: document.getElementById("apellidos").value,
          email: document.getElementById("email").value,
          password: document.getElementById("password").value,
          contraseña: document.getElementById("contraseña").value,
      
        };
      
      
        // Convertir el objeto en formato JSON
        const userDataJSON = JSON.stringify(userData);
      
        // Almacenar el objeto en el localStorage
        localStorage.setItem("userData", userDataJSON);
      
        console.log("Usuario nuevo registrado:", userData);
      
        // Mostrar mensaje de éxito
        document.getElementById("successMessage").style.display = "block";
      }
      
      // Asociar la función al evento submit del formulario
      document.getElementById("contactForm").addEventListener("submit", guardarUsuario);
      


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

				<form id="contactForm">
					{/* <!-- Usuario --> */}
					<div className="mb-3 usuario col-8 mx-auto">
						<label htmlFor="nombre" className="form-label">
							Usuario
						</label>
						<input
							type="text"
							className="form-control"
							id="usuario"
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
								type="password"
								required
								minlength="6"
								className="form-control"
								id="password"
								placeholder="Ingresa tu contraseña"
							/>{" "}
							<span
								id="toggle-password"
								className="eye-icon position-absolute top-50 end-0 translate-middle-y pe-3"
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
								type="password"
								required
								minlength="6"
								className="form-control"
								id="contraseña"
								placeholder="Confirma tu contraseña"
							/>{" "}
							<span
								id="confirm-password"
								className="eye-icon position-absolute top-50 end-0 translate-middle-y pe-3"
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
							id="termsCheckbox"
							required
						/>
						<label
							className="form-check-label terminos-condiciones"
							htmlFor="termsCheckbox"
						>
							Acepto los
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
					<div
						id="successMessage"
						style={{ display: "none" }}
						className="alert alert-success mt-3"
					>
						{" "}
						¡Tu registro ha sido exitoso!
					</div>

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
