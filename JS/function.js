
function clickFunction(name, age){
    // if(name && age > 18){
    //     alert("Hello, " + name + "! You are " + age + " years old. And you are eligible to vote.");
    // } else {
    //     alert("Ahh!!, " + name + "! You are not eligible to vote.");
    // }

    // if(name || age > 18){
    //     alert("Hello, " + name + "! You are " + age + " years old. And you are a citizen.");
    // } else {
    //     alert("Ahh!!, " + name + "! You are not a citizen.");
    // } 

    let x;

    // x = x ?? age;
    // console.log(x);


    // name = name &&= age;
    // console.log(name);

    // x = x ||= age;
    // console.log(x);

    x = x ??= age;
    console.log(x);
}