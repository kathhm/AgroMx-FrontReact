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
                            <div className='col-2 col-lg-2'></div>
                            <div className='col-4 col-lg-2 col-md-2 text-center'>
                            <img className='imagen-ods' src="/public/images/Sustainable_Development_Goal-es-3.jpg" alt="Imagen de Objetivo de Desarrollo Sostenible 3: Salud y Bienestar"/>
                            </div>
                            <div className='col-4 col-lg-2 col-md-2 text-center'>
                            <img className='imagen-ods' src="/public/images/Sustainable_Development_Goal-es-012.jpg" alt="Imagen de Objetivo de Desarrollo Sostenible 3: Salud y Bienestar"/>
                            </div>
                            <div className='col-2 col-sm-2 d-lg-none d-md-none'></div>
                            <div className='col-2 col-sm-2 d-lg-none d-md-none'></div>
                            <div className='col-4 col-lg-2 col-md-2 text-center'>
                            <img className='imagen-ods' src="/public/images/Sustainable_Development_Goal-es-13.jpg" alt="Imagen de Objetivo de Desarrollo Sostenible 3: Salud y Bienestar"/>
                            </div>
                            <div className='col-4 col-lg-2 col-md-2 text-center'>
                            <img className='imagen-ods' src="/public/images/Sustainable_Development_Goal-es-15.jpg" alt="Imagen de Objetivo de Desarrollo Sostenible 3: Salud y Bienestar"/>
                            </div>

                            <div className='col-2  col-lg-2'></div>
                        </div>
                    </div>

                    <p className='parrafo-mostaza text-center'>Alineamos nuestra labor con los Objetivos de Desarrollo Sostenible (ODS) promoviendo una alimentación saludable (ODS 3), fomentando el consumo responsable (ODS 12), reduciendo la huella de carbono con consumo local (ODS 13) y protegiendo la biodiversidad a través de la agroecología (ODS 15).</p>
                    <p className='parrafo-verde text-center'> Juntos, impulsamos un sistema alimentario más justo y sostenible.</p>
                </div>
            </main>

            <section>
                <div className='bloque-azul'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-6 border text-center'>
                                <h2>Misión</h2>
                                <div className='row'>
                                    <div className='col-12 border'>
                                        <p>Conectar productos agroecológicos con consumidores interesados en mejorar su alimentación, fomentar el comercio y economía locales y cuidar el medio ambiente.</p>
                                        </div>
                                </div>
                            </div>
                            <div className='col-6 border text-center'>
                                <img className='mision' src="public/images/mision.jpg" alt="" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6  text-center'>
                                <img className='vision' src="/public/images/vision.png" alt="" />
                            </div>
                            <div className='col-6 border text-center'>
                                <h2>Visión</h2>
                                <div className='row'>
                                    <div className='col-12 border text-end'>
                                        <p>Ser líderes en la distribución de alimentos agroecológicos, creando una comunidad comprometida con una alimentación sana y sostenible. 
                                        </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



               {/*  <div class="container">
    <div class="row">
        <div class="col-xs-6">
            <div class="big-box">image</div>
        </div>
        <div class="col-xs-6">
            <div class="row">
                <div class="col-xs-6"><div class="mini-box">1</div></div>
                <div class="col-xs-6"><div class="mini-box">2</div></div>
                <div class="col-xs-6"><div class="mini-box">3</div></div>
                <div class="col-xs-6"><div class="mini-box">4</div></div>
            </div>
        </div>
    </div>
</div> */}
{/* <div class="row"> <div class="col-sm-9"> Level 1: .col-sm-9 <div class="row"> <div class="col-8 col-sm-6"> Level 2: .col-8 .col-sm-6 </div> <div class="col-4 col-sm-6"> Level 2: .col-4 .col-sm-6 </div> </div> </div> </div> */}
            </section>
        
        
        </>

    );

}

export { SobreNosotros };