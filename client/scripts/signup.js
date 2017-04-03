var paymentSelection;

var formState = {
  general: false,
  tos: false,
  invoice: false,
  card: false
}

var signUpData = {
  generalInfo: [
    {
      name: "name",
      value: "John Smith"
    },
    {
      name: "email",
      value: "john.smith@gmail.com"
    },
    {
      name: "phone",
      value: "9043146488"
    },
    {
      name: "company-name",
      value: "A Company, Inc."
    }
  ],
  dealInfo: [
    {
      name: "Total Seats Requested:",
      value: "50"
    },
    {
      name: "Total Models Requested",
      value: "2"
    },
    {
      name: "Total Weekly Drafts Requested",
      value: "150"
    },
    {
      name: "Total Integrations Requested",
      value: "1"
    },
    {
      name: "Average Weekly Ticket Volume",
      value: "2,200"
    },
    {
      name: "Total Global Permissions",
      value: "5"
    },
    {
      name: "Payment Cycle",
      value: "Quarterly"
    },
    {
      name: "Payment Discount",
      value: "None"
    },
    {
      name: "Cost",
      value: "$50,000.00"
    }
  ]
}

$(document).ready(function() {
  getSignUpData();

  $('.scrollspy').scrollSpy();
  $('.modal').modal();
  $('select').material_select();

  $('select[required]').css({
    display: 'inline',
    position: 'absolute',
    float: 'left',
    padding: 0,
    margin: 0,
    border: '1px solid rgba(255,255,255,0)',
    height: 0,
    width: 0,
    top: '2em',
    left: '3em'
  });

  $('.payment-card').click(handlePaymentSelection)
  $('.form-close').click(handleFormClose)

  $('#general-information').validate({
    errorClass: 'error failedValidation',
    validClass: 'success',
    highlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(validClass).removeClass(errorClass);
    },
    submitHandler: function() {
      formState.general = true;
    }
  });

  $('#card-form').validate({
    errorClass: 'error failedValidation',
    validClass: 'success',
    highlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(validClass).removeClass(errorClass);
    },
    submitHandler: function() {
      formState.card = true;
    }
  });

  $('#card-form .reset-button').on('click', function () {
    $("#card-form").validate().resetForm();  // clear out the validation errors
  });

  $('#invoice-form').validate({
    errorClass: 'error failedValidation',
    validClass: 'success',
    highlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(validClass).removeClass(errorClass);
    },
    submitHandler: function() {
      formState.invoice = true;
    }
  });

  $('#invoice-form .reset-button').on('click', function () {
    $("#invoice-form").validate().resetForm();  // clear out the validation errors
  });

  $('#tos-form').validate({
    errorClass: 'error failedValidation',
    validClass: 'success',
    errorPlacement: function(error, element) {},
    highlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(validClass).removeClass(errorClass);
    },
    submitHandler: function() {
      formState.tos = true;
    }
  });

  $('#signup-form .btn').click(handleValidation);
});

function getSignUpData() {
  // fetch(url)
  // .then(function(res){ return res.json(); })
  // .then(function(data){ JSON.stringify( data )})
  // .then(function(data){
  //   loadGeneralInfo(data.generalInfo);
  //   loadDealStructure(data.dealInfo)
  // })
  // .catch(function (error){ console.log('Request failed', error)});

  loadGeneralInfo(signUpData.generalInfo);
  loadDealStructure(signUpData.dealInfo)
}

function loadGeneralInfo(data) {
  data.forEach(function(detail) {
    $('#general-' + detail.name).val(detail.value);
  })
}

function loadDealStructure(data) {
  var $parent = $('.deal-text-container');

  data.forEach(function(detail) {
    $parent.append("<div><p><strong>" + detail.name + ":</strong></p><p>" + detail.value + "</p></div>");
  });

}

function handlePaymentSelection() {
  // CAPTURE SELECTION VARIABLES
  paymentSelection = $(this).data('payment-option');
  var selectedID = '#' + paymentSelection + '-form';

  // IF THE USER SELECTED PAYMENT BY CARD
  if (paymentSelection === 'card') {
    // REMOVE ANY CONFLICTING CLASSES
    $('#payment-selector').removeClass('fadeInRight');
    $(selectedID).removeClass('fadeOutLeft');

    // BEGIN ANIMATION BY FADING OUT THE SELECTOR
    $('#payment-selector').toggleClass('fadeOutRight');

    // FADE IN THE FORM AFTER THE SELECTOR HAS FADED OUT
    setTimeout(function() {
      $('#payment-selector').toggleClass('hide');
      $(selectedID).toggleClass('show fadeInLeft');
    }, 500);


  // IF THE USER SELECTED PAYMENT BY INVOICE
} else if (paymentSelection === 'invoice') {
    // REMOVE ANY CONFLICTING CLASSES
    $('#payment-selector').removeClass('fadeInLeft');
    $(selectedID).removeClass('fadeOutRight');

    // BEGIN ANIMATION BY FADING OUT THE SELECTOR
    $('#payment-selector').toggleClass('fadeOutLeft');

    // FADE IN THE FORM AFTER THE SELECTOR HAS FADED OUT
    setTimeout(function() {
      $('#payment-selector').toggleClass('hide');
      $(selectedID).toggleClass('show fadeInRight');
    }, 500)
  }
}

function handleFormClose() {
  // CAPTURE SELECTION VARIABLES
  paymentSelection = $(this).data('form');
  var selectedID = '#' + paymentSelection + '-form';

  // IF THE USER CANCELED THE CARD FORM
  if (paymentSelection === 'card') {
    // FADE OUT THE FORM
    $(selectedID).toggleClass('fadeOutLeft');
    $(selectedID + " .reset-button").trigger('click');

    // FADE IN THE SELECTOR AFTER THE FORM IS FADED OUT
    setTimeout(function() {
      $(selectedID).toggleClass('show fadeInLeft');
      $('#payment-selector').toggleClass('hide fadeOutRight fadeInRight');
    }, 500)

  // IF THE USER CANCELED THE INVOICE FORM
} else if (paymentSelection === 'invoice') {
    // FADE OUT THE FORM
    $(selectedID).toggleClass('fadeOutRight');
    $(selectedID + " .reset-button").trigger('click');


    // FADE IN THE SELECTOR AFTER THE FORM IS FADED OUT
    setTimeout(function() {
      $(selectedID).toggleClass('show fadeInRight');
      $('#payment-selector').toggleClass('hide fadeOutLeft fadeInLeft');
    }, 500)
  }
}

// THESE METHODS HANDLE THE SIGN UP REQUEST

function formStateChecker() {
  var generalValidated = formState.general;
  var tosValidated = formState.tos;
  var cardValidated = formState.card;
  var invoiceValidated = formState.invoice;

  if ((generalValidated) && (tosValidated) && (cardValidated || invoiceValidated)) {
    return true;
  }
  return false;
}

function handleValidation() {
  var selectedID = '#' + paymentSelection + '-form';

  $('#general-information .submit-button').trigger('click');
  $('#tos-form .submit-button').trigger('click');
  $(selectedID + " .submit-button").trigger('click');

  if (formStateChecker()) {
    handleSignUpRequest();
  }
}

function handleSignUpRequest() {
  var selectedID = '#' + paymentSelection + '-form';

  var generalInfo = $('#general-information').serializeArray();
  var paymentInfo = $(selectedID).serializeArray();
  paymentInfo.type = selectedID;

  var values = {generalInfo, paymentInfo}

  var url;
  submitRequest(values, url)
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
