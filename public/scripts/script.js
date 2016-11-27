var $window = $(window);

var email1,
    email2,
    email3,
    email4,
    email5;

var img1,
    img2,
    img3,
    img1Pos,
    img2Pos,
    img3Pos;

var emailSpeed = 5,
    emailImageSpeed = 10;

function detectMobile() {
  $window.innerWidth() <= 768;
}

function imgPosCheck(){
  if (detectMobile() == true) {
    img1Pos = 170;
    img2Pos = 600;
    img3Pos = 1040;
  } else {
    img1Pos = 220;
    img2Pos = 620;
    img3Pos = 1060;
  }
}

$(document).ready(function() {

  position = $window.scrollTop();

  $window.scroll(function () {

    var scroll = $window.scrollTop();

    direction = (scroll > position) ? 'down' : ((scroll === position) ? 'none' : 'up');

    if (direction === 'down') {
      $window.on('scroll', upAnimate);
    } else {
      $window.on('scroll', downAnimate);
    }

    position = scroll;
  });
});

function upAnimate() {

  imgPosCheck();
  if ($window.scrollTop() > 350) {
    email1 = (parseInt($('#email-1').css('transform').split(',')[5]))-emailSpeed;
    img1 = (parseInt($('#email-img-1').css('transform').split(',')[5]))-emailImageSpeed;

    if (email1 >= 0) {
      $('#email-1').css("transform", "translateY(" + email1 + "px)");
    };

    if (img1 >= img1Pos) {
      $('#email-img-1').css("transform", "translateY(" + img1 + "px)");
    };
  };

  if ($window.scrollTop() > 600) {
    email2 = (parseInt($('#email-2').css('transform').split(',')[5]))-emailSpeed;

    if (email2 >= 200) {
      $('#email-2').css("transform", "translateY(" + email2 + "px)");
    };
  };

  if ($window.scrollTop() > 770) {
    email3 = (parseInt($('#email-3').css('transform').split(',')[5]))-emailSpeed;
    img2 = (parseInt($('#email-img-2').css('transform').split(',')[5]))-emailImageSpeed;

    if (email3 >= 440) {
      $('#email-3').css("transform", "translateY(" + email3 + "px)");
    };

    if (img2 >= img2Pos) {
      $('#email-img-2').css("transform", "translateY(" + img2 + "px)");
    };
  };

  if ($window.scrollTop() > 900) {
    email4 = (parseInt($('#email-4').css('transform').split(',')[5]))-emailSpeed;

    if (email4 >= 635) {
      $('#email-4').css("transform", "translateY(" + email4 + "px)");
    };
  };

  if ($window.scrollTop() > 1400) {
    email5 = (parseInt($('#email-5').css('transform').split(',')[5]))-emailSpeed;
    img3 = (parseInt($('#email-img-3').css('transform').split(',')[5]))-emailImageSpeed;

    if (email5 >= 880) {
      $('#email-5').css("transform", "translateY(" + email5 + "px)");
    };

    if (img3 >= img3Pos) {
      $('#email-img-3').css("transform", "translateY(" + img3 + "px)");
    };
  };
}

function downAnimate() {

  var currentPos = $window.scrollTop();

  imgPosCheck();
  if ((currentPos > 350) && (currentPos < 1400)) {
    email1 = (parseInt($('#email-1').css('transform').split(',')[5]))+emailSpeed;
    img1 = (parseInt($('#email-img-1').css('transform').split(',')[5]))+emailImageSpeed;

    if (email1 <= 200) {
      $('#email-1').css("transform", "translateY(" + email1 + "px)");
    };

    if (img1 <= 650) {
      $('#email-img-1').css("transform", "translateY(" + img1 + "px)");
    };
  };

  if ((currentPos > 600) && (currentPos < 1400)) {
    email2 = (parseInt($('#email-2').css('transform').split(',')[5]))+emailSpeed;

    if (email2 <= 600) {
      $('#email-2').css("transform", "translateY(" + email2 + "px)");
    };
  };

  if ((currentPos > 770) && (currentPos < 1400)) {
    email3 = (parseInt($('#email-3').css('transform').split(',')[5]))+emailSpeed;
    img2 = (parseInt($('#email-img-2').css('transform').split(',')[5]))+emailImageSpeed;

    if (email3 <= 800) {
      $('#email-3').css("transform", "translateY(" + email3 + "px)");
    };

    if (img2 <= 800) {
      $('#email-img-2').css("transform", "translateY(" + img2 + "px)");
    };
  };

  if ((currentPos > 900) && (currentPos < 1400)) {
    email4 = (parseInt($('#email-4').css('transform').split(',')[5]))+emailSpeed;

    if (email4 <= 1200) {
      $('#email-4').css("transform", "translateY(" + email4 + "px)");
    };
  };

  if (currentPos > 1400) {
    email5 = (parseInt($('#email-5').css('transform').split(',')[5]))+emailSpeed;
    img3 = (parseInt($('#email-img-3').css('transform').split(',')[5]))+emailImageSpeed;

    if (email5 <= 1300) {
      $('#email-5').css("transform", "translateY(" + email5 + "px)");
    };

    if (img3 <= 1300) {
      $('#email-img-3').css("transform", "translateY(" + img3 + "px)");
    };
  };
}
