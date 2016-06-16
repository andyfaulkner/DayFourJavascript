//Create a load event to show the object on screen
document.addEventListener('load',objectCreation(),false);

function objectCreation(){
//Create the object then print to the screen
function person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

var andyF = new person("Andy", "Faulkner");

document.getElementById("output").innerHTML = "My name is " + andyF.fullName();
}