var paymentSelection;

var deal = {
  generalInfo: {

  },
  details: [
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

  $('#signup-form .btn').click(handleSignUpRequest);
});

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

    // FADE IN THE SELECTOR AFTER THE FORM IS FADED OUT
    setTimeout(function() {
      $(selectedID).toggleClass('show fadeInLeft');
      $('#payment-selector').toggleClass('hide fadeOutRight fadeInRight');
    }, 500)

  // IF THE USER CANCELED THE INVOICE FORM
} else if (paymentSelection === 'invoice') {
    // FADE OUT THE FORM
    $(selectedID).toggleClass('fadeOutRight');

    // FADE IN THE SELECTOR AFTER THE FORM IS FADED OUT
    setTimeout(function() {
      $(selectedID).toggleClass('show fadeInRight');
      $('#payment-selector').toggleClass('hide fadeOutLeft fadeInLeft');
    }, 500)
  }
}

// THIS METHOD HANDLE THE SIGN UP REQUEST

function handleSignUpRequest() {
  var selectedID = '#' + paymentSelection + '-form';
  var generalInfo = $('#general-information').serializeArray();
  var paymentInfo = $(selectedID).serializeArray();
  paymentInfo.type = selectedID;

  var values = {generalInfo, paymentInfo}

  // var url;
  // submitRequest(values, url)
}

//

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
