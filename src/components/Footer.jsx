function Footer() {
	return (
		<footer className="container-fluid text-white py-4 final-footer mt-auto">
			<div className="row col-12 text-center inicio-footer">
				<img
        id="logo-footer"
					className="logo p-1"
					src="/images/logo.png"
					alt="Logo AgroMX"
				/>
				<p id="slogan-footer">
					<strong>
						Alimentos sanos, comercio justo, futuro sostenible
					</strong>
				</p>
			</div>

			<div className="row">
				{/* {Necesitas Ayuda} */}
				<div className=" col-4 col-md-3 col-lg-3 text-center">
					<h5>¿Necesitas ayuda?</h5>
					<p className="mb-1">Tel. 555 324 6353</p>
					<p className="mb-1 none-sm">agromx.soporte@gmail.com</p>
					<p className="mb-0">Horarios de atención:</p>
					<p className="mb-0">9:00 a 18:00 h</p>
				</div>

				{/* {Acerca de nosotros} */}
				<div className="col-4 col-md-3 col-lg-3 text-center">
					<a
						href="/public/sources/pages/acercaDeNosotros/acercaDe.html"
						style={{ color: "white", textDecoration: "none" }}
					>
						<h5>Developer Team</h5>
					</a>
					<a
						href="/public/sources/pages/productos/nuevosProductos.html"
						style={{ color: "white", textDecoration: "none" }}
					>
						<h5>Nuevos Productos</h5>
					</a>
				</div>

				{/* Registráte */}
				<div className="col-4 col-md-3 col-lg-3 text-center">
					<a
						href="/public/sources/pages/contacto/contacto.html"
						style={{ color: "white", textDecoration: "none" }}
					>
						<h5>Regístrate</h5>
					</a>
					<h4 className="fw-bold mt-3 p-1">AgroMX </h4>
					<i className="fa-regular fa-copyright fa-xl"></i>
				</div>

				{/* <!-- Logos de redes sociales --> */}
				<div className="col-12 col-md-3 col-lg-3 text-center">
					<div className="d-flex justify-content-center align-items-center">
						<div className="text-center mx-3 my-4">
							<a
								href="#"
								className="text-white text-decoration-none"
							>
								<i className="bi bi-facebook"></i>
								<p className="mb-0 small mt-2">AgroMx</p>
							</a>
						</div>
						<div className="text-center mx-3">
							<a
								href="#"
								className="text-white text-decoration-none"
							>
								<i className="bi bi-instagram"></i>
								<p className="mb-0 small mt-2">AgroMx</p>
							</a>
						</div>
						<div className="text-center mx-3">
							<a
								href="#"
								className="text-white text-decoration-none"
							>
								<i className="bi bi-whatsapp"></i>
								<p className="mb-0 small mt-2">WhatsApp</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
export default Footer;
