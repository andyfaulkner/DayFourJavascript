//Create a load event to show the object on screen
document.addEventListener('load',objectCreation(),false);

function objectCreation(){
//Create the object then print to the screen
var person = {
    firstName:"Andrew",
    lastName:"Faulkner",
    address:{
        houseAddress:"6 Salween House",
        postcode:"N16 9DR",
    },
    fullName:function() {
        return this.firstName + " " + this.lastName;}
};

document.getElementById("output").innerHTML = "My name is " + person.fullName() + " and I live at " + person.address.houseAddress + ", " + person.address.postcode;
    
}