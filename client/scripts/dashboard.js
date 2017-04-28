// THIS IS A FAKE OBJECT USED FOR TESTING DATA
var managerData = {
  totalAgents: 305,
  totalConversations: 40175,
  totalSeats: 25,
  currentDraftConfidence: 73,
  currentAutosendConfidence: 84
}

var billingData = {
  paid: true,
}

// THESE VARIABLES ESTABLISH THE STATE OF THE DASHBOARD
var selectAll = false;
var currentLocation;
var availableSeats;
var assignments = [];
var currentCard = 'admin';
var selectedUsers = [];

$(document).ready(function() {
  currentLocation = $('#dash-view').data('location');

  // MANAGER DASHBOARD FUNCTIONALITY
  if (currentLocation === 'dashboard-manager') {
    loadManagerData();
    $('#agent-search-toggle').click(handleAgentSearchToggle);
    $('#agent-search').on('keyup keypress', handleAgentSearch);
    $('.assignment-row').on('click', 'input', handleAssignment);
    $('#select-all input').click(handleSelectAllAssignments);
    $('#draft-confidence').on('change', captureSliderChange);
    $('#autosend-confidence').on('change', captureSliderChange);
  }

  // SETTINGS ROLES FUNCTIONALITY
  if (currentLocation === 'settings-roles') {
    $('#controller-cards').on('click', '.controller-card', handleCardSelection);
    $('#editor-input').on('change', handleRoleEditor);
    $('.delete-card').click(handleDeleteCard);
    $('#add-role-modal form .btn').click(handleAddNewRole);
    $('.save-btn').click(handleSaveAction);
    $('.modal').modal();
  }

  // SETTINGS USERS FUNCTIONALITY
  if (currentLocation === 'settings-users') {
    $('#controller-cards').on('click', '.user-card input', handleSelectedUser);
    $('.delete-user-card').click(handleRemoveUser);
    $('.modal').modal();

    $('#add-users-form').validate({
      errorClass: 'error failedValidation',
      validClass: 'success',
      highlight: function(element, errorClass, validClass) {
        $(element).closest('.validate').addClass(errorClass).removeClass(validClass);
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).closest('.validate').addClass(validClass).removeClass(errorClass);
      },
      submitHandler: function() {
        $('#add-users-modal').modal('close');
        handleAddUser();
      }
    });

    $('#edit-users-form').validate({
      errorClass: 'error failedValidation',
      validClass: 'success',
      highlight: function(element, errorClass, validClass) {
        $(element).closest('.validate').addClass(errorClass).removeClass(validClass);
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).closest('.validate').addClass(validClass).removeClass(errorClass);
      },
      submitHandler: function() {
        $('#edit-users-modal').modal('close');
        handleEditUser();
      }
    });
  }

  // SETTINGS SECURITY FUNCTIONALITY
  if (currentLocation === 'settings-security') {
    $('#confidential-topics-form').submit(handleTopicsUpdate);

    $('#email-form').validate({
      errorClass: 'error failedValidation',
      validClass: 'success',
      highlight: function(element, errorClass, validClass) {
        $(element).closest('.validate').addClass(errorClass).removeClass(validClass);
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).closest('.validate').addClass(validClass).removeClass(errorClass);
      },
      submitHandler: function() {
        handleEmailUpdate();
      }
    });

    $('#password-form').validate({
      errorClass: 'error failedValidation',
      validClass: 'success',
      highlight: function(element, errorClass, validClass) {
        $(element).closest('.validate').addClass(errorClass).removeClass(validClass);
      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).closest('.validate').addClass(validClass).removeClass(errorClass);
      },
      submitHandler: function() {
        handlePasswordUpdate();
      }
    });

    $('.tooltipped').tooltip({delay: 50});
  }

  // SETTINGS BILLING FUNCTIONALITY
  if (currentLocation === 'settings-billing') {
    loadBillingData();
  }

});

function loadManagerData() {
  availableSeats = managerData.totalSeats;
  $('#available-seats').text(availableSeats);
  $('#total-seats').text(managerData.totalSeats);

  $('#agents-stat').text(Number(managerData.totalAgents).toLocaleString());
  $('#conversations-stat').text(Number(managerData.totalConversations).toLocaleString());
  $('#draft-confidence').val(Number(managerData.currentDraftConfidence));
  $('#autosend-confidence').val(Number(managerData.currentAutosendConfidence));
}

function loadBillingData() {
  if (billingData.paid) {
    $('#billing-paid').addClass('active-block');
  } else {
    $('#billing-overdue').addClass('active-block');
  }
}

// MANAGER DASHBOARD FUNCTIONALITY

function handleAgentSearchToggle() {
  $(this).siblings('.input-field').fadeToggle().toggleClass('hide');
  $('#select-all p').fadeToggle().toggleClass('hide');
  $('.assignment-row').removeClass('hide');
}

function handleAgentSearch() {
  var value = $(this).val().toLowerCase();
  $('.assignment-row').removeClass('hide');

  $('.assignment-row p').each(function(index) {
    var agent = $(this).text().toLowerCase();
    if (agent.search(value) === -1) {
      $(this).parent().addClass('hide');
    }
  })
}

function handleAssignment() {
  var name = $(this).val();

  if (currentlyAssigned(name)) {
    removeAssigned(name);
  } else if ((!currentlyAssigned(name)) && (availableSeats > 0)) {
    addAssigned(name);
  } else {
    $(this).prop({checked: false});
    $('#select-all p').addClass('failedValidation');
    setTimeout(function() {
      $('#select-all p').removeClass('failedValidation');
    }, 1000)
  };

  availableSeats = managerData.totalSeats - assignments.length;
  $('#available-seats').text(availableSeats);
}

function currentlyAssigned(name) {
  if (assignments.length <= 0) {
    return false;
  }
  for(var k in assignments) {
    if (assignments[k].name === name) {
      return true;
    }
  }
  return false
}

function removeAssigned(name) {
  for(var k in assignments) {
    if (assignments[k].name === name) {
      assignments.splice(k, 1);
    }
  }
}

function addAssigned(name) {
  assignments.push({
    name: name
  })
}

function handleSelectAllAssignments() {
  selectAll = !selectAll;
  var $inputs = $('#assignment-form #assignment-switch-container :input');

  if (selectAll) {
    var k = 0;
    var tracker = 0;
    while ((tracker < availableSeats) && (k < $('.assignment-row').length)) {
      if ($($inputs[k]).prop('checked') === false) {
        addAssigned($inputs[k].value)
        switchToggle($inputs[k], selectAll);
        tracker++;
      }
      k++;
    }
  } else {
    assignments = [];
    switchToggle($inputs, selectAll);
  }

  availableSeats = managerData.totalSeats - assignments.length;
  $('#available-seats').text(availableSeats);
}

function switchToggle(input, status) {
  $(input).prop({checked: status});
}

function captureSliderChange() {
  var $this = $(this);
  var value = $this.val();
  var type = $this.attr('id');

  if (type === "draft-confidence") {

  } else if (type === "autosend-confidence") {

  }
}

// SETTINGS ROLES FUNCTIONALITY

function handleCardSelection() {
  var newCard = $(this).data('role');

  if (newCard === currentCard) {
    return
  } else {
    var newId = '#' + newCard.toLowerCase() + '-card';
    var currentId = '#' + currentCard + '-card';

    $(newId).toggleClass('active-card');
    $(currentId).toggleClass('active-card');

    $('#editor-input').val(newCard);

    if (newCard === 'Admin') {
      $('#editor-input').prop('disabled', true);
      $('#editor-options input').prop('checked', true);
      $('#editor-options input').prop('disabled', true);
    } else {
      $('#editor-input').prop('disabled', false);
      $('#editor-options input').prop('checked', false);
      $('#editor-options input').prop('disabled', false);
    }
  }
  currentCard = newCard.toLowerCase();
}

function handleRoleEditor() {
  var value = $(this).val();
  var $this = '#' + currentCard + '-card';

  $($this).data('role', value);
  $($this + ' .controller-title').text(value);
  $($this + ' .description-title').text(value);
  $($this).attr('id', value.toLowerCase() + '-card');

  currentCard = value.toLowerCase();
}

function handleDeleteCard() {
  if (currentCard === 'admin') {
    return alert('You cannot delete this card.')
  } else {
    var currentId = '#' + currentCard.toLowerCase() + '-card';
    var newId = '#admin-card';

    $(currentId).remove();
    $(newId).toggleClass('active-card');
    $('#editor-input').val('Admin');
    $('#editor-input').prop('disabled', true);
    $('#editor-options input').prop('checked', true);
    $('#editor-options input').prop('disabled', true);
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

// SETTINGS USERS FUNCTIONALITY
function handleSelectedUser() {
  var value = $(this).val();

  if (currentlySelected(value)) {
    removeSelected(value);
  } else {
    addSelected(value);
  }
}

function currentlySelected(name) {
  if (selectedUsers.length <= 0) {
    return false;
  }
  for(var k in selectedUsers) {
    if (selectedUsers[k].name === name) {
      return true;
    }
  }
  return false
}

function removeSelected(name) {
  for(var k in selectedUsers) {
    if (selectedUsers[k].name === name) {
      selectedUsers.splice(k, 1);
    }
  }
}

function addSelected(name) {
  selectedUsers.push({
    name: name
  })
}

function handleAddUser(e) {
  var newUser = $('#add-users-form').serializeArray();
  createNewUser(newUser)
}

function createNewUser(data) {
  var userName = findDataPoint(data, 'user-name'),
      userRole = findDataPoint(data, 'user-role'),
      $newUserCard = $('<div id="' + userName + ' card" class="user-card"><input type="checkbox" id="' + userName + '" value="' + userName + '"  class="validate"/><label class="black-font" for="' + userName + '">' + userName + ' <span id="' + userName + ' role" >(' + userRole + ')</span></label></div>');

  $('#users-container #controller-cards').append($newUserCard);
  // submitRequest(selectedUsers, url);
}

function handleEditUser(e) {
  var value = $('#edit-users-modal form input').val();
  selectedUsers.forEach(function(user) {
    document.getElementById(user.name + ' role').innerHTML = '(' + value + ')';
  })
  // submitRequest(selectedUsers, url);
}

function handleRemoveUser(e) {
  selectedUsers.forEach(function(user) {
    document.getElementById(user.name + ' card').remove();
  })
  // submitRequest(selectedUsers, url);
}

// SETTINGS SECURITY FUNCTIONALITY

function handleTopicsUpdate(e) {
  e.preventDefault();
  var $inputs = $('#confidential-topics-form :input');
  var values = captureFormData($inputs);
  // submitRequest(values, url);
}

function handleEmailUpdate(e) {
  e.preventDefault();
  var $inputs = $('#email-form :input');
  var values = captureFormData($inputs);
  // submitRequest(values, url);
}

function handlePasswordUpdate(e) {
  e.preventDefault();
  var $inputs = $('#password-form :input');
  var values = captureFormData($inputs);
  // submitRequest(values, url);
}

function handleSaveAction() {
  $('#saved-notification').addClass('active-flex')

  setTimeout(function(){
    $('#saved-notification').removeClass('active-flex')
  },2000)
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

function captureFormData(inputs) {
  var values = {};
  inputs.each(function() {
      values[this.name] = $(this).val();
  });
  return values;
}

function submitRequest(data, url) {
  var payload = new FormData();
  payload.append( "json", JSON.stringify( data ) );

  fetch(url,
  {
      method: "POST",
      body: payload
  })
  .then(function(res){
    handleSaveAction();
    return res.json();
  })
  .catch(function (error){ console.log('Request failed', error)});
}
