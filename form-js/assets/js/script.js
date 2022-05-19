let myForum = document.getElementById("myForm");
let firstName = document.getElementById("first-name-input");
let lastName = document.getElementById("last-name-input");
let email = document.getElementById("email-input");
let age = document.getElementById("age-input");
let datas = document.getElementById("datas");
let myBtn = document.getElementById("btn");
let firstNameText = document.getElementById("first-name-span");
let lastNameText = document.getElementById("last-name-span");
let text = document.getElementById("text");

firstNameText.style.color = "red";
lastNameText.style.color = "red";
text.style.color = "red";

myBtn.addEventListener('click', ()=> {
    if(firstName.value.length < 3){
        firstNameText.innerText = "you must enter at least 3 characters";
    }
    else if(lastName.value.length < 3){
        lastNameText.innerText = "you must enter at least 3 characters";
    }
    else{
        if(email.value == "" || age.value == ""){
            text.innerText = "you must fill all blanks!!!"
        }
        else{
            myForum.remove();
        datas.innerText += `First name : ${firstName.value}\nLast Name : ${lastName.value}\nEmail : ${email.value}\nAge : ${age.value}`;
        }
    }
})