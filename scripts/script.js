let toggleButtons = document.querySelectorAll(".toggleButton");
let skillsContents = document.querySelectorAll(".skillsContent");


skillsContents.forEach(content => {
  content.style.display = "none";
});


toggleButtons.forEach((button, index) => {
  button.addEventListener("click", function() {
    if (skillsContents[index].style.display === "none") {
      skillsContents[index].style.display = "block";
      button.textContent = "Hidden"; 
    } else {
      skillsContents[index].style.display = "none";
      button.textContent = "Expand"; 
    }
  });
});