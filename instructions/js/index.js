//This event let my code appear after the page (HTML) is loaded 
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

   fetch('https://api.github.com/users/mnca16/repos')
   .then(response => response.json())
   .then(data => repository(data))
   .catch(error => console.log('The promise failed', error));

   function repository (data) {
      let projectSection = document.getElementById('projects');
      let projectList = projectSection.querySelector('ul');

      for (let i = 0; i < data.length; i++){
         let project = document.createElement('li');
         project.innerHTML = `<a href="${data[i].html_url}">${data[i].name}</a>`
         projectList.appendChild(project);
     }
    }
  
 
  })


 