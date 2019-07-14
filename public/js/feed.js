let post = document.querySelector("#post");
let postList = document.querySelector("#post-list");
let btn = document.querySelector("#btn");

const btnEnable = (btn) => {
    btn.disabled = false;
}

const btnDesable = (btn) => {
    btn.disabled = true;
}

const kiwiPost = (post, postList, btn) => {
    btn.addEventListener('click', (event) => {
        event.preventDefault();

        let postSpace = document.createElement('section');
        postList.insertBefore(postSpace, postList.firstChild);

        let postItem = document.createElement('article');
        postItem.innerHTML = post.value;
        postSpace.appendChild(postItem);
        
        let timeElement = document.createElement('p');
        let postTime = moment().format('llll');
        timeElement.innerHTML = postTime;
        postSpace.appendChild(timeElement);

        post.value = '';
        post.focus();
        btnDesable(btn);
        changeTitle();
    });
}

const changeTitle = () => {
    let title = document.getElementById('title');
    title.innerHTML = 'POSTS RECENTES :)'
}

const typing = (post) => {
    let charMax = 140;
    let charCounter = document.getElementById("char-counter");

    post.addEventListener('keyup', () => {
        let postValue = post.value;
        let charReduce = charMax - postValue.length;
        charCounter.innerHTML = charReduce;
        btnEnable(btn);

        if((postValue.length > 140) || (postValue.length === 0)){
            btnDesable(btn);
        } else if(postValue.length > 130){
            charCounter.style.color = 'rgb(190, 26, 26)';
        } else if ((postValue.length > 120) && (postValue.length < 130)){
            charCounter.style.color = 'rgb(190, 174, 26)';
        } else if (postValue.length < 120){
            charCounter.style.color = 'rgb(60, 61, 61)';
        }

    });
}

const textareaResize = (post) => {
    post.addEventListener('keydown', () => {
        post.style.height = 'auto';
        post.style.height = post.scrollHeight + 'px';
    });
}


kiwiPost(post, postList, btn)
typing(post)
textareaResize(post)