var currentView = 'manager';
var currentIntegration = 'Zendesk';
var currentSettingsView = 'roles';
var currentCard = 'admin';

$(document).ready(function() {

  $('.nav-options i').click(handleViewChange);
  $('.manager-view-selector div').click(handleIntegrationView);
  $('.settings-option').click(handleSettingsView);
  $('#controller-cards').on('click', '.controller-card', handleCardSelection);
  $('.delete-card').click(handleDeleteCard);
  $('#add-role-modal form .btn').click(handleAddNewRole);
  $('.save-btn').click(handleSaveAction)

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

    $(newId).toggleClass('active-block');
    $(currentId).toggleClass('active-block');
  }
  currentView = newView;
}

function handleIntegrationView() {
  var newIntegration = $(this).data('integration');

  if (newIntegration === currentIntegration) {
    return
  } else {
    $('.current-integration').html(newIntegration);
    currentIntegration = newIntegration
  }
}

function handleSettingsView() {
  var newSettingsView = $(this).data('settings-view');

  if (newSettingsView === currentSettingsView) {
    return
  } else {
    var newId = '#' + newSettingsView + '-container';
    var currentId = '#' + currentSettingsView + '-container';

    $(newId).toggleClass('active-flex');
    $(currentId).toggleClass('active-flex');
  }
  currentSettingsView = newSettingsView;
}

function handleCardSelection() {
  var newCard = $(this).data('role');

  if (newCard === currentCard) {
    return
  } else {
    var newId = '#' + newCard.toLowerCase() + '-card';
    var currentId = '#' + currentCard + '-card';

    $('#editor-input').val(newCard);

    $(newId).toggleClass('active-card');
    $(currentId).toggleClass('active-card');
  }
  currentCard = newCard.toLowerCase();
}


function handleDeleteCard() {
  if ((currentCard === 'admin') || (currentCard === 'manager')) {
    return alert('You cannot delete this card.')
  } else {
    var currentId = '#' + currentCard.toLowerCase() + '-card';
    var newId = '#admin-card';

    $(currentId).remove();
    $(newId).toggleClass('active-card');
    $('#editor-input').val('Admin');
    currentCard = 'admin'
  }
}

function handleAddNewRole() {
  var newRole = $('#add-role-modal form').serializeArray();

  createNewRole(newRole)
}

function createNewRole(data) {
  var roleName = findDataPoint(data, 'role-name');
  var roleDescription = findDataPoint(data, 'role-description');

  var $newRoleCard = $("<div id='" + roleName.toLowerCase() + "-card' data-role='" + roleName + "' class='controller-card'><p class='controller-title'>" + roleName + "</p><p class='controller-description'>A <span class='description-title'>" + roleName + "</span> can " + roleDescription + "</p></div>")
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

function handleSaveAction() {
  $('#saved-notification').addClass('active-flex')

  setTimeout(function(){
    $('#saved-notification').removeClass('active-flex')
  },2000)
}
