var currentView = 'settings';

$(document).ready(function() {

  $('.nav-options i').click(handleViewChange);

  $('.modal').modal();
  $('select').material_select();
});

function handleViewChange() {
  var newView = $(this).data('view');

  if (newView === currentView) {
    return
  } else {
    var newId = '#' + newView + '-view';
    var currentId = '#' + currentView + '-view';

    $(newId).toggleClass('active');
    $(currentId).toggleClass('active');
  }
  currentView = newView;
}
