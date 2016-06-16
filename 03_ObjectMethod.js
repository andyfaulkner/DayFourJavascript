//Create a load event to show the object on screen
document.addEventListener('load',objectCreation(),false);

function objectCreation(){
//Create the object then print to the screen
var person = {
    firstName:"Andrew",
    lastName:"Faulkner",
    fullName:function() {
        return this.firstName + " " + this.lastName;}
};

document.getElementById("output").innerHTML = "My name is " + person.fullName();
    
}