//This event let my code appear after the page (HTML) is loaded 
window.addEventListener('load', (event) => {
  //Challenge #1
  //-----------------------------------------------------------------
  // footer of my portfolio (name and year)
  const today = new Date()
  const thisYear = today.getFullYear()
  const footer = document.querySelector('footer')
  const copyright = document.createElement('p')
  copyright.innerHTML = `Monica ${thisYear} &copy;`
  footer.appendChild(copyright)



   //Challenge #2
   //----------------------------------------------------------------
  // skills section
  const skills = ['JavaScript', 'CSS', 'HTML']
  const skillsSection = document.getElementById('skills')
  const skillList = skillsSection.querySelector('ul')
  // adding and creating the list of skills
  for(i=0; i < skills.length; i++){
  const skill = document.createElement('li')
  skill.innerHTML = skills[i]
  skillList.appendChild(skill)
  }


   //Chanllenge #3
   //----------------------------------------------------------------
  //form code
  const messageForm = document.getElementsByName('leave_message')[0]
  messageForm.addEventListener('submit', (e) => {

   e.preventDefault()

   //Getting time of the message
   const now = new Date();

   //Storing users information
   const name = e.target.name.value
   const email = e.target.email.value
   const message = e.target.message.value
   console.log(`${name} ${email} ${message}`)
   

   //Showing the message
   const messageSection = document.getElementById('messages')
   const messageList = messageSection.querySelector('ul')

  //If the messages are hidden
   if(messageSection.style.display === 'none') {
     messageSection.style.display = 'block'
   }
   //Create new message

   const newMessage = document.createElement ('li') 
   newMessage.classList.add('list_item')
   newMessage.innerHTML = `<div>
   <span class="strong"> ${message}</span>
   <p>${now.toLocaleString()} from: <a href ="mailto: ${email} "> ${name}</a></p>
   </div>`
   
   //Second button (remove button)
   const removeButton = document.createElement('button')
   removeButton.innerText = 'Remove'
   removeButton.type = 'button'

   removeButton.addEventListener('click', (e) => {
       const entry = e.target.parentNode
       const list = entry.parentNode
      //Hidden Message when you click remove button
       if(list <= 1){
         messageSection.style.display = 'none'
       }
      //Remove entry from the list
       entry.remove() 
   })

   newMessage.appendChild(removeButton)
   messageList.appendChild(newMessage)

   messageForm.reset()

  })

  //--------------------------------------------------------------------------------------

  //Fetch API working with my GitHub projects
   fetch('https://api.github.com/users/mnca16/repos')
   .then(response => response.json())
   .then(data => repository(data))
   .catch(error => console.log('The promise failed', error));

   function repository (data) {
      let projectSection = document.getElementById('projects');
      let projectList = projectSection.querySelector('ul');

      for (let i = 0; i < data.length; i++){
         let project = document.createElement('li');
         project.innerHTML = `<a href="${data[i].html_url}" target="_blank">${data[i].name} ${data[i].description} </a>`
         projectList.appendChild(project);
     }
    }

    //Carousel
    //-------------------------------------------------------------------------------------
    
    const track = document.querySelector('.carousel__track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel__button--right');
    const preButton = document.querySelector('.carousel__button--left');
    const dotsNav = document.querySelector('.carousel__nav');
    const dots = Array.from(dotsNav.children);
    
    // Keeping the with and the hight of the carousel slide 

    const slideWidth = slides[0].getBoundingClientRect().width;
    
    //Arrange the slides next to one another
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    }
    //Looping the children of slides 
    slides.forEach(setSlidePosition);


    const moveToSlide = (track, currentSlide, targetSlide) => {
      //move to the slide
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');

    }  

    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove('current-slide');
      targetDot.classList.add('current-slide');
    }

    const hideShowArrows = (slides, preButton, nextButton, targetIndex) => {
      if (targetIndex === 0) {
        preButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden')
      } else if (targetIndex === slides.length -1 ) {
        preButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden')
      } else {
        preButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
      }

    }

    //When I click left, move slides to the left
     preButton.addEventListener('click', e => {
      const currentSlide = track.querySelector('.current-slide')
      const preSlide = currentSlide.previousElementSibling;
      const currentDot = dotsNav.querySelector('.current-slide');
      const pretDot = currentDot.previousElementSibling;
      const preIndex = slides.findIndex(slide => slide === preSlide);

      updateDots(currentDot, pretDot);
      moveToSlide(track, currentSlide, preSlide);
      hideShowArrows(slides, preButton, nextButton, preIndex);

     })



    //When I click right, move slides to the right
    nextButton.addEventListener('click', e => {
      const currentSlide = track.querySelector('.current-slide')
      const nextSlide = currentSlide.nextElementSibling;
      const currentDot = dotsNav.querySelector('.current-slide');
      const nextDot = currentDot.nextElementSibling;
      const nextIndex = slides.findIndex(slide => slide === nextSlide);

      moveToSlide(track, currentSlide, nextSlide);
      updateDots(currentDot, nextDot);
      hideShowArrows(slides, preButton, nextButton, nextIndex);
    })


    //When I cick the nav indicator, move to that slide

    dotsNav.addEventListener('click', e => {
      //what indicator was clicked on?
      const targetDot = e.target.closest('button');

      if (!targetDot) return;

      const currentSlide = track.querySelector('.current-slide');
      const currentDot = dotsNav.querySelector('.current-slide');
      const targetIndex = dots.findIndex(dot => dot === targetDot);
      const targetSlide = slides[targetIndex];

      moveToSlide(track, currentSlide, targetSlide);
      updateDots(currentDot, targetDot);
      hideShowArrows(slides, preButton, nextButton, targetIndex);
     
    })
  
 
  })


 