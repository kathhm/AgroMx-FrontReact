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
                        <h2 className="text-center subTitle">Categorías</h2>
                </div>

                <div className="d-flex row col-12 col-lg-12 p-2 m-2">
                        <div className="categories col-3 col-lg-3">
                            <h3 className="subTitle2 text-center">Frutas y verduras</h3>
                            <img className="categoryImage" src="/images/frutas-verduras.png" alt="fruit and vegetables image" />
                        </div>

                        <div className="categories col-3 col-lg-3">
                            <h3 className="subTitle2 text-center">Legumbres</h3>
                            <img className="categoryImage" src="/images/legumbres.jpeg" alt="fruit and vegetables image" />
                        </div>

                        <div className="categories col-3 col-lg-3">
                            <h3 className="subTitle2 text-center">Conservas</h3>
                            <img className="categoryImage" src="/images/conservas.jpg" alt="fruit and vegetables image" />
                        </div>

                        <div className="categories col-3 col-lg-3">
                            <h3 className="subTitle2 text-center">Composta</h3>
                            <img className="categoryImage" src="/images/composta.png" alt="fruit and vegetables image" />
                        </div>
                </div>

                <div className="d-flex row col-12 col-lg-12 p-2 my-2">
                        <h2 className="text-center subTitle">Productos Destacados</h2>
                </div>

                <div className="d-flex row col-12 col-lg-12 p-2 m-2">
                    <div className="product col-3 col-lg-3">
                        <img className="productImage" src="/images/aguacate.png" alt="avocado image" />
                        <h4 className="text-center productName">Aguacate Hass</h4>
                        <br />
                        <img className="productImage" src="/images/elote.png" alt="corn image" />
                        <h4 className="text-center productName">Elote</h4>
                    </div>

                    <div className="product col-3 col-lg-3">
                    <img className="productImage" src="/images/fresa.jpg" alt="strawberry image" />
                    <h4 className="text-center productName">Fresa</h4>
                    <br />
                        <img className="productImage" src="/images/cebolla.png" alt="onion image" />
                    <h4 className="text-center productName">Cebolla</h4>
                    </div>
                    
                    <div className="product col-3 col-lg-3">
                    <img className="productImage" src="/images/jitomate.png" alt="tomato image" />
                    <h4 className="text-center productName">Jitomate</h4>
                    <br />
                        <img className="productImage" src="/images/zanahoria.jpg" alt="parrot image" />
                    <h4 className="text-center productName">Zanahoria</h4>
                    </div>
                    
                    <div className="product col-3 col-lg-3">
                    <img className="productImage" src="/images/calabacita.jpg" alt="pumpkin image" />
                    <h4 className="text-center productName">Calabacita</h4>
                    <br />
                        <img className="productImage" src="/images/manzana.jpg" alt="apple image" />
                    <h4 className="text-center productName">Manzana</h4>
                    </div>
                </div>
            </div>
		</main>
	);
}

export default Inicio;
