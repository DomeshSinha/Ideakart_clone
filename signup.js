document.querySelector("button").addEventListener("click", signup);

var userData = JSON.parse(localStorage.getItem("UserDataBase")) || [];

function signup() { 
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var mobile = document.querySelector("#mobile").value;
    var password = document.querySelector("#password").value;

    var userObj = {
        userName:name,
        userEmail:email,
        userMobile:mobile,
        userPassword:password,
    };
      
    userData.push(userObj);
    console.log(userData);
    localStorage.setItem("UserDataBase", JSON.stringify(userData));
}

