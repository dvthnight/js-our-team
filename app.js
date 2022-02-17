
const team = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      image: "img/wayne-barnett-founder-ceo.jpg",
    },
    {
      name: "Angela Caroll",
      role: "Chief Editor",
      image: "img/angela-caroll-chief-editor.jpg",
    },
    {
      name: "Walter Gordon",
      role: "Office Manager",
      image: "img/walter-gordon-office-manager.jpg",
    },
    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      image: "img/angela-lopez-social-media-manager.jpg",
    },
    {
      name: "Scott Estrada",
      role: "Developer",
      image: "img/scott-estrada-developer.jpg",
    },
    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      image: "img/barbara-ramos-graphic-designer.jpg",
    },
  ];

  console.log(team);


  function generatoreCard(nome,ruolo,immagine){
    const cardTeamMember = `<div class="team-card">
                            <div class="card-image">
                                <img
                                src="${immagine}"
                                alt="${nome}"
                                />
                            </div>
                            <div class="card-text">
                                <h3>${nome}</h3>
                                <p>${ruolo}</p>
                            </div>
                            </div>`
    return cardTeamMember;
  }

  const teamContainer  = document.querySelector(".team-container");

//   ciclo for che mi prende i dati dei membri
//   li inoltra alla funzione che restituisce il codice html 
//   questo codice viene poi inserito nell'HTML

  for(let i=0; i< team.length; i++){
      const nomeMembro = team[i].name;
      const imggMembro = team[i].image;
      const ruoloMembro = team[i].role;
      console.log(nomeMembro,imggMembro,ruoloMembro);

      const cardMember = generatoreCard(nomeMembro,ruoloMembro,imggMembro);
      console.log(cardMember);

      teamContainer.innerHTML += cardMember;
  }