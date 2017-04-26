// THIS IS A FAKE OBJECT USED FOR TESTING DATA
var customerData = {
  totalSeats: 25,
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

var selectAll = false;
var availableSeats;
var assignments = [];

$(document).ready(function() {

  loadAssignmentData()
  $('.assignment-row').on('click', 'input', handleAssignment);
  $('#select-all input').click(handleSelectAllAssignments);
  $('#assignment-form').submit(handleSelectedAssignments);

  $('#login-form').validate({
    errorClass: 'error failedValidation',
    validClass: 'success',
    highlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(validClass).removeClass(errorClass);
    },
    submitHandler: function() {
      handleCreateLogin();
    }
  });

  $('#integration-connect').click(handleIntegration);
  $('#topics-submit').click(handleIgnoreTopics);
  $('#topics-skip').click(handleSkipTopics);

});

function loadAssignmentData() {
  availableSeats = customerData.totalSeats;
  $('#available-seats').text(availableSeats);
  $('#total-seats').text(customerData.totalSeats);

  customerData.agents.forEach(function(agent) {
    $('#assignment-switch-container').append('<div class="assignment-row"><p class="black-font">' + agent.name + '</p><div class="switch"><label><input type="checkbox" value="' + agent.name + 'id' + agent.id + '"><span class="lever"></span></label></div></div><hr>')
  })
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

  availableSeats = customerData.totalSeats - assignments.length;
  $('#available-seats').text(availableSeats);
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
    while ((k < availableSeats) && (k < customerData.agents.length)) {
      addAssigned(customerData.agents[k].name, customerData.agents[k].id)
      k++
    }
  }

  availableSeats = customerData.totalSeats - assignments.length;
  $('#available-seats').text(availableSeats);
}

function selectAllToggle(inputs, status) {
  inputs.each(function() {
      $(this).prop({checked: status});
  });
}

function handleSelectedAssignments(e) {
  e.preventDefault()
  console.log(assignments);
  window.location = '../dashboard/dashboard-manager.html'
}

function handleCreateLogin() {
  var $inputs = $('#login-form :input');
  var values = captureFormData($inputs);

  window.location = './onboard-integration.html'
}

function handleIntegration() {
  window.location = './onboard-topics.html'
}

function handleIgnoreTopics() {
  var $inputs = $('#topics-form :input');
  var values = captureFormData($inputs);
  console.log(values);
  // window.location = './onboard-integration.html'
}
function handleSkipTopics() {
  console.log('click');
  // window.location = './onboard-topics.html'
}

function captureFormData(inputs) {
  var values = {};
  inputs.each(function() {
      values[this.name] = $(this).val();
  });
  return values;
}