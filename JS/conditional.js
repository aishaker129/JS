function clickFunction(name, age){
    // if(age < 18){
    //     alert("Sorry " + name + ", you are not old enough to enter. You can come back in " + (18 - age) + " years.");
    // } else {
    //     alert("Welcome " + name + "!");
    // }

    // turnary operator

    age >= 18 ? alert(name + ", you are adult") : alert(name + ", you are a child");
}