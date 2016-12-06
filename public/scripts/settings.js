var calendarLink;
var billingInfo;
var whichPref;
var onoroff;

$(document).ready(function(){
  $('.scrollspy').scrollSpy();

  var range_type = 'input[type=range]';

  $(document).on('change', range_type, function(e) {
    var level = $(this).siblings('span').children('span.confidence-value');
    var thumb = $(this).siblings('.thumb');
    var value = thumb.find('.value').text();
    level.html(value);
  });


  // $('#calendar-btn').click(addCalendar);
  $('#billing-form-btn').click(addBilling);


  $(".email_pref").on("change",function(){
    whichPref = $(this).attr("id");
    onoroff = !$("#"+whichPref).prop("checked");
    console.log(onoroff);
    $.ajax({
      type: "post",
      data: {"emailPreference":whichPref,"state":onoroff}
    }).done(function(e){

    }).fail(function(e){
      alert("I'm sorry, but it seems I am having trouble connecting to my servers. Please refresh the page and try again :)")
    })
  });

  $("#calendar-btn").on("click",function(){
    addCalendar();
    alert(calendarLink)
    $.ajax({
      type:"post",
      data: {"calendarLink":calendarLink}
    }).done(function(){
      $(".currentCal").text(calendarLink).attr("href",calendarLink);
    }).fail(function(e){
      alert("I'm sorry, but it seems I am having trouble connecting to my servers. Please refresh the page and try again :)")
    })
  });


});


function addCalendar(){
  calendarLink = $('#new-calendar-link').val();
  $('#new-calendar-link').val('');
}

function addBilling(){
  var data = $('#billing-form').find('input').val();
  console.log(data);
}
