const hideMenu = document.getElementById('hideMenu');
const showMenu = document.getElementById('showMenu');
const navLinks = document.getElementById('nav-links')
const footer = document.querySelector('footer');
const copyright =document.createElement('p')
const skillsSection = document.getElementById('skills');
const skillList = skillsSection.querySelector('ul');
const topButton = document.getElementById('button');
const menuButtons = document.querySelectorAll(".navLinks a")
const menuIcons = document.querySelectorAll(".navLinks i")
const footerIcons = document.querySelectorAll(".footer li")
let skills = ['IT Support','JavaScript', 'HTML',
             'CSS', 'Security Management' , 'Crisis Management']

let today = new Date();
let thisYear = today.getFullYear();

/*-----time setting----*/
function getDate () {
    let today = new Date()
    const months = ['January','February', 'March','April', 'May', 'June', 'July', 
                    'August','September', 'October', 'November', 'December']
    let thisYear =today.getFullYear()
    let thisMonth = today.getMonth()
    let thisDay = today.getDate()
    let thisHour=today.getHours()
    let thisMinute = today.getMinutes()
    let AMPM;
    thisHour>12? AMPM = "PM": AMPM ="AM"
    return [months[thisMonth]+ " "+ thisDay+ ", "+ thisYear, properTimeH(thisHour) +':'+properTimeM(thisMinute)+ " "+ AMPM]    
}

/*---- menu toggle for mobile screen----*/
const navSlide=() =>{
    const mobileMenu = document.querySelector('.mobileMenu');
    const navLinks = document.querySelector('.navLinks');
    const navLinksList = document.querySelectorAll('.navLinks li')
    const newIcons = document.createElement('ul')
    for(let i =0; i< footerIcons.length; i++){
       
        let newFooterIcon = footerIcons[i].cloneNode(true)
        newIcons.appendChild(newFooterIcon)
    }
    newIcons.classList.add('menuIcons')
    navLinks.appendChild(newIcons)
    const newIconsList = document.querySelectorAll('.menuIcons li')
    
    //toggle menu
    mobileMenu.addEventListener('click', ()=>{
        navLinks.classList.toggle("nav-active")
        newIcons.classList.toggle('nav-active')
    //animate items
        each(navLinksList)
        each(newIconsList)
        //menu icon change
        mobileMenu. classList.toggle('toggle')
    })
}



/* ----scroll to top button----*/
window.onscroll = function() {scrollFunction()}
const scrollFunction = () =>{
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700){
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none" 
    } 
}

/*-----set footer----*/
copyright.innerHTML=("Munir Nuristani &copy; " + thisYear)
footer.appendChild(copyright)

/*------ display skills ------*/
function addSkills(arr) {
    for(let i = 0; i < arr.length; i++){
        let skill = document.createElement('li');
        skill.innerHTML= (arr[i]);
        skillList.appendChild(skill);  
    }
}


/*------------------------ Leave Message--------------------------- */
const messageForm = document.getElementById('leave_message');
function createButton(buttonName, buttonContent,cla){
    buttonName = document.createElement('button');
    buttonName.innerText = buttonContent;
    buttonName.classList.add(cla);
    buttonName.type = 'button'
    return buttonName
}
messageForm.addEventListener('submit', (event)=>{
    event.preventDefault()
    const{name, email, message } = event.target;
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    const newMessage = document.createElement('li');
    newMessage.innerHTML = `<span>${message.value}</span>`
    const removeIt = createButton("removeButton","Remove","removeButton");
    removeIt.addEventListener('click', (e)=>{
        const entry = removeIt.parentNode;
        localStorage.remove
        entry.remove();
        if(messageList.children.length === 0){
            messageSection.style.display = 'none'
        }
    });
    const messageTime = document.createElement('p')
    messageTime.innerHTML = `${getDate(today)[0]}, ${getDate(today)[1]} From: <a href="mailto:${email.value}">${name.value}</a>  `;
    const editIt = createButton("editButton", "Edit", "editButton")
    newMessage.appendChild(editIt);
    newMessage.appendChild(removeIt);
    newMessage.appendChild(messageTime)
    messageList.appendChild(newMessage);
    messageForm.reset();
    messageSection.style.display = 'flex'
    
    editIt.addEventListener('click', (e)=> {
        if (editIt.innerText === "Edit"){
            const editMessage = newMessage.children[0];
            const changeMessage = document.createElement('input');
            changeMessage.type = "text";
            changeMessage.value = editMessage.textContent;
            newMessage.insertBefore(changeMessage, editIt)
            newMessage.removeChild(editMessage);
            editIt.innerText = "Save"
        }else if(editIt.innerText === "Save") {
            const box = newMessage.children[0];
            const span = document.createElement('span')
            span.innerText = box.value
            newMessage.insertBefore(span, editIt)
            newMessage.removeChild(box);
            editIt.innerText = "Edit"
        }
    })
})

function addToLocalStorage(i, input){
    return localStorage.setItem("message"+i, JSON.stringify(input) )
}


topButton.addEventListener('click', ()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})
/*-----------------------projects-----------------------*/ 
function fetchURL() {
    fetch("https://api.github.com/users/MunirNuristani/repos")
        .then(res => {
            if(!res.ok){
                throw new Error(`${res.status}`) 
            }
                return res.json() 
        })
        .then(data => setProjects(data))
        .catch(error =>{ 
            errorMessage();
        }) 
}
            
function setProjects(repos) {            
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul');   
    for (let i = 0; i<repos.length; i++){
        if(repos[i].stargazers_count >=1){
            let project = document.createElement('li')
            let clearName = repos[i].name.split("-");
            let newName = clearName.join(" ").toUpperCase()
            project.innerHTML = `<a href=${repos[i].html_url} target="blank">${newName}</a>`
            projectList.appendChild(project)
        }
    }
}
function app(){
    fetchURL();
    addSkills(skills);
    navSlide();
}
app()

/*---------helper functions--------*/
function errorMessage() {
    const projectSection = document.getElementById('projects');
    const projectList = projectSection.querySelector('ul'); 
    let err = document.createElement('li')
    err.innerText = "Something Went Wrong, Please Try Again Later"
    projectList.appendChild(err)
}
function each(el){
    el.forEach((link, index) =>{
        if (link.style.animation){
            link.style.animation=""
        }else{
            link.style.animation =`navLinksFade 0.5s ease forwards ${index/5 + 0.3}s`
        }
    });
}
function properTimeH(hour){
    if(hour>12 ){
        newHour = hour-12
        if(newHour < 10){
            let paddedTime =newHour.toString().padStart(2,"0")
            return paddedTime;
        } 
    } else if( hour == 0){
        return newhour = 12
    }
    return hour
}

function properTimeM(time){
    if(time < 10){
        let paddedTime =time.toString().padStart(2,"0")
        return paddedTime;
    }else{
        return time
    }
}


