var referrals,
    referral;

$(document).ready(function(){
  $('.email-input').change(handleEmailCheck);
  $('#referral-btn').click(handleReferrals);
});

function handleEmailCheck(){
  // find change event
  // if val is not blank and a @ symbol is present, slice to the symbol
  // return new val

  str = $('#email-input').val().match(/^(.+@.+)$/);
  if ( str === null){
    $(this).css('border', "1px solid black");
    setTimeout(function(){
       $(this).css('border', "1px solid red");
    }, 200);
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

  // postData(referrals);
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
