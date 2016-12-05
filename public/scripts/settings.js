var calendarLink;
var billingInfo;

$(document).ready(function(){
  $('.scrollspy').scrollSpy();

  var range_type = 'input[type=range]';

  $(document).on('change', range_type, function(e) {
    var level = $(this).siblings('span').children('span.confidence-value');
    var thumb = $(this).siblings('.thumb');
    var value = thumb.find('.value').text();
    level.html(value);
  });

  $('.switch label input').change(function(e){
    console.log($(this).val());
  })

  $('#calendar-btn').click(addCalendar);
  $('#billing-form-btn').click(addBilling);

});

function addCalendar(){
  calendarLink = $('#new-calendar-link').val();
  $('#new-calendar-link').val('');
  return calendarLink;
}

function addBilling(){
  var data = $('#billing-form').find('input').val();
  console.log(data);
}
