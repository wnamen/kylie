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
    img1 = (parseInt($('#email-img-1').css('transform').split(',')[5]))-10;

    if (email1 > 0) {
      $('#email-1').css("transform", "translateY(" + email1 + "px)");
    };

    if (img1 > -125) {
      $('#email-img-1').css("transform", "translateY(" + img1 + "px)");
    };
  };

  if ($window.scrollTop() > 340) {
    email2 = (parseInt($('#email-2').css('transform').split(',')[5]))-10;

    if (email2 > -445) {
      $('#email-2').css("transform", "translateY(" + email2 + "px)");
    };
  };

  if ($window.scrollTop() > 390) {
    email3 = (parseInt($('#email-3').css('transform').split(',')[5]))-5;
    img2 = (parseInt($('#email-img-2').css('transform').split(',')[5]))-10;

    if (email3 > -560) {
      $('#email-3').css("transform", "translateY(" + email3 + "px)");
    };

    if (img2 > -730) {
      $('#email-img-2').css("transform", "translateY(" + img2 + "px)");
    };
  };

  if ($window.scrollTop() > 430) {
    email4 = (parseInt($('#email-4').css('transform').split(',')[5]))-5;

    if (email4 > -925) {
      $('#email-4').css("transform", "translateY(" + email4 + "px)");
    };
  };

  if ($window.scrollTop() > 480) {
    email5 = (parseInt($('#email-5').css('transform').split(',')[5]))-5;
    img3 = (parseInt($('#email-img-3').css('transform').split(',')[5]))-10;

    if (email5 > -1045) {
      $('#email-5').css("transform", "translateY(" + email5 + "px)");
    };

    if (img3 > -1220) {
      $('#email-img-3').css("transform", "translateY(" + img3 + "px)");
    };
  };
}
