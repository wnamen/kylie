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
  console.log($(document).width());

  if ($(document).width() <= 600) {
    animateIntegrations();
  }

  $('#integrations-bar img').click(handleIntegrationsClick)

  $(".dropdown-button").dropdown();
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
  }, 700);
}

function animateIntegrations() {

}
