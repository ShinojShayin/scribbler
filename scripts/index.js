initModal('signupModal','signupBtn');
initModal('signinModal','signinBtn');

document.getElementById('signup_link').onclick = function() {
    document.getElementById('signinModal').style.display = "none";
    document.getElementById('signupModal').style.display = "block";
}

initModal('createPostModal','createPostBtn');