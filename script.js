let post = document.getElementById("post");
let postList = document.getElementById("post-list");
let btn = document.getElementById("btn");

function btnEnable(btn){
    btn.disabled = false;
}

function btnDesable(btn){
    btn.disabled = true;
}

function kiwiPost(post, postList, btn){
    btn.addEventListener('click', function(event){
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

function changeTitle(){
    let title = document.getElementById('title');
    title.innerHTML = 'POSTS RECENTES :)'
}

function typing(post){
    let charMax = 140;
    let charCounter = document.getElementById("char-counter");

    post.addEventListener('keyup', function(){
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

function textareaResize(post){
    post.addEventListener('keydown', function(){
        post.style.height = 'auto';
        post.style.height = post.scrollHeight + 'px';
    });
}


kiwiPost(post, postList, btn)
typing(post)
textareaResize(post)