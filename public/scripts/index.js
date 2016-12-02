var $window = $(window);

var userInfo;
var url;

function urlParser(url){
  var query = (url.slice(url.indexOf('?')+1)).split('&');
  return userInfo = {
    'name': userName(query[1]),
    'email': userEmail(query[2]),
    'company': userCompany(query[2]),
    'reference': userReference(query[0])
  };
}

function userReference(query) {
  return query.slice(query.indexOf('ref=')+4);
}

function userName(query){
  return query.indexOf("%20") === -1 ? query.slice(query.indexOf('name=')+5) : query.slice(query.indexOf('name=')+5, query.indexOf('%20'));
}

function userEmail(query){
  return query.slice(query.indexOf('email=')+6);
}

function userCompany(query){
  return query.slice(query.indexOf('@')+1, query.indexOf('.com'));
}

$(document).ready(function() {

  url = $(location).attr('href');
  if (url.indexOf('?') !== -1) {
    urlParser(url);
    $('#personal-greeting').html("Hi " + userInfo.name);
    $('.userName').html(userInfo.name);
    $('.userEmail').html('(' + userInfo.email + ')');
    $('.userCompany').html(userInfo.company);
  };

  $(".welcome-btn").click(welcomeRedirect);

  $window.scroll(function () {

    var email1 = $("#email-1"),
        email2 = $("#email-2"),
        email3 = $("#email-3"),
        email4 = $("#email-4"),
        email5 = $("#email-5");

    var transitions = "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend";

    /* CURRENT WINDOW POSITIONING */
    var position = $window.scrollTop();

    /* CURRENT ELEMENT POSITIONING */
    var headPosition = $('#email-head').position();
    var headHeight = $('#email-head').height();

    /* ANIMATION CONDITIONALS */
    if (position > (headPosition.top - headHeight - 300)) {
      $('#email-1').addClass('email-slide');
      $('#email-img-1').addClass('img-slide');
      $('#email-text-1').addClass('text-fade');
    } else {
      $('#email-1').removeClass('email-slide');
      $('#email-img-1').removeClass('img-slide');
      $('#email-text-1').removeClass('text-fade');
    }


    var email1 = $("#email-1");
    var email1Position = email1.position();
    var email1Height = email1.height();

    if (position > (email1Position.top - email1Height + 200)) {
      $('#email-2').addClass('email-slide');
    } else {
      $('#email-2').removeClass('email-slide');
    }

    var email2Position = $('#email-2').position();
    var email2Height = $('#email-2').height();

    if (position > (email2Position.top - email2Height + 200)) {
      $('#email-3').addClass('email-slide');
      $('#email-img-2').addClass('img-slide');
      $('#email-text-2').addClass('text-fade');
    } else {
      $('#email-3').removeClass('email-slide');
      $('#email-img-2').removeClass('img-slide');
      $('#email-text-2').removeClass('text-fade');
    }

    var email3Position = $('#email-3').position();
    var email3Height = $('#email-3').height();

    if (position > (email3Position.top - email3Height + 200)) {
      $('#email-4').addClass('email-slide');
    } else {
      $('#email-4').removeClass('email-slide');
    }

    var email4Position = $('#email-4').position();
    var email4Height = $('#email-4').height();

    if (position > (email4Position.top - email4Height + 200)) {
      $('#email-5').addClass('email-slide');
      $('#email-img-3').addClass('img-slide');
      $('#email-text-3').addClass('text-fade');
    } else {
      $('#email-5').removeClass('email-slide');
      $('#email-img-3').removeClass('img-slide');
      $('#email-text-3').removeClass('text-fade');
    }
  });
});

function welcomeRedirect(){
  location.href = "./welcome.html";
}
