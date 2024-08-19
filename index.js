


const displayResult = document.getElementById("selectedInput");
const buttons = document.querySelectorAll(".rating");


function changeColor(event){
    buttons.forEach(button => {
        button.style.backgroundColor = "hsl(213, 19%, 11%)";
        button.style.color = "white";
});
    event.target.style.backgroundColor = "white";
    event.target.style.color = "black";


    const selectedRating = event.target.textContent;
    localStorage.setItem('selectedRating', selectedRating);

}
    buttons.forEach(button => {
        button.addEventListener("click", changeColor);
     
});
  





