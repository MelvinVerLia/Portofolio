const button = document.getElementById("notAvailable");
const hamburger = document.querySelector(".hamburger");
const offScreen = document.querySelector(".burger-menu");
const projects = document.querySelectorAll(".project");

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  offScreen.classList.toggle('active');
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