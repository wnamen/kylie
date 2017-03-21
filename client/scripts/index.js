$(document).ready(function() {

  // $(".welcome-btn").click(welcomeRedirect);
  $('.modal').modal();
  $('select').material_select();
});

function welcomeRedirect(){
  location.href = "./welcome.html";
}
