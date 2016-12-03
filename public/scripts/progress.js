var referrals;

$(document).ready(function(){
  $('#referral-btn').click(captureReferrals);

  $('input').change(requireInput)
});

function requireInput(e) {
  // this.addClass('required')
  console.log($('.email-address' + this.id.slice(this.id.indexOf(-1))));
  // $('#provinceselect').prop('required',true);
}

function captureReferrals(e){

  var referralData = [];
  var inputs = $(".capture");

  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].value !== "") {
      referralData.push([inputs[i].id, inputs[i].value]);
    }
  }

  createReferrals(referralData);
};

function createReferrals(data){
  var message = $('#custom-message').val();
  var referral = {};
  referrals = [];

  data.forEach(function (ele, idx){
    console.log(ele);
    if (ele[0].indexOf("name") !== -1){
      referral[ele[0]] = ele[1];
      referral['message'] = message;
    } else {
      referral[ele[0]] = ele[1];
      referrals.push(referral);
      referral = {};
    }

  });
  console.log(referrals);
}
