
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
   newMessage.innerHTML = `<a href ="mailto: ${email} "> wrote: ${name}</a><span>${message}</span>`
   
   //Second button (remove button)
   const removeButton = document.createElement('button')
   removeButton.innerText = 'Remove'
   removeButton.type = 'button'

   removeButton.addEventListener('onclick', (e) => {
       const entry = e.target.parentNode
       entry.remove() 
   })

   newMessage.appendChild(removeButton)
   messageList.appendChild(newMessage)
   


   messageForm.reset()
})




    
})