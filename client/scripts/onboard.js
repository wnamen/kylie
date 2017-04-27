// THIS IS A FAKE OBJECT USED FOR TESTING DATA
var customerData = {
  totalSeats: 25
}

// THESE VARIABLES ESTABLISH THE STATE OF THE DASHBOARD
var currentLocation;
var selectAll = false;
var availableSeats;
var assignments = [];
var loaders = ['training', 'agents', 'cloning'];

$(document).ready(function() {
  currentLocation = $('#dash-view').data('location');

  if (currentLocation === 'assignment') {
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
  }

  if (currentLocation === 'login') {
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
  }

  if (currentLocation === 'integration') {
    $.validator.methods.pattern = function(value, element) {
      return (this.optional(element) || new RegExp(element.pattern).test(value));
    };

    $.validator.messages.pattern = "Invalid input entered.";

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
  }

  if (currentLocation === 'topics') {
    $('#topics-submit').click(handleIgnoreTopics);
    $('#topics-skip').click(handleSkipTopics);
    $('.tooltipped').tooltip({delay: 50});
  }

  if (currentLocation === 'loader') {
    animateLoader('agents');
  }
});

// THIS FUNCTION HANDLES THE LOGIN PAGE

function handleCreateLogin() {
  var $inputs = $('#login-form :input');
  var values = captureFormData($inputs);

  // submitRequest(values, url)

  window.location = './onboard-integration.html'
}

// THIS FUNCTION HANDLES THE INTEGRATION PAGE

function handleIntegration() {
  var $inputs = $('#login-form :input');
  var values = captureFormData($inputs);

  // submitRequest(values, url)

  window.location = './onboard-topics.html'
}

// THESE FUNCTIONS HANDLE THE TOPICS PAGE

function handleIgnoreTopics(e) {
  e.preventDefault();
  var $inputs = $('#topics-form :input');
  var values = captureFormData($inputs);
  // submitRequest(values, url)

  window.location = './onboard-loading.html'
}

function handleSkipTopics() {
  window.location = './onboard-loading.html'
}

// THESE FUNCTIONS HANDLE THE LOADING PAGE

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

// THESE FUNCTIONS HANDLE THE AGENT ASSIGNMENT PAGE

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
  // submitRequest(assignments, url)

  window.location = '../dashboard/dashboard-manager.html'
}

// SINAN - THESE ARE HELPER FUNCTIONS

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
  .then(function(res){ return res.json(); })
  .then(function(data){ alert( JSON.stringify( data ))})
  .catch(function (error){ console.log('Request failed', error)});
}
