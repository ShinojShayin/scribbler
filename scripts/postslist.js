initModal('deleteConfirmModal','fa-trash',true);

var contentText = document.getElementsByClassName("post-text");
for(var i=0; i < contentText.length; i++){
  
    if(i==2){
        contentText[i].innerHTML = contentText[i].innerHTML.substring(0,175)
    }
    else {
        contentText[i].innerHTML = contentText[i].innerHTML.substring(0,180)
    }
}

// Add event delete confirmation Modal start here //
var curPostEle;
var confirmDeleteIco = document.getElementsByClassName('fa-trash')
for(var i=0; i < confirmDeleteIco.length; i++){
  confirmDeleteIco[i].onclick = function() {
  var modal = document.getElementById('deleteConfirmModal');
  modal.style.display = "block";
  curPostEle = this.parentNode.parentNode.parentNode.parentNode;
  }
}
// Add event delete confirmation Modal end here //

// On successful confirmation of delete this will deleteBtn click event will delete the post
var deleteBtn = document.getElementById('deleteBtn');
deleteBtn.onclick = function() {
    curPostEle.remove();
    var modal = document.getElementById('deleteConfirmModal');
    modal.style.display = "none";
}