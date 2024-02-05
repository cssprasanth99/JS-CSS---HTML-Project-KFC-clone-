let form = document.getElementById("form");
form.addEventListener("submit", function () {
    getData();
})


var savedDetails = JSON.parse(localStorage.getItem("userDetails")) || [];

function getData() {
    event.preventDefault();
    let userName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("passwordCheck").value;
    var signupConfrim = document.getElementById("signupConfirm");
    var obj = {
        userName,
        email,
        password
    }

    if (obj.userName === "" || obj.email === "" || obj.password === "") {
        alert("Please fill the form");
    }
    else if (password !== repassword) {
        alert("Please check your password");
    }
    else {
        form.innerText = null;
        signupConfrim.innerText = "✅ Signed Up Successfully";
        signupConfrim.style = "font-size: 20px; margin:91px"
    }
    savedDetails.push(obj);
    localStorage.setItem("userDetails", JSON.stringify(savedDetails));
}


