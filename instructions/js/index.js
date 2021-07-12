//This event let my code appear after the page is loaded 
window.addEventListener('load', (event) => {

// footer of my portfolio (name and year)
const today = new Date()
const thisYear = today.getFullYear()
const footer = document.querySelector('footer')
const copyright = document.createElement('p')
copyright.innerHTML = `Monica ${thisYear} &copy;`
footer.appendChild(copyright)


// skills section
const skills = ['JS', 'CSS', 'HTML']
const skillsSection = document.getElementById('skills')
const skillList = skillsSection.querySelector('ul')
// adding and creating the list of skills
for(i=0; i < skills.length; i++){
const skill = document.createElement('li')
skill.innerHTML = skills[i]
skillList.appendChild(skill)
}



//form code
const messageForm = document.getElementsByName('leave_message')[0]
messageForm.addEventListener('submit', (e) => {

   e.preventDefault()

   const name = e.target.name.value
   const email = e.target.email.value
   const message = e.target.message.value
   console.log(`${name} ${email} ${message}`)

   const messageSection = document.getElementById('messages')
   const messageList = messageSection.querySelector('ul')
   const newMessage = document.createElement ('li') 
   newMessage.innerHTML = `<a href ="mailto: ${email} "> ${name}</a><span>${message}</span>`
   
   //Second button (remove button)
   const removeButton = document.createElement('button')
   removeButton.innerText = 'Remove'
   removeButton.type = 'button'

   removeButton.addEventListener('click', (e) => {
       const entry = e.target.parentNode
       entry.remove() 
   })

   newMessage.appendChild(removeButton)
   messageList.appendChild(newMessage)

   messageForm.reset()

  })


//AJAX practice... adding GitHub repositories to my portfolio
const githubRequest = new XMLHttpRequest();
//Open method (as the assigment asks you to do)
githubRequest.open('GET','https://api.github.com/users/mnca16/repos');
githubRequest.send();
githubRequest.addEventListener('load', (event) => {
const repositories = JSON.parse(githubRequest.response)
console.log(repositories);
let projectSection = document.getElementById('projects');
let projectList = projectSection.querySelector('ul');
for(let i = 0; i < repositories.length; i++) {
    let project = document.createElement('li');
    project.innerHTML = `<a href="${repositories[i].html_url}"> ${repositories[i].name}</a> ${repositories[i].description} ${repositories[i].created_at}}`
    projectList.appendChild(project);

}
})
 

    
})


 