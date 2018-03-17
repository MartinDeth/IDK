console.log("Script OK!");
// Selectors

let submit = document.getElementById("formSubmit");
let nameInput = document.getElementById("formName");
let lastNameInput = document.getElementById("formLastName");
let storyInput = document.getElementById("formStory");
let ageInput = document.getElementById("formAge");
let inputs = document.getElementsByClassName("formInput");
let outputs = document.getElementsByClassName("output");

// Global Varaibles and classes

class User{
    constructor(name, lastname, age, story){
        this.Name = name;
        this.LastName = lastname;
        this.Age = age;
        this.Story = story;
    }
}

let users = [];

// Listeners

submit.addEventListener("click", function(e){
    for(let i = 0; i < outputs.length; i++){
        outputs[i].innerHTML = "";
    }
    console.log("Button Event Listener OK!");
    e.preventDefault();
    let user = new User();
    user.Name = nameInput.value;
    user.LastName = lastNameInput.value;
    user.Age = ageInput.value;
    user.Story = storyInput.value;
    console.log(user);
    users.push(user);
    document.getElementById("nameOutput").innerHTML += user.Name;
    document.getElementById("lastNameOutput").innerHTML += user.LastName;
    document.getElementById("ageOutput").innerHTML += user.Age;
    document.getElementById("storyOutput").innerHTML += user.Story;

    for(let i = 0; i < inputs.length; i++){
        inputs[i].value = "";
    }
});

document.getElementById("showUsers").addEventListener("click", function(){
    users.forEach(x => console.log(`${x.Name} ${x.LastName} is in the database!`));
});
