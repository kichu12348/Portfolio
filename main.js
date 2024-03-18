// main.js
const navLinks = document.querySelectorAll('nav a');
const viewProjects = document.querySelector("#viewProjects");
var rick = true;

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

viewProjects.addEventListener('click', e => {
  e.preventDefault();
  const targetId = e.currentTarget.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth'
    });
  }
});

const form = document.querySelector(".contactFrm");

form.addEventListener('submit', e => {
  e.preventDefault();
  form.reset();
  const song = new Audio('./assets/audio/rolls.mp3');
  if(rick){
    song.play();
    rick = false;
}
    
    setTimeout(() => {
      song.pause();
        rick = true;
    }, 20000);
});