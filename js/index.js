const today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `Perry Littrell &copy; ${thisYear}`;
footer.appendChild(copyright);
const skills = ['highly organized', 'bilingual English/Spanish', 'self motivated'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.getElementsByTagName('ul');





for(let i = 0; i < skills.length; i++) {
  let skill = document.createElement('li');
  skill.innerHTML = skills[i];
  skillsSection.appendChild(skill);
}




