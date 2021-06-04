let today = new Date()
console.log(today)
let thisYear = today.getFullYear()
console.log(thisYear)
let footer = document.querySelector("footer")
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