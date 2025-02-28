import './Comunidad.css';
import Carrusel from "./Carrusel";

function Comunidad() {
    return (
        <main>

            <h1 className='titulo-comunidad-explora-cocina-comparte text-center'>Explora, cocina y comparte</h1>
            <section>
                <p className='parrafo-verde text-center'>Trabajamos con productores y productoras de la CDMX y sus alrededores que cultivan alimentos de alta calidad mediante prácticas agroecológicas responsables. Su enfoque respeta la biodiversidad, protege la salud del suelo y regenera los ecosistemas, promoviendo una agricultura consciente, libre de químicos dañinos y basada en el equilibrio natural.</p>
            </section>

            <section>
                <h2 className='subtitulo-historia-de-las-y-los-productores subtitulo-naranja text-center'>Historias de las y los productores</h2>
                <Carrusel />
            </section>



            <section>
            <h2 className='subtitulo-recetas subtitulo-naranja text-center subtitulo-naranja'>Recetas</h2>
            </section>

            <section>
            <h2 className='subtitulo-Consejos subtitulo-naranja text-left subtitulo-naranja'>Consejos</h2>
            </section>

            <section>
            <h2 className='subtitulo-Consejos subtitulo-naranja text-left subtitulo-naranja'>Reseñas</h2>
            </section>

            <section>
                <p className='parrafo-verde text-center parrafo-verde'>¡Compartenos tu experiencia usando nuestros productos!</p>
            </section>


        </main>
      


    );

}

export {Comunidad};