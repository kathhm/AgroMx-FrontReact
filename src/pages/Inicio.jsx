function Inicio() {
  return (
    <main className="container-fluid p-2">
      {/* Banner */}
      <div className="container-fluid p-0 mt-3">
        <img
          src="/images/banner.png"
          alt="Banner de inicio con descuento"
          className="img-fluid"
        />
      </div>

      {/* Categorías */}
      <div className="container mt-5 mb-0">
        <h1 className="text-center subTitle mb-4">Categorías</h1>
        <div className="row g-2">
          {[
            { title: "Frutas y verduras", img: "/images/frutas-verduras.png" },
            { title: "Legumbres", img: "/images/legumbres.jpeg" },
            { title: "Conservas", img: "/images/conservas.jpg" },
            { title: "Composta", img: "/images/composta.png" }
          ].map((category, index) => (
            <div key={index} className="col-6 col-md-3 text-center">
              <h3 className="subTitle2 filterText">{category.title}</h3>
              <img className="categoryImage img-fluid" src={category.img} alt={category.title} />
            </div>
          ))}
        </div>
      </div>

      {/* Productos Destacados */}
      <div className="container mt-0">
        <h1 className="text-center subTitle mb-4">Productos destacados</h1>
        <div className="row g-2">
          {[
            { name: "Aguacate Hass", img: "/images/aguacate.png" },
            { name: "Elote", img: "/images/elote.png" },
            { name: "Fresa", img: "/images/fresa.jpg" },
            { name: "Cebolla", img: "/images/cebolla.png" },
            { name: "Jitomate", img: "/images/jitomate.png" },
            { name: "Zanahoria", img: "/images/zanahoria.jpg" },
            { name: "Calabacita", img: "/images/calabacita.jpg" },
            { name: "Manzana", img: "/images/manzana.jpg" }
          ].map((product, index) => (
            <div key={index} className="col-6 col-md-3 text-center">
              <img className="productImage img-fluid" src={product.img} alt={product.name} />
              <h4 className="productName">{product.name}</h4>
            </div>
          ))}
        </div>
      </div>

      <div className="container mt-4 mb-0" id="comunidad">
        <h1 className="text-center subTitle mb-4">Comunidad</h1>
        <p className="text-center">Descubre historias, consejos y momentos especiales en nuestra comunidad. 🍃✨ ¡Únete a nosotros y comparte tu experiencia con AgroMx!</p>

        <div className="row align-items-center">
          <div className="col-12 col-lg-6 text-center">
            <img className="comunidad-foto img-fluid" src="/images/familia-saludable.jpg" alt="familia consumiendo productos de AgroMx" />
          </div>
          <div className="col-12 col-lg-6 d-flex flex-column align-items-center mt-4">
            <h2 className="subTitle border-bottom border-1 border-dark pb-2 mx-auto mt-2">
              Disfruta momentos únicos con lo mejor de AgroMx
            </h2>
            <h3 className="subTitle2 mt-3 nombre">Elena Torres, 31 de enero de 2025 a las 20:05 hrs.</h3>
            <p className="mt-3">Nada como compartir una comida en familia con productos frescos, agroecológicos y llenos de sabor. 🥗🌽</p>
          </div>
        </div>
      </div>
    </main >
  );
}

export default Inicio;
