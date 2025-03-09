const teamMembers = [
    {
      name: "Jael Jareth Alonso Bohórquez",
      role: "Desarrollador Backend",
      phrase: "Apasionado por Java, la arquitectura de software y la resolución de problemas.",
      linkedin: "https://www.linkedin.com/in/jael-alonso-bohorquez/",
      github: "https://github.com/Bohorquezjael",
    },
    {
      name: "Thania Elizabeth Arredondo Palacios",
      role: "Desarrolladora Full-Stack",
      phrase: "Desarrolladora Java y geocientífica, innovando proyectos donde la ciencia y la tecnología se encuentran.",
      linkedin: "https://www.linkedin.com/in/thania-elizabeth-arredondo-palacios/",
      github: "https://github.com/thaniaelizabeth",
    },
    {
      name: "Katherine Hinojosa Molina",
      phrase: "Estoy convencida de que la programación es la llave para construir un mundo lleno de posibilidades.",
      role: "Desarrolladora Full-Stack",
      linkedin: "https://www.linkedin.com/in/katherine-hinojosa-molina-6556521a4",
      github: "https://github.com/kathhm",
    },
    {
      name: "David Avellaneda León",
      role: "Desarrollador Full-Stack",
      phrase: "Apasionado por crear soluciones eficientes y escalables, convierto el café en codigo y las ideas en realidad",
      linkedin: "https://www.linkedin.com/in/david-avellaneda29/",
      github: "https://github.com/DavidAvellaneda97",
    },
    {
      name: "Lisset Dolores Sánchez Juárez",
      role: "Desarrolladora Full-Stack",
      phrase: "Creo que la combinación adecuada de creatividad y habilidades técnicas pueden crear experiencias digitales impactantes.",
      linkedin: "https://www.linkedin.com/in/lissetdoloressanchezjuarez/",
      github: "https://github.com/Lisset100",
    },
    {
      name: "Dae Díaz Yáñez",
      role: "Desarrollador Full-Stack",
      phrase: "Convencida de que podemos colaborar con la tecnología para mejorar nuestras vidas. Intersección de filosofía y tecnología.",
      linkedin: "https://www.linkedin.com/in/dae-d%C3%ADaz/",
      github: "https://github.com/ddzoid",
    },
    {
      name: "Erick Chávez Coronado",
      role: "Desarrollador Full-Stack",
      phrase: "Con gran experiencia en la gestión de proyectos y un fuerte enfoque en la creación de soluciones tecnológicas.",
      linkedin: "https://www.linkedin.com/in/erickchavezcoronado/",
      github: "https://github.com/ECjeux24",
    },
    {
      name: "Luis Alberto Eusebio Barranco",
      role: "Desarrollador Full-Stack",
      phrase: '"No solo escribo código, creo experiencias"',
      linkedin: "https://www.linkedin.com/in/luisalbertobarranco/",
      github: "https://github.com/LuisBarranco96",
    },
    {
      name: "Hilari Hernández Islas",
      role: "Desarrolladora Full-Stack",
      phrase: 'Programadora y Administradora "El código y la gestión, transforman ideas en innovación."',
      linkedin: "https://www.linkedin.com/in/hilari-hernandez-islas-652842220/",
      github: "https://github.com/HilaryYuuki?tab=repositories",
    },
  ];
  
  const teamContainer = document.getElementById("team-container");
  
  function createCard(member) {
    const card = document.createElement("div");
    card.className = "card";
  
    card.innerHTML = `
      <h3>${member.name}</h3>
      <p>${member.role}</p>
      <p>${member.phrase}</p>
      <div class="icons">
          <a href="${member.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="${member.github}" target="_blank"><i class="fab fa-github"></i></a>
      </div>`;
  
    return card;
  }
  
  teamMembers.forEach((member) => {
    const card = createCard(member);
    teamContainer.appendChild(card);
  });

  export {teamMembers};