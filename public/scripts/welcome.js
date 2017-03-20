
var
  name,
  email,
  role;

$(document).ready(function(){

// validate the role
  $("input[name=question1]").on("click",function(){
    $("#form-1-btn").removeAttr("disabled");
  })
  $('#form-1-btn').click(form1capture);


  $("input[name=persons_name]").on("keyup",form2capture);
  $('#form-2-btn').click(form2Transition);
  $('#form-2-back').click(form2BackTransition);
  $('#form-3-back').click(form3BackTransition);
  $("input[name=person_email]").on("keyup",form3capture);
  $('#form-3-btn').click(form3Transition);
});

function form2capture(){
  name = $("#name").val();
  if(name !== ""){
    $("#form-2-btn").removeAttr("disabled",false);
  }
  if(name==""){
    $("#form-2-btn").attr("disabled","true");
  }
}
function form1capture(){
  if(document.getElementById('q1-option1').checked){
      role = $("#q1-option1").val();
      form1Transition();
    }else if(document.getElementById('q1-option2').checked){
      role = $("#q1-option2").val();
      form1Transition();
    }else if(document.getElementById('q1-option3').checked){
      role = $("#q1-option3").val();
      form1Transition();
    }else if(document.getElementById('q1-option4').checked){
      role = $("#q1-option4").val();
      form1Transition();
    }
}

function form3capture(){
  email = $("#email").val();
  if(email !== ""){
    $("#form-3-btn").removeAttr("disabled",false);
  }
  if(email==""){
    $("#form-3-btn").attr("disabled","true");
  }
}
function form1Transition (){
    $('#form-1').addClass('form-hide');
    $('#form-2').removeClass('form-hide');

    $('#form-1-circle').addClass('fa-circle-o');
    $('#form-1-circle').removeClass('fa-circle');

    $('#form-2-circle').addClass('fa-circle');
    $('#form-2-circle').removeClass('fa-circle-o');
}

function form2Transition (){
  if (role !== "Sales/Marketing"){
  $('#form-2').addClass('form-hide');
  $('#form-3').removeClass('form-hide');

  $('#form-2-circle').addClass('fa-circle-o');
  $('#form-2-circle').removeClass('fa-circle');

  $('#form-3-circle').addClass('fa-circle');
  $('#form-3-circle').removeClass('fa-circle-o');
  }else{
    postData("connect");
  }

}

function form3Transition (){
  $("#email").removeClass("failedValidation");
  var emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var OK = emailVal.exec(email);
  if (OK){
    postData("waitlist");
  }else{
    $("#email").addClass("failedValidation");
    window.setTimeout(function(){$("#email").removeClass("failedValidation")},1000);
  }

}


function postData(bool){
  $.ajax({
      type: "post",
      data: {"name":name,"role":role,"email":email},
  }).done(function() {
  })
  .fail(function() {
  })
  .always(function() {
    if (bool == "connect"){
        window.location.href="/connect.html";
      }else if (bool == "waitlist"){
        window.location.href="/waitlist.html";
      }
  });
}



function form2BackTransition (){

  $('#form-1').removeClass('form-hide');
  $('#form-2').addClass('form-hide');

  $('#form-1-circle').removeClass('fa-circle-o');
  $('#form-1-circle').addClass('fa-circle');

  $('#form-2-circle').removeClass('fa-circle');
  $('#form-2-circle').addClass('fa-circle-o');
}

function form3BackTransition (){

  $('#form-2').removeClass('form-hide');
  $('#form-3').addClass('form-hide');

  $('#form-2-circle').removeClass('fa-circle-o');
  $('#form-2-circle').addClass('fa-circle');

  $('#form-3-circle').removeClass('fa-circle');
  $('#form-3-circle').addClass('fa-circle-o');
}
