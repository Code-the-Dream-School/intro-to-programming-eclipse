const hideMenu = document.getElementById('hideMenu');
const showMenu = document.getElementById('showMenu');
const navLinks = document.getElementById('nav-links')
const footer = document.querySelector('footer');
const copyright =document.createElement('p')
const skillsSection = document.getElementById('skills');
const skillList = skillsSection.querySelector('ul');
const topButton = document.getElementById('button');
let today = new Date();
let thisYear = today.getFullYear();
function getDate () {
    let today = new Date()
    const months = ['January','February', 'March','April', 'May', 'June', 'July', 'August','September', 'October', 'November', 'December']
    let thisYear =today.getFullYear()
    let thisMonth = today.getMonth()
    let thisDay = today.getDate()
    let thisHour=today.getHours()
    let thisMinute = today.getMinutes()
    return [months[thisMonth]+ " "+ thisDay+ ", "+ thisYear, thisHour+':'+thisMinute]    
}



let skills = ['IT Support','Command Line Interface','JavaScript', 'HTML', 'JavaScript']
/*---- menu toggle for mobile screen----*/
function menuButton(menuItem,move){
    menuItem.addEventListener('click', ()=>{
        navLinks.style.right = move;
    })
}
menuButton(showMenu, 0)
menuButton(hideMenu, "-200px")
/*----end----*/
/* ----scroll to top button----*/
window.onscroll = function() {scrollFunction()}
const scrollFunction = () =>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none"
    }
}
topButton.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
/*----end----*/

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
const messageForm = document.getElementById('leave_message');
function createButton(buttonName, buttonContent){
    buttonName = document.createElement('button');
    buttonName.innerText = buttonContent;
    buttonName.type = 'button'
    return buttonName
}
messageForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const{name, email, message } = event.target;
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<a href="mailto:${email.value}">${name.value}</a> wrote: <span>${message.value}</span>`
    const removeIt = createButton("removeButton","Remove");
    removeIt.addEventListener('click', (e)=>{
        const entry = removeIt.parentNode;
        entry.remove();
        if(messageList.children.length === 0){
            messageSection.style.display = 'none'
        }
    });
    const messageTime = document.createElement('p')
    messageTime.innerText = `On: ${getDate(today)[0]} @ ${getDate(today)[1]}`;
    const editIt = createButton("editButton", "Edit")
    newMessage.appendChild(editIt);
    newMessage.appendChild(removeIt);
    newMessage.appendChild(messageTime)
    messageList.appendChild(newMessage);
    messageForm.reset();
    messageSection.style.display = 'flex'
    

    editIt.addEventListener('click', (e)=> {
        if (editIt.innerText === "Edit"){
            const editMessage = newMessage.children[1];
            const changeMessage = document.createElement('input');
            changeMessage.type = "text";
            changeMessage.value = editMessage.textContent;
            newMessage.insertBefore(changeMessage, editIt)
            newMessage.removeChild(editMessage);
            editIt.innerText = "Save"
        }else if(editIt.innerText === "Save") {
            const box = newMessage.children[1];
            const span = document.createElement('span')
            span.innerText = box.value
            newMessage.insertBefore(span, editIt)
            newMessage.removeChild(box);
            editIt.innerText = "Edit"
        }
    })
})
/*-----------------------projects-----------------------*/ 
function fetchURL() {
    fetch("https://api.github.com/users/MunirNuristani/repos")
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(error => console.log('error: ',error)) 
}
            
function setProjects(repos) {
    console.log(repos)
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');   
    for (let i = 0; i<repos.length; i++){
        if(repos[i].stargazers_count >=1){
            let project = document.createElement('li')
            let clearName = repos[i].name.split("-");
            let newName = clearName.join(" ").toUpperCase()
            project.innerHTML = `<a href=${repos[i].html_url} target="blank">${newName}</a>
                                <p> Language: ${repos[i].language}</p>`
            projectList.appendChild(project)
        }
    }
}


fetchURL();
