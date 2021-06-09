const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright =document.createElement('p')
const skillsSection = document.getElementById('skills');
const skillList = skillsSection.querySelector('ul');

let skills = ['IT Support','Command Line Interface','JavaScript', 'HTML', 'JavaScript']


copyright.innerHTML=("Munir Nuristani &copy; " + thisYear)
footer.appendChild(copyright)
function addSkills(skills) {
    for(let i = 0; i < skills.length; i++){
        let skill = document.createElement('li');
        skill.innerHTML= (skills[i]);
        skillList.appendChild(skill);   
    }
}
addSkills(skills);
/*------------------------ Leave Message--------------------------- */
let messageForm = document.getElementsByName('leave_message')[0];

messageForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const{name, email, message } = event.target;
    console.log(name.value, email.value, message.value );
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email.value}">${name.value}</a> wrote: <span>\"${message.value}\"</span>`
    const removeButton = document.createElement('button');
    removeButton.innerText = 'remove';
    removeButton.type = 'button'
    removeButton.addEventListener('click', (e)=>{
        const entry = removeButton.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    messageForm.reset();
})



