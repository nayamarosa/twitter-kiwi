const logout = () => {
    firebase.auth().signOut()
    .then(() => {window.location = "index.html"})
};

document.querySelector("#logout").addEventListener("click", logout);