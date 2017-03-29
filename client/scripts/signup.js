$(document).ready(function() {
  $('.scrollspy').scrollSpy();
  $('.modal').modal();
  $('select').material_select();

  $('.payment-card').click(handlePaymentSelection)
});

function handlePaymentSelection() {

  var selection = $(this).data('payment-option');
  var selectedID = '#' + selection + '-form';

  if (selection === 'card') {
    $('#payment-selector').addClass('animated fadeOutRight');
    setTimeout(function() {
      $('#payment-selector').addClass('hide');
      $(selectedID).addClass('show');
      $(selectedID).addClass('animated fadeInLeft');
    }, 500)
  } else if (selection === 'invoice') {
    $('#payment-selector').addClass('animated fadeOutLeft');
    setTimeout(function() {
      $('#payment-selector').addClass('hide');
      $(selectedID).addClass('animated fadeInRight');
      $(selectedID).addClass('show');
    }, 500)
  }
}
