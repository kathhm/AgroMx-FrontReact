import './DeveloperTeam.css';
import teamMembers from './teamMembers';
import 'bootstrap-icons/font/bootstrap-icons.css'; 


function DeveloperTeam() {
    return (

        <main>
        <section class="about-us">
            <h1>Acerca de nosotros</h1>
            <p class="paragraph">
                Somos un equipo de profesionales jóvenes del desarrollo web comprometidos con la creación
                de soluciones digitales que impacten la vida de los usuarios.

                Nuestra experiencia en diversas áreas del desarrollo web, así como nuestras distintas 
                historias y contextos, nos permite desarrollar productos funcionales e imprimirles rasgos 
                originales, innovadores y creativos.
            </p>
            <p class="paragraph">
                Asumimos la responsabilidad que tenemos con nuestra comunidad y queremos que nuestras 
                iniciativas contribuyan a un futuro más sostenible para todos. 

                Conoce más sobre cada uno de nosotros:
            </p>
            <div id="team-container" class="team-container"></div>
        </section>

        <section>
        <teamMembers />
        </section>
    </main>


    );

}

export {DeveloperTeam};