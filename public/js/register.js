const database = firebase.database();

const register = (event) => {
    event.preventDefault();
    let name = document.querySelector("#register-name").value;
    let email = document.querySelector("#register-email").value;
    let password = document.querySelector("#register-password").value;
    createUserWithFirebase(name, email, password);
}

document.querySelector("#register").addEventListener("click", register);

const createUserWithFirebase = (name, email, password) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((response) => {
        let userId = response.user.uid;
        addUserToDatabase(userId, name, email);
        redirectPosts(userId);
    })
    .catch((error) => {
        handleError(error);
    });
}

const addUserToDatabase = (id, name, email) => {
    database.ref("users/" + id).set({
        name: name,
        mail: email
    });
}

// const handleError = (error) => {
//     var errorMessage = error.message;
//     alert(errorMessage);
// }

// const redirectPosts = (userId) => {
//     window.location = "../feed.html?id=" + userId;
// }