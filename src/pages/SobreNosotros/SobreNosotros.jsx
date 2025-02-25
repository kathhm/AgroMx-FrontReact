import './SobreNosotros.css';

function SobreNosotros () {
    return (
        <>
            <h1 className='titulo-sobre-nosotros text-center'>¿Quiénes somos?</h1>
            <main>
                <div>
                    <p className='parrafo-verde text-center'>En <strong>AgroMx</strong> creemos en un mundo donde la salud, el bienestar y el respeto por la naturaleza van de la mano. Somos una empresa comprometida con la distribucion de productos agroecologicos en la Ciudad de México que fomentan una alimentación más sostenible.
                    </p>

                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-2'></div>
                            <div className='col-4 col-lg-2'>
                            <img className='imagen-ods' src="/public/images/Sustainable_Development_Goal-es-3.jpg" alt="Imagen de Objetivo de Desarrollo Sostenible 3: Salud y Bienestar"/>
                            </div>
                            <div className='col-4 col-lg-2'>
                            <img className='imagen-ods' src="/public/images/Sustainable_Development_Goal-es-3.jpg" alt="Imagen de Objetivo de Desarrollo Sostenible 3: Salud y Bienestar"/>
                            </div>
                            <div className='col-4 col-lg-2'>
                            <img className='imagen-ods' src="/public/images/Sustainable_Development_Goal-es-3.jpg" alt="Imagen de Objetivo de Desarrollo Sostenible 3: Salud y Bienestar"/>
                            </div>
                            <div className='col-4 col-lg-2'>
                            <img className='imagen-ods' src="/public/images/Sustainable_Development_Goal-es-3.jpg" alt="Imagen de Objetivo de Desarrollo Sostenible 3: Salud y Bienestar"/>
                            </div>

                            <div className='col-2'></div>
                        </div>
                    </div>

                    <p className='parrafo-mostaza text-center'>Alineamos nuestra labor con los Objetivos de Desarrollo Sostenible (ODS) promoviendo una alimentación saludable (ODS 3), fomentando el consumo responsable (ODS 12), reduciendo la huella de carbono con consumo local (ODS 13) y protegiendo la biodiversidad a través de la agroecología (ODS 15).</p>
                    <p className='parrafo-verde text-center'> Juntos, impulsamos un sistema alimentario más justo y sostenible.</p>
                </div>
            </main>
        
        
        </>

    );

}

export { SobreNosotros };