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
                        <p>🌱 Mantén un suelo saludable con materia orgánica y abonos naturales.</p>
                        <p>🌿 Diversifica tus cultivos para mejorar la fertilidad del suelo y prevenir plagas.</p>
                        <p>♻️ Equilibra tu composta con materiales verdes y secos para obtener un abono de calidad.</p>
                    </div>
                    <div className="card yellow">
                        <h3>¿Cómo conservo adecuadamente mis alimentos?</h3>
                        <p>🥕 Almacena correctamente según el tipo de alimento: secos en lugares frescos, verduras en el refrigerador.</p>
                        <p>❄️ Congela y deshidrata frutas y verduras para prolongar su vida útil sin perder nutrientes.</p>
                        <p>🍯 Aprovecha métodos naturales como la fermentación y el encurtido para conservar alimentos.</p>
                    </div>
                    <div className="card green">
                        <h3>Rotación de cultivos</h3>
                        <p>🔄 Alterna cultivos según sus necesidades nutricionales para evitar el agotamiento del suelo.</p>
                        <p>🐞 Reduce plagas y enfermedades al cambiar los cultivos de lugar cada temporada.</p>
                        <p>🌿 Mejora la estructura del suelo y su contenido de nutrientes con una planificación adecuada.</p>
                    </div>
                    <div className="card orange">
                        <h3>Uso de coberturas vegetales (mulching)</h3>
                        <p>🌱 Conserva la humedad del suelo reduciendo la evaporación.</p>
                        <p>🚫 Reduce el crecimiento de malezas sin necesidad de químicos.</p>
                        <p>🌎 Aporta materia orgánica al suelo a medida que el material de cobertura se descompone.</p>
                    </div>
                    <div className="card purple">
                        <h3>Aprovechamiento del agua en el riego</h3>
                        <p>💧 Riega en las horas adecuadas (temprano en la mañana o al atardecer) para evitar la evaporación.</p>
                        <p>🌊 Implementa sistemas de riego por goteo para un uso eficiente del agua.</p>
                        <p>☔ Recolecta agua de lluvia y reutiliza el agua de cocina para reducir el consumo.</p>
                    </div>
                    <div className="card teal">
                        <h3>Plantas compañeras para un huerto saludable</h3>
                        <p>🌻 Combina plantas que se beneficien entre sí, como tomate y albahaca.</p>
                        <p>🐝 Atrae polinizadores con flores estratégicamente ubicadas en tu huerto.</p>
                        <p>🍃 Usa plantas repelentes de plagas como la caléndula y la menta.</p>
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
                <div className="reseña-card">
                    <h4>Usuario: Juan Pérez Torres</h4>
                    <img src="public/images/Juan.jpg" alt="Juan Pérez Torres" />
                    <div className="estrellas">⭐⭐⭐⭐⭐</div>
                    <p>"El melón es increíblemente dulce y jugoso. Definitivamente lo compraré de nuevo."</p>
                </div>
                <div className="reseña-card">
                    <h4>Usuario: María López Ceballos</h4>
                    <img src="public/images/mariaa.jpg" alt="María López" />
                    <div className="estrellas">⭐⭐⭐⭐</div>
                    <p>"El pimiento rojo tiene un sabor delicioso y fresco. Perfecto para ensaladas y salsas."</p>
                </div>
                <div className="reseña-card">
                    <h4>Usuario: Carlos Gómez Reyes</h4>
                    <img src="public/images/Carlos.jpg" alt="Carlos Gómez" />
                    <div className="estrellas">⭐⭐⭐⭐⭐</div>
                    <p>"El chile chipotle seco tiene el mejor aroma y sabor ahumado que he probado."</p>
                </div>
                <div className="reseña-card">
                    <h4>Usuario: Ana Ramírez Villalba</h4>
                    <img src="public/images/Ana.jpg" alt="Ana Ramírez" />
                    <div className="estrellas">⭐⭐⭐⭐</div>
                    <p>"Las semillas de chía son de excelente calidad. Perfectas para mis batidos y postres."</p>
                </div>
                <div className="reseña-card">
                    <h4>Usuario: Ricardo Fernández Mendoza</h4>
                    <img src="public/images/Ricardo.jpg" alt="Ricardo Fernández" />
                    <div className="estrellas">⭐⭐⭐⭐⭐</div>
                    <p>"El aguacate está en su punto perfecto de maduración. Muy cremoso y delicioso."</p>
                </div>
                <div className="reseña-card">
                    <h4>Usuario: Sofía Espinoza Gil </h4>
                    <img src="public/images/Sofia.jpg" alt="Sofía Espinoza" />
                    <div className="estrellas">⭐⭐⭐⭐⭐</div>
                    <p>"Las fresas están súper dulces y frescas, perfectas para mis postres."</p>
                </div>
            </div>
        </>
    );
};

export default Comunidad;