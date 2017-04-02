$(document).ready(function() {
  $('.demo-form .btn').click(handleFormRequest);
  $('.modal-content .btn').click(handleModalRequest);
  $('#sign-in-form .btn').click(handleSignInRequest);
});

// THIS METHOD HANDLE THE SIGN IN REQUEST

function handleSignInRequest() {
  var $inputs = $('#sign-in-form :input');
  var values = captureFormData($inputs);
  var url;

  // submitRequest(values, url)
}

// THESE METHODS HANDLE THE DEMO REQUEST

function handleFormRequest() {
  var $inputs = $('.demo-form :input');
  var values = captureFormData($inputs);
  var url;

  // submitRequest(values, url);
}

function handleModalRequest() {
  var $inputs = $('.modal-content :input');
  var values = captureFormData($inputs);
  var url;

  // submitRequest(values, url);
}

// THESE METHODS HANDLE FORM CAPTURES AND FETCH POSTING

function captureFormData(inputs) {
  var values = {};
  inputs.each(function() {
      values[this.name] = $(this).val();
  });
  return values;
}

function submitRequest(data, url) {
  var payload = new FormData();
  payload.append( "json", JSON.stringify( data ) );

  fetch(url,
  {
      method: "POST",
      body: payload
  })
  .then(function(res){ return res.json(); })
  .then(function(data){ alert( JSON.stringify( data ))})
  .catch(function (error){ console.log('Request failed', error)});
}
