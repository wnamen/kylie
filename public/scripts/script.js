var $window = $(window);

// var email1,
//     email2,
//     email3,
//     email4,
//     email5;
//
// var img1,
//     img2,
//     img3;
//     img1Pos,
//     img2Pos,
//     img3Pos;
//
// var emailSpeed = 1,
//     emailImageSpeed = 2;
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
$(document).ready(function() {

  // position = $window.scrollTop();

  $window.scroll(function () {

    var position = $window.scrollTop();

    var headPosition = $('#email-head').position();
    var headHeight = $('#email-head').height();

    if (position > (headPosition.top - headHeight - 300)) {
      $('#email-1').addClass('slide');
      $('#email-img-1').addClass('slide');
    } else {
      $('#email-1').removeClass('slide');
      $('#email-img-1').removeClass('slide');
    }

    var email1Position = $('#email-1').position();
    var email1Height = $('#email-1').height();

    if (position > (email1Position.top - email1Height + 100)) {
      $('#email-2').addClass('slide');
    } else {
      $('#email-2').removeClass('slide');
    }

    var email2Position = $('#email-2').position();
    var email2Height = $('#email-2').height();

    if (position > (email2Position.top - email2Height + 100)) {
      $('#email-3').addClass('slide');
      $('#email-img-2').addClass('slide');
    } else {
      $('#email-3').removeClass('slide');
      $('#email-img-2').removeClass('slide');
    }

    var email3Position = $('#email-3').position();
    var email3Height = $('#email-3').height();

    if (position > (email3Position.top - email3Height + 100)) {
      $('#email-4').addClass('slide');
    } else {
      $('#email-4').removeClass('slide');
    }

    var email4Position = $('#email-4').position();
    var email4Height = $('#email-4').height();

    if (position > (email4Position.top - email4Height + 100)) {
      $('#email-5').addClass('slide');
      $('#email-img-3').addClass('slide');
    } else {
      $('#email-5').removeClass('slide');
      $('#email-img-3').removeClass('slide');
    }



    // direction = (scroll > position) ? 'down' : ((scroll === position) ? 'none' : 'up');

    // if (direction === 'down') {
    //   console.log('down');
      // $window.on('scroll', upAnimate);
    // } else {
    //   console.log('up');
      // $window.on('scroll', downAnimate);
    // }

    // position = scroll;
  });
});
//
// function upAnimate() {
//
//   imgPosCheck();
//   if ($window.scrollTop() > 350) {
//     email1 = (parseInt($('#email-1').css('transform').split(',')[5]))-emailSpeed;
//     img1 = (parseInt($('#email-img-1').css('transform').split(',')[5]))-emailImageSpeed;
//
//     console.log(email1);
//
//     if (email1 >= 0) {
//       $('#email-1').css("transform", "translateY(" + email1 + "px)");
//     };
//
//     if (img1 >= img1Pos) {
//       $('#email-img-1').css("transform", "translateY(" + img1 + "px)");
//     };
//   };
//
//   if ($window.scrollTop() > 600) {
//     email2 = (parseInt($('#email-2').css('transform').split(',')[5]))-emailSpeed;
//
//     if (email2 >= 200) {
//       $('#email-2').css("transform", "translateY(" + email2 + "px)");
//     };
//   };
//
//   if ($window.scrollTop() > 770) {
//     email3 = (parseInt($('#email-3').css('transform').split(',')[5]))-emailSpeed;
//     img2 = (parseInt($('#email-img-2').css('transform').split(',')[5]))-emailImageSpeed;
//
//     if (email3 >= 440) {
//       $('#email-3').css("transform", "translateY(" + email3 + "px)");
//     };
//
//     if (img2 >= img2Pos) {
//       $('#email-img-2').css("transform", "translateY(" + img2 + "px)");
//     };
//   };
//
//   if ($window.scrollTop() > 900) {
//     email4 = (parseInt($('#email-4').css('transform').split(',')[5]))-emailSpeed;
//
//     if (email4 >= 635) {
//       $('#email-4').css("transform", "translateY(" + email4 + "px)");
//     };
//   };
//
//   if ($window.scrollTop() > 1400) {
//     email5 = (parseInt($('#email-5').css('transform').split(',')[5]))-emailSpeed;
//     img3 = (parseInt($('#email-img-3').css('transform').split(',')[5]))-emailImageSpeed;
//
//     if (email5 >= 880) {
//       $('#email-5').css("transform", "translateY(" + email5 + "px)");
//     };
//
//     if (img3 >= img3Pos) {
//       $('#email-img-3').css("transform", "translateY(" + img3 + "px)");
//     };
//   };
// }
//
// function downAnimate() {
//
//   var currentPos = $window.scrollTop();
//
//   imgPosCheck();
//   if ((currentPos > 350) && (currentPos < 1400)) {
//     email1 = (parseInt($('#email-1').css('transform').split(',')[5]))+emailSpeed;
//     img1 = (parseInt($('#email-img-1').css('transform').split(',')[5]))+emailImageSpeed;
//
//     if (email1 <= 200) {
//       $('#email-1').css("transform", "translateY(" + email1 + "px)");
//     };
//
//     if (img1 <= 650) {
//       $('#email-img-1').css("transform", "translateY(" + img1 + "px)");
//     };
//   };
//
//   if ((currentPos > 600) && (currentPos < 1400)) {
//     email2 = (parseInt($('#email-2').css('transform').split(',')[5]))+emailSpeed;
//
//     if (email2 <= 600) {
//       $('#email-2').css("transform", "translateY(" + email2 + "px)");
//     };
//   };
//
//   if ((currentPos > 770) && (currentPos < 1400)) {
//     email3 = (parseInt($('#email-3').css('transform').split(',')[5]))+emailSpeed;
//     img2 = (parseInt($('#email-img-2').css('transform').split(',')[5]))+emailImageSpeed;
//
//     if (email3 <= 800) {
//       $('#email-3').css("transform", "translateY(" + email3 + "px)");
//     };
//
//     if (img2 <= 800) {
//       $('#email-img-2').css("transform", "translateY(" + img2 + "px)");
//     };
//   };
//
//   if ((currentPos > 900) && (currentPos < 1400)) {
//     email4 = (parseInt($('#email-4').css('transform').split(',')[5]))+emailSpeed;
//
//     if (email4 <= 1200) {
//       $('#email-4').css("transform", "translateY(" + email4 + "px)");
//     };
//   };
//
//   if (currentPos > 1400) {
//     email5 = (parseInt($('#email-5').css('transform').split(',')[5]))+emailSpeed;
//     img3 = (parseInt($('#email-img-3').css('transform').split(',')[5]))+emailImageSpeed;
//
//     if (email5 <= 1300) {
//       $('#email-5').css("transform", "translateY(" + email5 + "px)");
//     };
//
//     if (img3 <= 1300) {
//       $('#email-img-3').css("transform", "translateY(" + img3 + "px)");
//     };
//   };
// }
