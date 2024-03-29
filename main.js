const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

//funzione che uso per generare una card e relative info dato un array
function generaCard(mioArray){
  let nuovaCard = "";
  for (i=0; i<mioArray.length;i++){
    if ( i < 6 ){
      nuovaCard += `
      <div class="team-card">
  
        <div class="card-image">
          <img
            src="img/${mioArray[i].image}"
            alt="${mioArray[i].name}"
          />
        </div>
        <div class="card-text">
          <h3>${mioArray[i].name}</h3>
          <p>${mioArray[i].role}</p>
        </div>
  
      </div>
      `;
    }else{
      nuovaCard += `
      <div class="team-card">

        <div class="card-image">
          <img
            src="${mioArray[i].image}"
            alt="${mioArray[i].name}"
          />
        </div>
        <div class="card-text">
          <h3>${mioArray[i].name}</h3>
          <p>${mioArray[i].role}</p>
        </div>

      </div>
      `;
    }
  }
return nuovaCard;
}

//dichiaro dove voglio che vengano stampate queste card nel DOM
const stampaTeam = document.querySelector(".team-container");
stampaTeam.innerHTML = generaCard(team);

//compilato il form e premuto il tasto un nuovo membro viene aggiunto al team
let aggiungiMembro = document.getElementById("addMemberButton");
aggiungiMembro.addEventListener("click", function(){

  let nuovoNome = document.getElementById("name").value;
  let nuovoRuolo = document.getElementById("role").value;
  let nuovoImmagine = document.getElementById("image").value;

  const nuovoMembro = {
    name : nuovoNome,
    role : nuovoRuolo,
    image : nuovoImmagine
  }

  console.log(nuovoMembro);
  team.push(nuovoMembro);
  stampaTeam.innerHTML = generaCard(team);
})

