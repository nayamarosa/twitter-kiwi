
const login = (event) => {
    event.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    loginUserWithFirebase(email, password);
    
    // window.location = "../feed.html?id=" + userId;
}

document.querySelector("#login").addEventListener("click", login);

const loginUserWithFirebase = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((response) => {
        let userId = response.user.uid;
        redirectPosts(userId);
    })
    .catch((error) => {
        handleError(error);
    });
}

const redirectPosts = (userId) => {
    window.location = "../feed.html?id=" + userId;
}

const handleError = (error) => {
    let errorMessage = error.message;
    alert(errorMessage);
}