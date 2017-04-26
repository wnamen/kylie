// THIS IS A FAKE OBJECT USED FOR TESTING DATA
var managerData = {
  totalAgents: 305,
  totalConversations: 40175,
  totalSeats: 25,
  currentDraftConfidence: 73,
  currentAutosendConfidence: 84,
  agents: [
    {
      id: 1,
      name: "Jamasen Rodriguez"
    },
    {
      id: 2,
      name: "Sinan Ozdemir"
    },
    {
      id: 3,
      name: "William Namen"
    },
    {
      id: 4,
      name: "Kathleen Quillian"
    },
    {
      id: 5,
      name: "Andrew Jackson"
    },
    {
      id: 6,
      name: "Phil Bartelli"
    },
    {
      id: 7,
      name: "Sarah Palin"
    },
    {
      id: 8,
      name: "Andrew Jackson"
    },
    {
      id: 9,
      name: "Helen Keller"
    },
  ]
}

var usersData = {
  users: [
    {
      name: 'Jamasen Rodriguez',
      role: 'Admin'
    },
    {
      name: 'Sinan Ozdemir',
      role: 'Admin'
    },
    {
      name: 'William Namen',
      role: 'Manager'
    }
  ]
}

var securityData = {
  key: '8FSD97F87S7HK324JKH',
  email: 'testuser@kylieai.com',
  password: 'testuser'
}

var billingData = {
  paid: true,
  dealInfo: [
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

// THESE VARIABLES ESTABLISH THE STATE OF THE DASHBOARD
var selectAll = false;
var availableSeats;
var assignments = [];
var currentCard = 'admin';
var selectedUsers = [];

$(document).ready(function() {

  // PAGE DATA LOADERS
  loadManagerData();
  loadUsersData();
  loadSecurityData();
  loadBillingData();

  // MANAGER DASHBOARD FUNCTIONALITY
  $('#agent-search-toggle').click(handleAgentSearchToggle);
  $('.assignment-row').on('click', 'input', handleAssignment);
  $('#select-all input').click(handleSelectAllAssignments);
  $('#draft-confidence').on('change', captureSliderChange);
  $('#autosend-confidence').on('change', captureSliderChange);

  // SETTINGS ROLES FUNCTIONALITY
  $('#controller-cards').on('click', '.controller-card', handleCardSelection);
  $('#editor-input').on('change', handleRoleEditor);
  $('.delete-card').click(handleDeleteCard);
  $('#add-role-modal form .btn').click(handleAddNewRole);
  $('.save-btn').click(handleSaveAction);

  // SETTINGS USERS FUNCTIONALITY
  $('.user-card').on('click', 'input', handleSelectedUser);
  $('#add-users-modal form').submit(handleAddUser);
  $('#edit-users-modal form').submit(handleEditUser);
  $('.delete-user-card').click(handleRemoveUser);

  // SETTINGS SECURITY FUNCTIONALITY
  $('#confidential-topics-form').submit(handleTopicsUpdate);
  $('#email-form').submit(handleEmailUpdate);
  $('#password-form').submit(handlePasswordUpdate);

  // REQUIRED MATERIALIZE FUNCTIONALITY
  $('.modal').modal();
  $('select').material_select();
});

function loadManagerData() {
  availableSeats = managerData.totalSeats;

  managerData.agents.forEach(function(agent) {
    $('#assignment-switch-container').append('<div class="assignment-row"><p class="black-font">' + agent.name + '</p><div class="switch"><label><input type="checkbox" value="' + agent.name + 'id' + agent.id + '"><span class="lever"></span></label></div></div><hr>')
  })

  $('#agents-stat').text(Number(managerData.totalAgents).toLocaleString());
  $('#conversations-stat').text(Number(managerData.totalConversations).toLocaleString());
  $('#draft-confidence').val(Number(managerData.currentDraftConfidence));
  $('#autosend-confidence').val(Number(managerData.currentAutosendConfidence));
}

function loadUsersData() {
  usersData.users.forEach(function(user) {
    $('#users-container #controller-cards').append('<div id="' + user.name + ' card" class="user-card"><input type="checkbox" id="' + user.name + '" value="' + user.name + '" class="validate"/><label class="black-font" for="' + user.name + '">' + user.name + ' <span id="' + user.name + ' role" >(' + user.role + ')</span></label></div>')
  });
}

function loadSecurityData() {
  $('#login-key').val(securityData.key);
  $('#email').val(securityData.email);
}

function loadBillingData() {
  var $parent = $('#billing-data');

  billingData.dealInfo.forEach(function(detail) {
    $parent.append('<div class="billing-data-row"><p class="black-font no-margin-bottom">' + detail.name + ':</p><p class="black-font no-margin-bottom">' + detail.value + '</p></div>');
  });

  if (billingData.paid) {
    $('#billing-paid').addClass('active-block');
  } else {
    $('#billing-overdue').addClass('active-block');
  }

}

// MANAGER DASHBOARD FUNCTIONALITY

function handleAgentSearchToggle() {
  $(this).siblings('.input-field').fadeToggle().toggleClass('hide');
}

function handleAssignment() {
  var value = ($(this).val()).split('id');
  var name = value[0];
  var id = value[1];

  if (currentlyAssigned(name, id)) {
    removeAssigned(name, id);
  } else {
    addAssigned(name, id);
  }

  handleSaveAction();
}

function currentlyAssigned(name, id) {
  if (assignments.length <= 0) {
    return false;
  }
  for(var k in assignments) {
    if ((assignments[k].name === name) && (Number(assignments[k].id) === Number(id))) {
      return true;
    }
  }
  return false
}

function removeAssigned(name, id) {
  for(var k in assignments) {
    if ((assignments[k].name === name) && (Number(assignments[k].id) === Number(id))) {
      assignments.splice(k, 1);
    }
  }
}

function addAssigned(name, id) {
  assignments.push({
    name: name,
    id: Number(id)
  })
}

function handleSelectAllAssignments() {
  selectAll = !selectAll;
  var $inputs = $('#assignment-form #assignment-switch-container :input');
  selectAllToggle($inputs, selectAll);

  assignments = [];
  if (selectAll) {
    var k = 0;
    while ((k < availableSeats) && (k < managerData.agents.length)) {
      addAssigned(managerData.agents[k].name, managerData.agents[k].id);
      k++
    }
  }

  handleSaveAction();
}

function selectAllToggle(inputs, status) {
  inputs.each(function() {
    $(this).prop({checked: status});
  });
}

function captureSliderChange() {
  var $this = $(this);
  var value = $this.val();
  var type = $this.attr('id');

  if (type === "draft-confidence") {

  } else if (type === "autosend-confidence") {

  }
  handleSaveAction();
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

    } else {
      $('#editor-input').prop('disabled', false);
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

function captureFormData(inputs) {
  var values = {};
  inputs.each(function() {
      values[this.name] = $(this).val();
  });
  return values;
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
  e.preventDefault();
  var newUser = $(this).serializeArray();
  createNewUser(newUser)
}

function createNewUser(data) {
  var userName = findDataPoint(data, 'user-name'),
      userRole = findDataPoint(data, 'user-role'),
      $newUserCard = $('<div id="' + userName + ' card" class="user-card"><input type="checkbox" id="' + userName + '" value="' + userName + '"  class="validate"/><label class="black-font" for="' + userName + '">' + userName + ' <span id="' + userName + ' role" >(' + userRole + ')</span></label></div>');

  $('#users-container #controller-cards').append($newUserCard);
}

function handleEditUser(e) {
  e.preventDefault();
  var value = $('#edit-users-modal form input').val();
  selectedUsers.forEach(function(user) {
    document.getElementById(user.name + ' role').innerHTML = '(' + value + ')';
  })
}

function handleRemoveUser(e) {
  e.preventDefault();
  selectedUsers.forEach(function(user) {
    document.getElementById(user.name + ' card').remove();
  })
}

// SETTINGS SECURITY FUNCTIONALITY

function handleTopicsUpdate(e) {
  e.preventDefault();
  var $inputs = $('#confidential-topics-form :input');
  var values = captureFormData($inputs);
  handleSaveAction();

}

function handleEmailUpdate(e) {
  e.preventDefault();
  var $inputs = $('#email-form :input');
  var values = captureFormData($inputs);
  handleSaveAction();

}

function handlePasswordUpdate(e) {
  e.preventDefault();
  var $inputs = $('#password-form :input');
  var values = captureFormData($inputs);
  handleSaveAction();

}

function handleSaveAction() {
  console.log('activated');

  $('#saved-notification').addClass('active-flex')

  setTimeout(function(){
    $('#saved-notification').removeClass('active-flex')
  },2000)
}
