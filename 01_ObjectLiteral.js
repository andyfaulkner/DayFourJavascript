
//Create a load event to show the object on screen
document.addEventListener('load',objectCreation(),false);

function objectCreation(){
//Create the object then print to the screen
var car = {
    manufacturer:"Fiat",
    model:500,
    colour:"red"};

document.getElementById("output").innerHTML = "My car is a " + car.manufacturer + " the model is a " + car.model + " and it's colour is " + car.colour;
    
}