// Define constant for array of given objects.
const teamMemberArray = [

    {

        nameMember: "Wayne Barnett",
        companyRole: "Founder & CEO",
        profileImage: "./img/wayne-barnett-founder-ceo.jpg",

    },

    {

        nameMember: "Angela Caroll",
        companyRole: "Chief Editor",
        profileImage: "./img/angela-caroll-chief-editor.jpg",
  
    },

    {

        nameMember: "Walter Gordon",
        companyRole: "Office Manager",
        profileImage: "./img/walter-gordon-office-manager.jpg",
  
    },

    {

        nameMember: "Angela Lopez",
        companyRole: "Social Media Manager",
        profileImage: "./img/angela-lopez-social-media-manager.jpg",
  
    },

    {

        nameMember: "Scott Estrada",
        companyRole: "Developer",
        profileImage: "./img/scott-estrada-developer.jpg",
  
    },

    {

        nameMember: "Barbara Ramos",
        companyRole: "Graphic Designer",
        profileImage: "./img/barbara-ramos-graphic-designer.jpg",
  
    },

];

console.log("teamMemberArray", teamMemberArray, typeof teamMemberArray);

// Define constant for div of cards element.
const cardsDivElem = document.getElementById("cards-container");

console.log("cardsDivElem", cardsDivElem, typeof cardsDivElem);


// Define constant for div of cards element.

for (let i=0; i < teamMemberArray.length; i++) {

    console.log(i, teamMemberArray[i], typeof teamMemberArray[i]);

    cardsDivElem.innerHTML += `

    <div class="col-4 p-3">
    
    <div class="card">

    <img src="${teamMemberArray[i].profileImage}" class="card-img-top" alt="${teamMemberArray[i].nameMember} profile image">

    <div class="card-body">

      <h5 class="card-title">${teamMemberArray[i].nameMember}</h5>

      <p class="card-text">${teamMemberArray[i].companyRole}</p>

    </div>

    </div>
    `;

};