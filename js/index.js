const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright =document.createElement('p')
const skillsSection = document.getElementById('skills');
const skillList = skillsSection.querySelector('ul');

let skills = ['IT support','Command Line Interface','JavaScript', 'HTML']


copyright.innerHTML=("Munir Nuristani " + thisYear)
footer.appendChild(copyright)

for(let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML= (skills[i]);
    skillList.appendChild(skill);   
}