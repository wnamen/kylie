var $window = $(window);
var $animation_elements = $('.emails');

var email1,
    email2,
    email3,
    email4,
    email5;

var img1,
    img2,
    img3;

$(document).ready(function() {
  $window.on('scroll', emailAnimate);
});

function emailAnimate() {

  if ($window.scrollTop() > 300) {
    email1 = (parseInt($('#email-1').css('transform').split(',')[5]))-5;
    email2 = (parseInt($('#email-2').css('transform').split(',')[5]))-10;
    email3 = (parseInt($('#email-3').css('transform').split(',')[5]))-10;
    email4 = (parseInt($('#email-4').css('transform').split(',')[5]))-10;
    email5 = (parseInt($('#email-5').css('transform').split(',')[5]))-10;

    img1 = (parseInt($('#email-img-1').css('transform').split(',')[5]))-10;
    img2 = (parseInt($('#email-img-2').css('transform').split(',')[5]))-10;
    img3 = (parseInt($('#email-img-3').css('transform').split(',')[5]))-10;

    if (email1 > 0) {
      $('#email-1').css("transform", "translateY(" + email1 + "px)");
    };

    if (img1 > -125) {
      $('#email-img-1').css("transform", "translateY(" + img1 + "px)");
    };

    if (email2 > -378) {
      $('#email-2').css("transform", "translateY(" + email2 + "px)");
    };

    if (email3 > -465) {
      $('#email-3').css("transform", "translateY(" + email3 + "px)");
    };

    if (img2 > -635) {
      $('#email-img-2').css("transform", "translateY(" + img2 + "px)");
    };

    if (email4 > -770) {
      $('#email-4').css("transform", "translateY(" + email4 + "px)");
    };

    if (email5 > -860) {
      $('#email-5').css("transform", "translateY(" + email5 + "px)");
    };

    if (img3 > -1025) {
      $('#email-img-3').css("transform", "translateY(" + img3 + "px)");
    };
  };
}
