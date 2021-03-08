// Onclick of edit button makes post title and body editable
document.getElementById('editPost').onclick = function(){
    var titleEle =  document.getElementById('title-text');
    var postTextEle = document.getElementById('post-text');
    titleEle.setAttribute('contentEditable', 'true');
    titleEle.className = 'editable';
    titleEle.focus();
    postTextEle.setAttribute('contentEditable', 'true');
    postTextEle.className = 'post-body editable';
    this.style.display = "none";
    document.getElementById('savePost').style.display = "block";
}

// Onclick of save button makes post title and body non-editable and save any changes
document.getElementById('savePost').onclick = function(){
    this.style.display = "none";
    document.getElementById('editPost').style.display = "block";
    var titleEle =  document.getElementById('title-text');
    var postTextEle = document.getElementById('post-text');
    titleEle.removeAttribute('contentEditable');
    titleEle.className = '';
    postTextEle.removeAttribute('contentEditable');
    postTextEle.className = 'post-body';
}

// Onclick of like button it will change respective text and increment the counter
document.getElementById('likeBtn').onclick = function(){
    var likeCount = this.getAttribute('like-count');
    if(!likeCount)likeCount=1;
    else{
        likeCount = parseInt(likeCount) + 1;
    }
    this.setAttribute('like-count',likeCount);

    if(likeCount==1){
        document.getElementById('like-text').innerHTML = "Liked";
        document.getElementById('liked-people').innerHTML = "1 person likes this!";
    }
    else{
        document.getElementById('liked-people').innerHTML = likeCount + " people likes this!";
    }
}

// Onclick of submit button it will add the comment to All comments section
document.getElementById('submit-comment').onclick = function(){
    var commentBox = document.getElementById('commentbox');
    var comment = commentBox.value
    if(comment.trim()!=""){
        var comEle = document.createElement("div");
        comEle.className = "user-comment";
        comEle.innerHTML = comment;
        document.getElementById('user-comments-section').prepend(comEle);
        commentBox.value = "";
    }
}
