var integrations = ['zendesk', 'google', 'twitter', 'sap', 'salesforce'];

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

var running = true;

$(document).ready(function() {
  
  animateIntegrations();

  window.onresize = function() {
    if (!running) {
      animateIntegrations();
    }
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

function animateIntegrations(position) {
  var current = position || 'zendesk',
      currentImg = integrationImgs[current],
      currentText = integrationTexts[current],
      next = integrations[integrations.indexOf(current) + 1];

  if ($(document).width() <= 600) {
    running = true;

    setTimeout(function() {
      $('#integrations-view').children().fadeOut("slow");

      setTimeout(function() {
        $('#view-img').attr('src', currentImg);
        $('#view-text').html(currentText);
        $('#integrations-view').children().fadeIn("slow")

        return animateIntegrations(next)
      }, 700)

    }, 3000)
  } else {
    running = false;
  }
}
