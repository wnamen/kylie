var integrations = ['zendesk', 'google', 'twitter', 'sap', 'salesforce'];

var integrationImgs = {
  zendesk: "../images/zendesk.png",
  google: "../images/google.png",
  twitter: "../images/twitter.png",
  sap: "../images/sap.png",
  salesforce: "../images/salesforce.svg"
};

// var integrationTexts = {
//   zendesk: "With Kylie, empower your help desk with automated replies, tagging, and all the wonderful routing your heart desires.",
//   google: "With Kylie, empower your help desk with automated replies, tagging, and all the wonderful routing your heart desires.",
//   twitter: "With Kylie, empower your help desk with automated replies, tagging, and all the wonderful routing your heart desires.",
//   sap: "With Kylie, empower your help desk with automated replies, tagging, and all the wonderful routing your heart desires.",
//   salesforce: "With Kylie, empower your help desk with automated replies, tagging, and all the wonderful routing your heart desires."
// };

var isOnAutoPlay;

$(document).ready(function() {

  animateIntegrations();

  window.onresize = function() {
    if ((!isOnAutoPlay) && (isSmall())) {
      animateIntegrations();
    }
  }

  $('.nav-link').click(scrollToAnchor);

  $('.modal').modal();
  $('select').material_select();
  $('select[required]').css({
    display: 'inline',
    position: 'absolute',
    float: 'left',
    padding: 0,
    margin: 0,
    border: '1px solid rgba(255,255,255,0)',
    height: 0,
    width: 0,
    top: '2em',
    left: '3em'
  });

  // $('#integrations-bar img').click(handleIntegrationsClick)
});

// function handleIntegrationsClick() {
//   $('#integrations-view').children().fadeOut("slow");
//
//   var newView = $(this).data('view');
//   var newImg = integrationImgs[newView];
//   var newText = integrationTexts[newView];
//
//   setTimeout(function() {
//     $('#view-img').attr('src', newImg);
//     $('#view-text').html(newText);
//     $('#integrations-view').children().fadeIn("slow")
//   }, 700);
// }

// THESE FUNCTIONS HANDLE THE INTEGRATION ANIMATION ON MOBILE

function animateIntegrations(position) {
  var current = position || 'zendesk',
      currentImg = integrationImgs[current],
      // currentText = integrationTexts[current],
      next = integrations[integrations.indexOf(current) + 1];

  if (isSmall()) {
    isOnAutoPlay = true;

    setTimeout(function() {
      $('#integrations-view').children().fadeOut("slow");

      setTimeout(function() {
        $('#view-img').attr('src', currentImg);
        // $('#view-text').html(currentText);
        $('#integrations-view').children().fadeIn("slow")

        return animateIntegrations(next)
      }, 700)

    }, 3000)
  } else {
    isOnAutoPlay = false;
  }
}

function isSmall() {
  if ($(window).width() <= 600) {
    return true;
  }
  return false;
}

// THIS METHOD HANDLES THE SCROLLING ANIMATION

function scrollToAnchor() {
    var destination = $(this).data('link');
    var aTag = $("a[name='"+ destination +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}
