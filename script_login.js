var savedDetails = JSON.parse(localStorage.getItem("userDetails")) || {};
console.log("savedDetails", savedDetails);

let form = document.getElementById("form");
form.addEventListener("submit", function () {
    getData();
})

var currentDetailsArr = [];

function getData() {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("passwordCheck").value;
    let isValid = false;
    let name = '';
    var currentDetails = {
        name,
        email,
        password,
        isValid
    };

    currentDetailsArr.push(currentDetails);

    console.log("currentDetails", currentDetails);
    savedDetails.forEach(function (ele) {
        var userName = document.getElementById("nameDisplay");
        var goMenu = document.getElementById("gotoMenu");
        var menuPage = document.getElementById("menuPage");
        if (currentDetails.email === ele.email && currentDetails.password === ele.password) {
            localStorage.setItem("isAuth", "Authenticated");
            alert("Login Success");
            currentDetails.isValid = true;
            currentDetails.name = ele.userName;
            userName.innerText = ele.userName;
            userName.style = "padding-top: 8px;"
            goMenu.innerText = "Logged In successfully, Now you can go to"
            menuPage.innerHTML = "Menu"
            localStorage.setItem("current-details", JSON.stringify(currentDetailsArr));
            return;
        }
    })
    if (currentDetails.isValid === false) {
        alert("wrong credentials");
    }
}
console.log(currentDetailsArr);


let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";

window.onload = function () {

    if (isAuth === "Authenticated") {
        var curentUser = JSON.parse(localStorage.getItem("current-details"));
        console.log("currentDetails", curentUser);
        var userName = document.getElementById("nameDisplay");
        userName.innerText = curentUser[0].name;
        userName.style = "padding-top: 8px;"
    }
    // else {
    //     alert("Please Login");
    //     var curentUser = JSON.parse(localStorage.getItem("current-details"));
    //     console.log("currentDetails", curentUser);
    //     var userName = document.getElementById("nameDisplay");
    //     userName.innerText = "";
    //     userName.style = "padding-top: 8px;"
    // }


};
