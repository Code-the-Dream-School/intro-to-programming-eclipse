const today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
const copyright = document.createElement("p");
copyright.innerHTML = `Perry Littrell &copy; ${thisYear}`;
footer.appendChild(copyright);
const skills = ['JavaScript', 'HTML', 'CSS', 'bilingual English/Spanish'];
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.getElementsByTagName('ul');

for(let i = 0; i < skills.length; i++) {
  let skill = document.createElement('li');
  skill.innerHTML = skills[i];
  skillsSection.appendChild(skill);
}
  let messageForm = document.getElementsByName("leave_message")[0];
  let messageSection = document.getElementById("messages");
  
  messageForm.addEventListener('submit',(e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let message = e.target.message.value;

    console.log(`Name: ${name} Email: ${email} Message: ${message}`);
      
    
    let messageList = messageSection.getElementsByTagName("ul")[0];
    let newMessage = document.createElement("li");
      
    newMessage.innerHTML= `<a href= "mailto: ${email}">${name}</a><span>: ${message}</span>`;
    messageList.appendChild(newMessage);
      
    messageForm.reset();
    
      const removeButton = document.createElement("button");
      removeButton.textContent= "remove";
      removeButton.type= "button";
      removeButton.className="remove";
      newMessage.appendChild(removeButton);
      messageList.appendChild(newMessage);
      
      removeButton.addEventListener('click', (e) => {
      let entryToRemove = e.target.parentElement;
      entryToRemove.remove();
      
     
      

      });
  });
