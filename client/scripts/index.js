var integrationImgs = {
  zendesk: "../images/zendesk.svg",
  google: "../images/google.png",
  twitter: "../images/twitter.png",
  sap: "../images/sap.png",
  salesforce: "../images/salesforce.svg"
};

var integrationTexts = {
  zendesk: "With Kylie, empower your help desk with automated replies, tagging, and all the wonderful routing your heart desires.",
  google: "With Kylie, empower your help desk with automated replies, tagging, and all the wonderful routing your heart desires.",
  twitter: "With Kylie, empower your help desk with automated replies, tagging, and all the wonderful routing your heart desires.",
  sap: "With Kylie, empower your help desk with automated replies, tagging, and all the wonderful routing your heart desires.",
  salesforce: "With Kylie, empower your help desk with automated replies, tagging, and all the wonderful routing your heart desires."
};

$(document).ready(function() {
  $('#integrations-bar img').click(handleIntegrationsClick)
  // $('#integrations-bar div').click(handleIntegrationsDivClick)

  // $(".welcome-btn").click(welcomeRedirect);
  $('.modal').modal();
  $('select').material_select();
});

function welcomeRedirect(){
  location.href = "./welcome.html";
}

function handleIntegrationsClick() {
  $('#integrations-view').children().fadeOut("slow");

  var newView = $(this).data('view');
  var newImg = integrationImgs[newView];
  var newText = integrationTexts[newView];

  setTimeout(function() {
    $('#view-img').attr('src', newImg);
    $('#view-text').html(newText);
    $('#integrations-view').children().fadeIn("slow")
  }, 1000);
}
// 
// function handleIntegrationsDivClick() {
//   $('#integrations-view').children().fadeOut("slow");
//
//   var newView = $(this).data('view');
//   var newImg = '<div><span>&#43;</span><p>Integrate anywhere</p></div>';
//   var newText = integrationTexts[newView];
//
//   setTimeout(function() {
//     $('#view-img').attr('src', '');
//     $('#view-img').html(newImg);
//     $('#view-text').html(newText);
//     $('#integrations-view').children().fadeIn("slow")
//   }, 1000);
// }
