$(document).ready(function() {
  $('.scrollspy').scrollSpy();
  $('.modal').modal();
  $('select').material_select();

  $('.payment-card').click(handlePaymentSelection)
  $('.form-close').click(handleFormClose)
});

function handlePaymentSelection() {
  // CAPTURE SELECTION VARIABLES
  var selection = $(this).data('payment-option');
  var selectedID = '#' + selection + '-form';

  // IF THE USER SELECTED PAYMENT BY CARD
  if (selection === 'card') {
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
  } else if (selection === 'invoice') {
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
  var selection = $(this).data('form');
  var selectedID = '#' + selection + '-form';

  // IF THE USER CANCELED THE CARD FORM
  if (selection === 'card') {
    // FADE OUT THE FORM
    $(selectedID).toggleClass('fadeOutLeft');

    // FADE IN THE SELECTOR AFTER THE FORM IS FADED OUT
    setTimeout(function() {
      $(selectedID).toggleClass('show fadeInLeft');
      $('#payment-selector').toggleClass('hide fadeOutRight fadeInRight');
    }, 500)

  // IF THE USER CANCELED THE INVOICE FORM
  } else if (selection === 'invoice') {
    // FADE OUT THE FORM
    $(selectedID).toggleClass('fadeOutRight');

    // FADE IN THE SELECTOR AFTER THE FORM IS FADED OUT
    setTimeout(function() {
      $(selectedID).toggleClass('show fadeInRight');
      $('#payment-selector').toggleClass('hide fadeOutLeft fadeInLeft');
    }, 500)
  }

}
