const button = document.getElementById("notAvailable");
const hamburger = document.querySelector(".hamburger");
const offScreen = document.querySelector(".burger-menu");
const projects = document.querySelectorAll(".project");
const textElement = document.querySelector('.blink');
const typingDuration = 2000; 
const linkedin = document.querySelector(".contact-content2");
const email = document.querySelector(".contact-content1");

email.addEventListener('click', function() {
  const email = 'verdinanmelvin@gmail.com'; 
  const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`;
  window.open(mailtoLink, '_blank');
})

setTimeout(() => {
  textElement.classList.add('finished'); 
}, typingDuration);

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  offScreen.classList.toggle('active');
})

linkedin.addEventListener('click', () => {
  window.open("https://www.linkedin.com/in/melvin-verdinan-mulia/", "_blank");
})

button.addEventListener('click', () => {
  alert("Unavailable Link");
});

projects.forEach((project) => {
  const projectInner = project.querySelector('.project-inner');

  project.addEventListener('click', () => {
    projects.forEach(p => p.classList.remove('active'));
    project.classList.add('active');
  });

  projectInner.addEventListener('click', (event) => {
    event.stopPropagation();
    project.classList.remove('active');
  });
});