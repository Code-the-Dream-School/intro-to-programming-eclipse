const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector("footer");
const copyright = document.createElement("p");
const text = "Perry Littrell " + thisYear;
const skills = ["highly organized", "bilingual English/Spanish", "self motivated"];
const skillsSection = document.getElementById('skills');
//const skillsList = 

copyright.innerHTML = text;
footer.appendChild(copyright);


for(let i = 0; i < skills.length; i++) {
  let skill = createElement('li');
}



