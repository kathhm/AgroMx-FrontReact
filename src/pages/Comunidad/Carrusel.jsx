import React from "react";
import "./Carrusel.css"; // Importa estilos personalizados

const Carrusel = () => {
  return (
    <div className="carousel-container">
      <div id="customCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active d-flex justify-content-center align-items-center">
            <div className="slide-content slide-bg-1">
              <img
                src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
                className="carousel-image large"
                alt="Imagen principal"
              />
              <p className="slide-text">
                En las afueras de la CDMX, Don Manuel ha dedicado más de 20 años a la agricultura, pero hace cinco decidió transformar su cultivo en un huerto agroecológico. “Me di cuenta de que la tierra necesitaba descanso y respeto”.
              </p>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="slide-content slide-bg-2">
              <img
                src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
                className="carousel-image small"
                alt="Imagen lateral 1"
              />
              <p className="slide-text small-text">Lorem ipsum dolor sit amet...</p>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="slide-content slide-bg-3">
              <img
                src="https://cdn3.pixelcut.app/7/20/uncrop_hero_bdf08a8ca6.jpg"
                className="carousel-image small"
                alt="Imagen lateral 2"
              />
              <p className="slide-text small-text">Otra historia interesante...</p>
            </div>
          </div>
        </div>

        {/* Controles del carrusel */}
        <button className="carousel-control-prev" type="button" data-bs-target="#customCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#customCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  );
};

export default Carrusel;
