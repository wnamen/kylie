var $window = $(window);

var email1,
    email2,
    email3,
    email4,
    email5;

var img1,
    img2,
    img3,
    img1Pos = 220,
    img2Pos = 620,
    img3Pos = 1060;

function detectmob() {
   if($window.innerWidth <= 800 && $window.innerHeight <= 600) {
     return true;
   } else {
     return false;
   }
}

function imgPosCheck(){
  if (detectmob() == true) {
    img1Pos = 240;
    img2Pos = 710;
    img3Pos = 1150;
    console.log(img1Pos);
  }
}

$(document).ready(function() {

  $window.on('scroll', webAnimate);
});

function webAnimate() {
  imgPosCheck();

  if ($window.scrollTop() > 350) {
    email1 = (parseInt($('#email-1').css('transform').split(',')[5]))-5;
    img1 = (parseInt($('#email-img-1').css('transform').split(',')[5]))-10;

    console.log(img1Pos);

    if (email1 >= 0) {
      $('#email-1').css("transform", "translateY(" + email1 + "px)");
    };

    if (img1 >= img1Pos) {
      $('#email-img-1').css("transform", "translateY(" + img1 + "px)");
    };
  };

  if ($window.scrollTop() > 600) {
    email2 = (parseInt($('#email-2').css('transform').split(',')[5]))-10;

    if (email2 >= 200) {
      $('#email-2').css("transform", "translateY(" + email2 + "px)");
    };
  };

  if ($window.scrollTop() > 770) {
    email3 = (parseInt($('#email-3').css('transform').split(',')[5]))-5;
    img2 = (parseInt($('#email-img-2').css('transform').split(',')[5]))-10;

    if (email3 >= 440) {
      $('#email-3').css("transform", "translateY(" + email3 + "px)");
    };

    if (img2 >= img2Pos) {
      $('#email-img-2').css("transform", "translateY(" + img2 + "px)");
    };
  };

  if ($window.scrollTop() > 900) {
    email4 = (parseInt($('#email-4').css('transform').split(',')[5]))-5;

    if (email4 >= 635) {
      $('#email-4').css("transform", "translateY(" + email4 + "px)");
    };
  };

  if ($window.scrollTop() > 1200) {
    email5 = (parseInt($('#email-5').css('transform').split(',')[5]))-5;
    img3 = (parseInt($('#email-img-3').css('transform').split(',')[5]))-10;

    if (email5 >= 880) {
      $('#email-5').css("transform", "translateY(" + email5 + "px)");
    };

    if (img3 >= img3Pos) {
      $('#email-img-3').css("transform", "translateY(" + img3 + "px)");
    };
  };
}
