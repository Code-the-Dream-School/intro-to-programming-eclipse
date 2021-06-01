window.addEventListener('load', (event) => {
const today = new Date()

const thisYear = today.getFullYear()

const footer = document.querySelector('footer')

const copyright = document.createElement('p')

copyright.innerHTML = `Monica ${thisYear} &copy;`

footer.appendChild(copyright)

const skills = ['JS', 'CSS', 'HTML']

const skillsSection = document.getElementById('skills')

const skillList = skillsSection.querySelector('ul')

for(i=0; i < skills.length; i++){
const skill = document.createElement('li')
skill.innerHTML = skills[i]
skillList.appendChild(skill)

}

console.log(document.querySelector('footer'))
    
})