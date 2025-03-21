import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NuevosProductos.css";

const NuevosProductos = () => {
	// Estados para los campos del formulario
	const [producto, setProducto] = useState("");
	const [precio, setPrecio] = useState("");
	const [stock, setStock] = useState("");
	const [descripcion, setDescripcion] = useState("");
	const [razonCompra, setRazonCompra] = useState("");
	const [informacionProduccion, setInformacionProduccion] = useState("");
	const [nombreTecnica, setNombreTecnica] = useState([]);
	const [imagenProducto, setImagenProducto] = useState("");
	const [categoria, setCategoria] = useState("Frutas");
	const [errors, setErrors] = useState({});

	// Cargar los productos del localStorage
	/*const loadItemsFromLocalStorage = () => {
		const itemsData = localStorage.getItem("productos");
		return itemsData ? JSON.parse(itemsData) : [];
	};*/

	// Guardar los productos y enviar la solicitud POST
	const saveItemsToDB = () => {
		const category = ["Frutas", "Verduras", "Legumbres", "Conservas", "Composta"];
		const technique = [
			"Sistema de captación de agua",
			"Lombricomposta",
			"Lixiviado",
			"Rotación de cultivos",
			"Tratamiento de semilla"];

		const producers = [
			"EcoRaíz Orgánica",
			"Verde Vivo",
			"El Huerto Natural",
			"Sabores de la Tierra",
			"Cultiva Vida",
			"Manos Verdes",
			"Raíces Sustentables",
			"Tierra y Vida",
			"Naturaleza Fresca",
			"Cosecha Consciente"
		];

		const calculateTechnique = nombreTecnica.map((item) => {
			return technique.indexOf(item) + 1;
		})
		console.log(calculateTechnique);

		const productDTO = {
			productName: producto,
			price: parseFloat(precio),
			unit: "kg",
			stock: parseInt(stock),
			description: descripcion,
			benefits: razonCompra,
			imagen: imagenProducto,
			categoria: category.indexOf(categoria) + 1, // Convertir a número
			producer: {
				producerName: producers.indexOf(productor) + 1,
				active: true,
				technique: calculateTechnique,
			},
		};
		console.log(productDTO);

		const options = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(productDTO),
		};

		fetch("http://localhost:8080/products", options)
			.then(response => response.json())
			.then(data => {
				console.log('Success:', data);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	};

	//nombreTecnica
	const handleTecnicaChange = (e) => {
		const { value, checked } = e.target;
		setNombreTecnica((prev) =>
			checked ? [...prev, value] : prev.filter((t) => t !== value)
		);
	};

	const handleCategoryChange = (e) => {
		const { value, checked } = e.target;
		setCategoria(value);

	}

	// Función de validación de URL de imagen
	const isValidImageUrl = (url) => {
		try {
			const objetoUrl = new URL(url);
			return (
				objetoUrl.protocol === "http:" ||
				objetoUrl.protocol === "https:"
			);
		} catch (error) {
			console.log(error);
			return false;
		}
	};

	// Función de validación
	const validateFields = () => {
		const newErrors = {};

		if (!producto.match(/^[A-Za-zÁÉÍÓÚáéíóúÑñ ]{1,30}$/)) {
			newErrors.producto = "El nombre del producto es inválido.";
		}
		if (
			!precio ||
			isNaN(parseFloat(precio)) ||
			parseFloat(precio) <= 0 ||
			parseFloat(precio) >= 1000
		) {
			newErrors.precio =
				"Precio inválido. Debe ser un número entre 0 y 1000.";
		}
		if (
			!stock ||
			isNaN(parseInt(stock)) ||
			parseInt(stock) <= 0 ||
			parseInt(stock) >= 1000
		) {
			newErrors.stock =
				"Stock inválido. Debe ser un número entre 0 y 1000.";
		}
		if (!isValidImageUrl(imagenProducto)) {
			newErrors.imagenProducto = "La URL de la imagen no es válida.";
		}

		return newErrors;
	};

	// Agregar producto
	const handleSubmit = (e) => {
		e.preventDefault();

		// Validar los campos
		const validationErrors = validateFields();

		if (Object.keys(validationErrors).length === 0) {
			// Si es válido, agregar el producto
			const newItem = {
				producto,
				descripcion,
				razonCompra,
				informacionProduccion,
				precio: parseFloat(precio),
				stock: parseInt(stock),
				categoria,
				imagenProducto,
				nombreTecnica,
			};
			/*console.log(newItem);*/
			saveItemsToDB(newItem);

			alert("Producto agregado");

			// Limpiar los campos del formulario
			setProducto("");
			setPrecio("");
			setStock("");
			setDescripcion("");
			setRazonCompra("");
			setInformacionProduccion("");
			setCategoria("")
			setNombreTecnica([]);
			setImagenProducto("");
			setErrors({});
		} else {
			// Si hay un error, mostrarlo
			setErrors(validationErrors);
			alert("Los datos son inválidos");
		}
	};

	return (
		<>
			<header id="header"></header>
			<div className="container mt-5">
				<h2 id="titulo" className="text-center titulo">
					¿Qué subiremos hoy?
				</h2>
				<form
					id="newItemForm"
					className="col-8 mx-auto"
					onSubmit={handleSubmit}
				>
					<div className="mb-3 nombre-del-producto">
						<label htmlFor="producto" className="form-label">
							Nombre del producto
						</label>
						<input
							type="text"
							className="form-control"
							id="producto"
							value={producto}
							onChange={(e) => setProducto(e.target.value)}
							placeholder="Ingresa el nombre del producto"
							required
						/>
						{errors.producto && (
							<div className="invalid-feedback">
								{errors.producto}
							</div>
						)}
					</div>

					<div className="mb-3 precio">
						<label htmlFor="precio" className="form-label">
							Precio
						</label>
						<input
							type="number"
							min="0"
							step="0.01"
							className="form-control"
							id="precio"
							value={precio}
							onChange={(e) => setPrecio(e.target.value)}
							placeholder="¿Qué precio tiene este producto?"
							required
						/>
						{errors.precio && (
							<div className="invalid-feedback">
								{errors.precio}
							</div>
						)}
					</div>

					<div className="mb-3 stock">
						<label htmlFor="stock" className="form-label">
							Stock
						</label>
						<input
							type="number"
							className="form-control"
							id="stock"
							value={stock}
							onChange={(e) => setStock(e.target.value)}
							placeholder="Número de productos a añadir al stock"
							required
							min="1"
						/>
						{errors.stock && (
							<div className="invalid-feedback">
								{errors.stock}
							</div>
						)}
					</div>

					<div className="mb-3">
						<label
							htmlFor="descripcion_producto"
							className="form-label"
						>
							Descripción del Producto:
						</label>
						<textarea
							id="descripcion_producto"
							className="form-control"
							value={descripcion}
							onChange={(e) => setDescripcion(e.target.value)}
							rows="3"
							required
						></textarea>
					</div>

					<div className="mb-3">
						<label htmlFor="razon_compra">
							¿Por qué comprar este producto?
						</label>
						<textarea
							id="razon_compra"
							className="form-control"
							value={razonCompra}
							onChange={(e) => setRazonCompra(e.target.value)}
							rows="3"
							required
						></textarea>
					</div>

					<div className="mb-3">
						<label
							htmlFor="informacion_produccion"
							className="form-label"
						>
							Nombre del productor o la productora:
						</label>
						<textarea
							id="informacion_produccion"
							className="form-control"
							value={informacionProduccion}
							onChange={(e) =>
								setInformacionProduccion(e.target.value)
							}
							rows="3"
							required
						></textarea>
					</div>

					<div className="mb-3">
						<label className="form-label">
							Técnicas agroecológicas empleadas en su producción:
						</label>
						<div>
							<input
								type="checkbox"
								id="tecnica1"
								value="Sistema de captación de agua"
								checked={nombreTecnica.includes("Sistema de captación de agua")}
								onChange={handleTecnicaChange}
							/>
							{"  "}
							<label htmlFor="Sistema de captación de agua">Sistema de captación de agua</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="tecnica2"
								value="Lombricomposta"
								checked={nombreTecnica.includes("Lombricomposta")}
								onChange={handleTecnicaChange}
							/>
							{"  "}
							<label htmlFor="Lombricomposta">Lombricomposta</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="tecnica3"
								value="Lixiviado"
								checked={nombreTecnica.includes("Lixiviado")}
								onChange={handleTecnicaChange}
							/>
							{"  "}
							<label htmlFor="Lixiviado">Lixiviado</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="tecnica4"
								value="Rotación de cultivos"
								checked={nombreTecnica.includes("Rotación de cultivos")}
								onChange={handleTecnicaChange}
							/>
							{"  "}
							<label htmlFor="Rotación de cultivos">Rotación de cultivos</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="tecnica5"
								value="Tratamiento de semilla"
								checked={nombreTecnica.includes("Tratamiento de semilla")}
								onChange={handleTecnicaChange}
							/>
							{"  "}
							<label htmlFor="Tratamiento de semilla">Tratamiento de semilla</label>
						</div>
					</div>

					<div className="mb-3 stock">
						<label htmlFor="categoria" className="form-label">
							Categoria
						</label>

						<select
							name="categoria"
							id="categoria"
							className="form-control"
							value={categoria} // Asigna el valor actual del estado
							onChange={handleCategoryChange}
						>
							<option value="Frutas">Frutas</option>
							<option value="Verduras">Verduras</option>
							<option value="Legumbres">Legumbres</option>
							<option value="Conservas">Conservas</option>
							<option value="Composta">Composta</option>
						</select>

						{errors.stock && <div className="invalid-feedback">{errors.stock}</div>}
					</div>

					<div className="mb-3">
						<label htmlFor="imagen_producto">
							Imagen del Producto:
						</label>
						<input
							type="text"
							className="form-control"
							id="imagen_producto"
							value={imagenProducto}
							onChange={(e) => setImagenProducto(e.target.value)}
							required
						/>
						{errors.imagenProducto && (
							<div className="invalid-feedback">
								{errors.imagenProducto}
							</div>
						)}
					</div>

					{imagenProducto && isValidImageUrl(imagenProducto) && (
						<div className="mb-3">
							<img
								src={imagenProducto}
								alt="Imagen del Producto"
								className="img-fluid"
							/>
						</div>
					)}

					<button
						type="submit"
						className="btn btn-primary w-100 col-8 mx-auto"
					>
						Agregar producto
					</button>

					<Link
						to="/catalogo"
						className="btn btn-primary w-100 col-8 mx-auto"
					>
						Ver catálogo
					</Link>
				</form>
			</div>
		</>
	);
};

export default NuevosProductos;