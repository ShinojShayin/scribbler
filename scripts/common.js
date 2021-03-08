// This method helps in initializing modal. Parameters needed to be passed include modalId, 
function initModal(modalId, buttonId, isClass){
  // Get the modal
  var modal = document.getElementById(modalId);
  // Get the <span> element that closes the modal
  var span = modal.getElementsByClassName("close")[0];
  if(isClass){
    var btn = document.getElementsByClassName(buttonId)
    for(var i=0; i < btn.length; i++){
      btn[i].onclick = function() {
        modal.style.display = "block";
      }
    }
  }
  else{
  // Get the button that opens the modal
  var btn = document.getElementById(buttonId);

  // When the user clicks the button, open the modal 
  btn.onclick = function() {
    modal.style.display = "block";
  }
  }


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
}

// Common header code start here
var headerEle = document.getElementsByTagName('header')[0];
headerEle.innerHTML = '<div id="header-left">' +
'<div id="logo-heading">ScriBBler</div>' +
'<div id="logo-sub-heading">Explore, Imagine, Create</div>' +
'</div>' +
'<div id="header-right">' +
'<button id="signupBtn" class="btn-sign mg-rt-15" type="button">Sign Up</button>' +
'<button id="signinBtn" onclick="" class="btn-sign" type="button">Sign In</button>' +
'</div>';
// Common header code end here

// Common Initialization Code Start here
initModal('signupModal','signupBtn');
initModal('signinModal','signinBtn');
document.getElementById('signup_link').onclick = function() {
  document.getElementById('signinModal').style.display = "none";
  document.getElementById('signupModal').style.display = "block";
}
// Common Initialization Code end here



