function Header() {
	return (
		<>
			<div className="container-fluid">
				{/* <!-- Barra superior con el logo, búsqueda y los iconos --> */}
				<div className="row align-items-center">
					{/* <!-- Logo --> */}
					<div className="col-3 col-md-2 d-flex justify-content-start">
						<img
							className="logo img-fluid p-1"
							src="/images/logo.png"
							alt="Logo AgroMX"
						/>
					</div>

					{/* <!-- Lupa y barra de búsqueda --> */}
					<div className="col-5 col-md-6 d-flex justify-content-center align-items-center">
						{/* <!-- Botón de búsqueda (Lupa) --> */}
						<div className="d-flex justify-content-center align-items-center me-3">
							<button
								id="lupa"
								className="btn btn-outline-success btn-lupa d-none d-sm-block"
								type="submit"
							>
								<i className="bi bi-search"></i>
							</button>
						</div>

						{/* <!-- Barra de búsqueda --> */}
						<div className="d-flex justify-content-center w-100">
							<form className="d-flex w-100" role="search">
								<input
									className="form-control me-2 w-100 barra-busqueda d-none d-sm-block"
									type="search"
									placeholder="Busca tu producto"
									aria-label="Search"
								/>
							</form>
						</div>
					</div>

					{/* <!-- Carrito y Avatar --> */}
					<div className="col-4 col-md-4 d-flex justify-content-center align-items-center mt-2 mt-md-0">
						<i className="bi bi-basket2">
						<a
							className="nav-link active"
							aria-current="page"
							href="/public/sources/pages/carrito/carrito.html"
						>
						</a>
						</i>
						<i className="bi bi-person-circle"></i>
					</div>
				</div>
			</div>

			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<a className="navbar-brand" href="/index.html">
						Inicio
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a
									className="nav-link active"
									aria-current="page"
									href="/public/sources/pages/catalogo/catalogo.html"
								>
									Catálogo
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									href="/public/sources/pages/sobreNosotrosAgroMX/sobreNosotrosAgroMX.html"
								>
									Sobre Nosotros
								</a>
							</li>
							<li className="nav-item dropdown">
								<a
									className="nav-link dropdown-toggle"
									href="#"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Comunidad
								</a>
								<ul className="dropdown-menu">
									<li>
										<a
											className="dropdown-item text-dark"
											href="#"
										>
											Recetas
										</a>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<a
											className="dropdown-item text-dark"
											href="/public/sources/pages/comunidad/comunidad.html"
										>
											Comunidad
										</a>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									href="/public/sources/pages/contacto/contacto.html"
								>
									Contacto
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
