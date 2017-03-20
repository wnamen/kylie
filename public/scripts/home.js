var referrals,
    referral;

$(document).ready(function(){
  $('.email-input').focusout(handleEmailCheck);
  $('#referral-btn').click(handleReferrals);
});

function handleEmailCheck(){
  $(this).removeClass("failedValidation");
  var email = $(this).val();
  var emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var OK = emailVal.exec(email);
  if (!OK){
    $(this).addClass("failedValidation");
    window.setTimeout(function(){$(".email-input").removeClass("failedValidation")},500);
  }
}

function handleReferrals(){

  var rows = $('.referral-row');
  referrals = [];

  for (var i = 0; i < rows.length; i++) {
    if (referralValidator(rows[i])) {
      referrals.push(referralGenerator(rows[i]));
    }
  }

  alert(referrals);
}

function referralValidator(row){
  var name = $(row).find('.name-input').val();
  var email = $(row).find('.email-input').val();

  if ((name === "") || (email === "")){
    return false;
  }

  return true;
}

function referralGenerator(row){
  var message = $('#custom-message').val();
  var name = $(row).find('.name-input').val();
  var email = $(row).find('.email-input').val();

  referral = {
    'name': name,
    'email': email,
    'message': message
  }
  return referral;
}

function postData(data){
  $.ajax({
      type: "post",
      url: "",
      dataType: 'JSON',
      data: data
  }).done(function(res) {
    console.log("Post Compelete: ", res);
  })
  .fail(function(res) {
    console.log('ERROR: ', res);
  })
}
