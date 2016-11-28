// OPTIONAL IMG POSITIONING
//
// function detectMobile() {
//   $window.innerWidth() <= 768;
// }
//
// function imgPosCheck(){
//   if (detectMobile() == true) {
//     img1Pos = 170;
//     img2Pos = 600;
//     img3Pos = 1040;
//   } else {
//     img1Pos = 220;
//     img2Pos = 620;
//     img3Pos = 1060;
//   }
// }
//

var $window = $(window);

$(document).ready(function() {

  $window.scroll(function () {

    /* CURRENT WINDOW POSITIONING */
    var position = $window.scrollTop();

    /* CURRENT ELEMENT POSITIONING */
    var headPosition = $('#email-head').position();
    var headHeight = $('#email-head').height();

    /* ANIMATION CONDITIONAL */
    if (position > (headPosition.top - headHeight - 300)) {
      $('#email-1').addClass('email-slide');
      $('#email-img-1').addClass('img-slide');
    } else {
      $('#email-1').removeClass('email-slide');
      $('#email-img-1').removeClass('img-slide');
    }

    var email1Position = $('#email-1').position();
    var email1Height = $('#email-1').height();

    if (position > (email1Position.top - email1Height + 100)) {
      $('#email-2').addClass('email-slide');
    } else {
      $('#email-2').removeClass('email-slide');
    }

    var email2Position = $('#email-2').position();
    var email2Height = $('#email-2').height();

    if (position > (email2Position.top - email2Height + 100)) {
      $('#email-3').addClass('email-slide');
      $('#email-img-2').addClass('img-slide');
    } else {
      $('#email-3').removeClass('email-slide');
      $('#email-img-2').removeClass('img-slide');
    }

    var email3Position = $('#email-3').position();
    var email3Height = $('#email-3').height();

    if (position > (email3Position.top - email3Height + 100)) {
      $('#email-4').addClass('email-slide');
    } else {
      $('#email-4').removeClass('email-slide');
    }

    var email4Position = $('#email-4').position();
    var email4Height = $('#email-4').height();

    if (position > (email4Position.top - email4Height + 100)) {
      $('#email-5').addClass('email-slide');
      $('#email-img-3').addClass('img-slide');
    } else {
      $('#email-5').removeClass('email-slide');
      $('#email-img-3').removeClass('img-slide');
    }
  });
});
