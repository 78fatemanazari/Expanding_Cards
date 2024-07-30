const panels = document.querySelectorAll(".panel");

panels.forEach(panel => 
  panel.addEventListener('mousedown', () => {
    removeActiveClasses();
    panel.classList.add('active');
  })
  
)

function removeActiveClasses(){
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}