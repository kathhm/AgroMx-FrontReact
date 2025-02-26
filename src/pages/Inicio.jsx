function Inicio() {
	return (
		<main className="container-fluid p-2 ">
			<div className="container-fluid p-0 mt-3">
				<img
					src="/images/banner.png"
					alt="Banner de inicio que muestra un descuento del 30 %"
				/>
			</div>

            <div className="container-fluid p-0 mt-3">
                <div className="d-flex row col-12 col-lg-12 p-2 my-2">
                        <h1 className="text-center subTitle">Categorías</h1>
                </div>

                <div className="d-flex row col-12 col-lg-12 p-2 m-2">
                        <div className="categories col-3 col-lg-3">
                            <h3 className="subTitle2 text-center filterText">Frutas y verduras</h3>
                            <img className="categoryImage img-fluid" src="/images/frutas-verduras.png" alt="fruit and vegetables image" />
                        </div>

                        <div className="categories col-3 col-lg-3">
                            <h3 className="subTitle2 text-center filterText">Legumbres</h3>
                            <img className="categoryImage img-fluid" src="/images/legumbres.jpeg" alt="fruit and vegetables image" />
                        </div>

                        <div className="categories col-3 col-lg-3">
                            <h3 className="subTitle2 text-center filterText">Conservas</h3>
                            <img className="categoryImage img-fluid" src="/images/conservas.jpg" alt="fruit and vegetables image" />
                        </div>

                        <div className="categories col-3 col-lg-3">
                            <h3 className="subTitle2 text-center filterText">Composta</h3>
                            <img className="categoryImage img-fluid" src="/images/composta.png" alt="fruit and vegetables image" />
                        </div>
                </div>

                <div className="d-flex row col-12 col-lg-12 p-2 my-2">
                        <h1 className="text-center subTitle ">Productos destacados</h1>
                </div>

                <div className="d-flex row col-12 col-lg-12 p-2 m-2 frutas mb-7 overflow-hidden">
                    <div className="row col-12">
                        <div className="product col-3 col-lg-3">
                            <img className="productImage img-fluid" src="/images/aguacate.png" alt="avocado image" />
                            <h4 className="text-center productName">Aguacate Hass</h4>
                            <br />
                            <img className="productImage img-fluid" src="/images/elote.png" alt="corn image" />
                            <h4 className="text-center productName">Elote</h4>
                        </div>

                        <div className="product col-3 col-lg-3">
                            <img className="productImage img-fluid" src="/images/fresa.jpg" alt="strawberry image" />
                            <h4 className="text-center productName">Fresa</h4>
                            <br />
                            <img className="productImage" src="/images/cebolla.png" alt="onion image" />
                            <h4 className="text-center productName">Cebolla</h4>
                        </div>
                        
                        <div className="product col-3 col-lg-3">
                            <img className="productImage img-fluid" src="/images/jitomate.png" alt="tomato image" />
                            <h4 className="text-center productName">Jitomate</h4>
                            <br />
                            <img className="productImage img-fluid" src="/images/zanahoria.jpg" alt="carrot image" />
                            <h4 className="text-center productName">Zanahoria</h4>
                        </div>
                        
                        <div className="product col-3 col-lg-3">
                            <img className="productImage img-fluid" src="/images/calabacita.jpg" alt="pumpkin image" />
                            <h4 className="text-center productName">Calabacita</h4>
                            <br />
                            <img className="productImage img-fluid" src="/images/manzana.jpg" alt="apple image" />
                            <h4 className="text-center productName">Manzana</h4>
                        </div>
                    </div>
                </div>
                {/* SECCIÓN PARA AÑADIR ESPACIO ENTRE PRODUCTOS Y COMUNIDAD */}
                <div style={{ height: "100px" }}></div> 

                <div className="d-flex row col-12 col-lg-12 p-2 my-2 mt-7" id="comunidad">
                        <h1 className="text-center subTitle ">Comunidad</h1>
                </div>

                <div className="d-flex row col-12 col-lg-12 p-2 m-2">
                    <h3>Descubre historias, consejos y momentos especiales en nuestra comunidad. 🍃✨ ¡Únete a nosotros y comparte tu experiencia con AgroMx!</h3>
                </div>

                <div className="d-flex flex-column flex-lg-row align-items-center col-12 p-2 m-2">
                    <div className="col-12 col-lg-6 text-center text-lg-start">
                    <img className="comunidad-foto img-fluid" src="/images/familia-saludable.jpg" alt="familia consumiendo productos de agromx"/>
                    </div>
                    
                  
                    <div className="col-12 col-lg-6 d-flex flex-column align-items-center mt-4">
                        <h2 className="subTitle border-bottom border-1 border-dark pb-2 mx-auto mt-2">Disfruta momentos únicos con lo mejor de AgroMx</h2>
                     
                        <h3 className="subTitle2 mt-3 nombre">Elena Torres, 31 de enero de 2025 a las 20:05 hrs.</h3>
                        
                        <p className="mt-3">Nada como compartir una comida en familia con productos frescos, agroecológicos y llenos de sabor. 🥗🌽</p>
                    </div>
                </div>

            </div>
		</main>
	);
}

export default Inicio;
