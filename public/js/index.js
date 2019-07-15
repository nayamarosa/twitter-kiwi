const showRegister = () => {
    document.querySelector("#login-section").classList.add("hidden");
    document.querySelector("#register-section").classList.remove("hidden");
}

const showLogin = () => {
    document.querySelector("#register-section").classList.add("hidden");
    document.querySelector("#login-section").classList.remove("hidden");
}

document.querySelector("#btn-register").addEventListener("click", showRegister);
document.querySelector("#btn-login").addEventListener("click", showLogin);