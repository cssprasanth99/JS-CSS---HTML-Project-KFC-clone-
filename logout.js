let isAuth = localStorage.getItem("isAuth") || "Not Authenticated";

if (isAuth === "Authenticated") {
    let navbar = document.querySelector(".navbar2");
    let div = document.createElement("div");
    let btn = document.createElement("button")
    btn.innerText = "Logout";
    btn.setAttribute("class", "btn btn-danger");
    btn.onclick = function () {
        alert("Logged out successfully");
        localStorage.setItem("isAuth", "Not Authenticated");
        window.location.reload();
    }
    div.append(btn);
    navbar.append(div);


}