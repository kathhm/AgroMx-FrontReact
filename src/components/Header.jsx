import { NavLink } from "react-router-dom";

function Header() {
	return (
		<>
			<div className="container-fluid">
				{/* <!-- Barra superior con el logo, búsqueda y los iconos --> */}
				<div className="row align-items-center">
					{/* <!-- Logo --> */}
					<div className="col-3 col-md-2 d-flex justify-content-center">
						<img
							className="img-fluid p-1"
							id="logo"
							src="/images/logVectorizado2.svg"
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
					<div className="col-4 col-md-4 d-flex justify-content-end align-items-end mt-2 p-4 mt-md-0">
						<i className="bi bi-basket2 mx-5">
						<NavLink
							className="nav-link active"
							aria-current="page"
							to={"/Carrito"}
						>
						</NavLink>
						</i>
						<i className="bi bi-person-circle me-4"></i>
					</div>
				</div>
			</div>

			<nav className="navbar navbar-expand-lg navbar-light">
				<div className="container-fluid">
					<NavLink className="navbar-brand" id="linkToPage" to={"/Inicio"}>
						Inicio
					</NavLink>
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
								<NavLink
									className="nav-link active"
									id="linkToPage"
									aria-current="page"
									to={"/Catalogo"}
								>
									Catálogo
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									id="linkToPage"
									to={"/SobreNosotros"}
								>
									Sobre Nosotros
								</NavLink>
							</li>
							<li className="nav-item dropdown">
								<NavLink
									className="nav-link dropdown-toggle"
									id = "linkToPage"
									to={"/Comunidad"}
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									Comunidad
								</NavLink>
								<ul className="dropdown-menu">
									<li>
										<NavLink
											className="dropdown-item text-dark"
											id="linkToPage"
											to={"/Comunidad"}
										>
											Recetas
										</NavLink>
									</li>
									<li>
										<hr className="dropdown-divider" />
									</li>
									<li>
										<NavLink
											className="dropdown-item text-dark"
											id="linkToPage"
											to={"/Comunidad"}
										>
											Comunidad
										</NavLink>
									</li>
								</ul>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link"
									id="linkToPage"
									to={"/Registro"}	
								>
									Regístrate
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Header;
