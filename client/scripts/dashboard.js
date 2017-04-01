var currentView = 'settings';
var currentCard = 'admin'

$(document).ready(function() {

  $('.nav-options i').click(handleViewChange);
  $('#controller-cards').on('click', '.controller-card', handleCardSelection);
  $('#add-role-modal form .btn').click(handleAddNewRole);

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

function handleCardSelection() {
  var newCard = $(this).data('role');

  if (newCard === currentCard) {
    return
  } else {
    var newId = '#' + newCard + '-card';
    var currentId = '#' + currentCard + '-card';

    $(newId).toggleClass('active-card');
    $(currentId).toggleClass('active-card');
  }
  currentCard = newCard;
}

function handleAddNewRole() {
  var newRole = $('#add-role-modal form').serializeArray();

  createNewRole(newRole)
}

function createNewRole(data) {
  var roleName = findDataPoint(data, 'role-name');
  var roleDescription = findDataPoint(data, 'role-description');

  var $newRoleCard = $("<div id='" + roleName + "-card' data-role='" + roleName + "' class='controller-card'><p class='controller-title'>" + roleName + "</p><p class='controller-description'>A <span class='description-title'>" + roleName + "</span> can " + roleDescription + "</p></div>")
  $('#controller-cards').append($newRoleCard);
}

function findDataPoint(data, point) {
  var locatedPoint;
  data.forEach(function(datapoint) {
    if (datapoint.name === point) {
      locatedPoint = datapoint.value;
    }
  });

  return locatedPoint;
}
