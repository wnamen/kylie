
$(document).ready(function() {

  $('#login-form').validate({
    errorClass: 'error failedValidation',
    validClass: 'success',
    highlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(validClass).removeClass(errorClass);
    },
    submitHandler: function() {
      handleCreateLogin();
    }
  });

  $('#integration-connect').click(handleIntegration);
  $('#topics-submit').click(handleIgnoreTopics);
  $('#topics-skip').click(handleSkipTopics);

});

function handleCreateLogin() {
  var $inputs = $('#login-form :input');
  var values = captureFormData($inputs);

  window.location = './onboard-integration.html'
}

function handleIntegration() {
  window.location = './onboard-topics.html'
}

function handleIgnoreTopics() {
  var $inputs = $('#topics-form :input');
  var values = captureFormData($inputs);
  console.log(values);
  // window.location = './onboard-integration.html'
}
function handleSkipTopics() {
  console.log('click');
  // window.location = './onboard-topics.html'
}

function captureFormData(inputs) {
  var values = {};
  inputs.each(function() {
      values[this.name] = $(this).val();
  });
  return values;
}
