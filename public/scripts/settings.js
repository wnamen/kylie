$(document).ready(function(){
  $('.scrollspy').scrollSpy();

  var range_type = 'input[type=range]';

  $(document).on('change', range_type, function(e) {
    var level = $(this).siblings('span').children('span.confidence-value');
    var thumb = $(this).siblings('.thumb');
    var value = thumb.find('.value').text();
    level.html(value);
  });

});
