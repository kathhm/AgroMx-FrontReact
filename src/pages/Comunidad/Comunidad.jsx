import React from "react";
import "./Comunidad.css";

const Comunidad = () => {
    return (
        <>
            <div>
                <h2 className='subtitulo-consejos subtituloNaranjaCentradoH2'>Consejos</h2>
            </div>

            <div className='imagenFondoCultivos'>
                <div className="overlay"></div>
                <div className="grid-container">
                    <div className="card blue">
                        <h3>Cuidado de tus huertos y compostas</h3>
                        <p>🌱 1. Mantén un suelo saludable
                            El suelo es la base de un huerto próspero. Asegúrate de enriquecerlo con materia orgánica como compost, estiércol o humus de lombriz. Evita removerlo demasiado para no afectar los microorganismos benéficos y utiliza cultivos de cobertura para mejorar su estructura.
                        </p>

                        <p>
                            🌿 2. Diversifica tus cultivos
                            Plantar diferentes tipos de hortalizas y flores ayuda a prevenir plagas y enfermedades. La rotación de cultivos evita el agotamiento de nutrientes en el suelo, y la asociación de plantas (como albahaca con tomate o zanahoria con cebolla) puede mejorar la salud y el crecimiento de tu huerto.
                        </p>

                        <p>
                            ♻️ 3. Equilibra tu composta
                            Para una composta eficiente, mezcla materiales verdes (restos de frutas y verduras, césped fresco) con materiales marrones (hojas secas, cartón sin tinta, ramas trituradas). Asegúrate de voltearla cada semana para oxigenarla y evitar malos olores, logrando un abono rico y de calidad.
                        </p>
                    </div>
                    <div className="card yellow">
                        <h3>¿Cómo conservo adecuadamente mis alimentos?</h3>
                        <p>
                            🥕 1. Almacena correctamente según el tipo de alimento
                            Las frutas y verduras tienen diferentes necesidades de almacenamiento. Algunas, como papas y cebollas, deben guardarse en lugares frescos y oscuros, mientras que otras, como hierbas y lechugas, se conservan mejor en el refrigerador dentro de bolsas perforadas para mantener la humedad sin que se pudran.
                        </p>

                        <p>
                            ❄️ 2. Congela y deshidrata para prolongar su vida útil
                            Congelar frutas, verduras y hierbas es una excelente forma de evitar desperdicios. También puedes deshidratar alimentos como tomates, hongos y hierbas para almacenarlos por meses sin perder sus nutrientes.
                        </p>

                        <p>
                            🍯 3. Aprovecha métodos naturales de conservación
                            Fermentar vegetales (como chucrut o kimchi), hacer conservas en vinagre o envasar al vacío son formas efectivas de prolongar la vida de los alimentos sin necesidad de refrigeración.
                        </p>
                    </div>
                    <div className="card green">
                        <h3>Rotación de cultivos</h3>
                        <p>
                            🔄 1. Alterna cultivos según sus necesidades nutricionales
                            Para evitar el agotamiento del suelo, cambia de lugar los cultivos cada temporada. Después de una planta que consume mucho nitrógeno (como el maíz), siembra una que lo fije, como las leguminosas (frijoles, lentejas, habas).
                        </p>

                        <p>
                            🐞 2. Reduce plagas y enfermedades
                            Las plagas y enfermedades tienden a quedarse en el suelo si plantas lo mismo en el mismo lugar cada año. Rotar cultivos interrumpe su ciclo y disminuye la necesidad de pesticidas.
                        </p>

                        <p>
                            🌿 3. Mejora la estructura del suelo
                            Al combinar raíces profundas (como zanahorias) con raíces superficiales (como lechugas), se airea mejor el suelo y se evita la compactación, favoreciendo la absorción de agua y nutrientes.
                        </p>
                    </div>
                    <div className="card orange">
                        <h3>Uso de coberturas vegetales (mulching)</h3>
                        <p>
                            🌱 1. Conserva la humedad del suelo
                            El mulch (hojas secas, paja, cartón, corteza de árboles) evita que el agua se evapore rápidamente, reduciendo la frecuencia de riego y protegiendo las raíces de las plantas.
                        </p>
                        <p>
                            🚫 2. Reduce el crecimiento de malezas
                            Una buena capa de cobertura impide que la luz llegue a las semillas de maleza, dificultando su crecimiento sin necesidad de herbicidas.

                        </p>
                        <p>
                            🌎 3. Aporta nutrientes al suelo
                            A medida que la cobertura vegetal se descompone, enriquece el suelo con materia orgánica, mejorando su fertilidad y estructura a largo plazo.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='subtitulo-reseñas subtituloNaranjaCentradoH2'>Reseñas</h2>
            </div>
            <div>
                <p>
                    <h3 className='subtitulo-experiencia subtituloVerdeCentradoH3'>¡Compartenos tu experiencia usando nuestros productos!</h3>
                </p>
            </div>
            <div className="reseñas-lista">
                {/* Tarjeta de Reseña 1 */}
                <div className="reseña-card">
                    <h4>Usuario: Juan Pérez Torres</h4>
                    <img src="public\images\Juan.jpg" alt="Juan Pérez Torres" />
                    <div className="estrellas">⭐⭐⭐⭐⭐</div>
                    <p>"El melón es increíblemente dulce y jugoso. Definitivamente lo compraré de nuevo."</p>
                </div>

                {/* Tarjeta de Reseña 2 */}
                <div className="reseña-card">
                    <h4>Usuario: María López Ceballos</h4>
                    <img src="public\images\mariaa.jpg" alt="María López" />
                    <div className="estrellas">⭐⭐⭐⭐</div>
                    <p>"El pimiento rojo tiene un sabor delicioso y fresco. Perfecto para ensaladas y salsas."</p>
                </div>

                {/* Tarjeta de Reseña 3 */}
                <div className="reseña-card">
                    <h4>Usuario: Carlos Gómez Reyes</h4>
                    <img src="public\images\Carlos.jpg" alt="Carlos Gómez" />
                    <div className="estrellas">⭐⭐⭐⭐⭐</div>
                    <p>"El chile chipotle seco tiene el mejor aroma y sabor ahumado que he probado."</p>
                </div>

                {/* Tarjeta de Reseña 4 */}
                <div className="reseña-card">
                    <h4>Usuario: Ana Ramírez Villalba</h4>
                    <img src="public\images\Ana.jpg" alt="Ana Ramírez" />
                    <div className="estrellas">⭐⭐⭐⭐</div>
                    <p>"Las semillas de chía son de excelente calidad. Perfectas para mis batidos y postres."</p>
                </div>

                {/* Tarjeta de Reseña 5 */}
                <div className="reseña-card">
                    <h4>Usuario: Ricardo Fernández Mendoza</h4>
                    <img src="public\images\Ricardo.jpg" alt="Ricardo Fernández" />
                    <div className="estrellas">⭐⭐⭐⭐⭐</div>
                    <p>"El aguacate está en su punto perfecto de maduración. Muy cremoso y delicioso."</p>
                </div>

                {/* Tarjeta de Reseña 5 */}
                <div className="reseña-card">
                    <h4>Usuario: Sofía Espinoza Gil </h4>
                    <img src="public\images\Sofia.jpg" alt="Ricardo Fernández" />
                    <div className="estrellas">⭐⭐⭐⭐⭐</div>
                    <p>"Las fresas están súper dulces y frescas, perfectas para mis postres."</p>
                </div>
            </div>
        </>
    );
};

export default Comunidad;