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
  urlParser(url);

  $('#personal-greeting').html("Hi " + userInfo.name);
  $('.userName').html(userInfo.name);
  $('.userEmail').html('(' + userInfo.email + ')');
  $('.userCompany').html(userInfo.company);

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
    } else {
      $('#email-3').removeClass('email-slide');
      $('#email-img-2').removeClass('img-slide');
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
    } else {
      $('#email-5').removeClass('email-slide');
      $('#email-img-3').removeClass('img-slide');
    }
  });
});
