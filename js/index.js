let today = new Date()
console.log(today)
let thisYear = today.getFullYear()
console.log(thisYear)
let footer = document.querySelector("footer");
console.log(footer)
let copywrite = document.createElement("p")
console.log(copywrite)
copywrite.innerHTML=`Adriana L. ${thisYear}`
footer.appendChild(copywrite)
let skills = ["Developing Wordpress sites", "Social Media", "Advertisement", "SEO"]
let skillsSection=document.getElementById("skills")
let skillsList=skillsSection.querySelector("ul")
for (let i=0; i <skills.length; i++){
    let skill=document.createElement("li")
    skill.innerText=skills[i]
skillsList.appendChild(skill)
}
const messageForm = document.querySelector('form[name="leave_message"]')
messageForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let name = event.target.name.value
    let email = event.target.email.value
    let message = event.target.message.value
    console.log(message)
    console.log(email)
    console.log(name)
    let messageSection = document.getElementById('messages')
    let messageList = messageSection.querySelector('ul')
    console.log(messageList);
    let newMessage = document.createElement('li');
    let a = document.createElement('a');
    let linkText = document.createElement("span");
    a.appendChild(linkText);
    a.innerText = name;
    a.href = "mailto:" + email;
    newMessage.appendChild(a);
    const messageText=document.createElement("span")
    messageText.innerText=" - " + message + " "
    newMessage.appendChild(messageText)
    const removeButton = document.createElement('button');
    removeButton.innerText = "remove"
    removeButton.type = 'button';
    removeButton.addEventListener('click', (event) => {
        const entry = event.target.parentNode
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();

});
const githubRequest= new XMLHttpRequest();

githubRequest.open("GET","https://api.github.com/users/adriana2020ca/repos" )
githubRequest.send()
githubRequest.addEventListener("load",function(){
   const repositories= JSON.parse(this.response)
   console.log(repositories);
   const projectSection=document.getElementById("projects");
   const projectList=projectSection.querySelector("ul");
   for(let i=0; i < repositories.length; i++ ){
       const project=document.createElement("li");
       project.innerHTML=`<a href="${repositories[i].html_url}">${repositories[i].name}</a>`;
       projectList.appendChild(project);
   }
})

