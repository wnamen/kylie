// THIS IS A FAKE OBJECT USED FOR TESTING DATA
var customerData = {
  totalSeats: 25
}

// THESE VARIABLES ESTABLISH THE STATE OF THE DASHBOARD
var selectAll = false;
var availableSeats;
var assignments = [];
var loaders = ['training', 'agents', 'cloning'];

$(document).ready(function() {

  loadAssignmentData()
  $('#agent-search-toggle').click(handleAgentSearchToggle);
  $('#agent-search').on('keyup keypress', handleAgentSearch);
  $('.assignment-row').on('click', 'input', handleAssignment);
  $('#select-all input').click(handleSelectAllAssignments);
  $('#assignment-form').submit(handleSelectedAssignments);

  $('#assignment-form').on('keyup keypress', function(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.preventDefault();
      return false;
    }
  });

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

  $('#integration-form').validate({
    errorClass: 'error failedValidation',
    validClass: 'success',
    highlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(errorClass).removeClass(validClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).closest('.validate').addClass(validClass).removeClass(errorClass);
    },
    submitHandler: function() {
      handleIntegration();
    }
  });

  $('#topics-submit').click(handleIgnoreTopics);
  $('#topics-skip').click(handleSkipTopics);

  if ($('#dash-view').data('location') === 'loader') {
    animateLoader('agents');
  }

  $('.tooltipped').tooltip({delay: 50});

});

function loadAssignmentData() {
  availableSeats = customerData.totalSeats;
  $('#available-seats').text(availableSeats);
  $('#total-seats').text(customerData.totalSeats);
}

function handleAgentSearchToggle() {
  $(this).siblings('.input-field').fadeToggle().toggleClass('hide')
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
  } else {
    addAssigned(name);
  }

  availableSeats = customerData.totalSeats - assignments.length;
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
  selectAllToggle($inputs, selectAll);

  assignments = [];
  if (selectAll) {
    var k = 0;
    while ((k < availableSeats) && (k < $('.assignment-row').length)) {
      addAssigned($inputs[k].value)
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

function handleIgnoreTopics(e) {
  e.preventDefault();
  var $inputs = $('#topics-form :input');
  var values = captureFormData($inputs);
  window.location = './onboard-loading.html'
}
function handleSkipTopics() {
  window.location = './onboard-loading.html'
}

function captureFormData(inputs) {
  var values = {};
  inputs.each(function() {
      values[this.name] = $(this).val();
  });
  return values;
}

function animateLoader(position) {
  var current = position || 'training',
      currentView = $('#' + current + '-container'),
      next = loaders[loaders.indexOf(current) + 1];

  setTimeout(function() {
    $('#dash-view').fadeOut('slow');

    setTimeout(function() {
      $('#dash-view').children().removeClass('active-flex');
      $(currentView).addClass('active-flex');
      $('#dash-view').fadeIn("slow")
      return animateLoader(next)
    }, 700);
  }, 3000);
}
