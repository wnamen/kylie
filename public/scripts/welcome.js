
var 
  name,
  email,
  role;

$(document).ready(function(){

  $("input[name=question1]").on("click",function(){
    $("#form-1-btn").removeAttr("disabled");
  })
  $('#form-1-btn').click(form1capture);
  $('#form-2-btn').click(form2Transition);

  $('#form-2-back').click(form2BackTransition);
  $('#form-3-back').click(form3BackTransition);

});


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
function form1Transition (){
    $('#form-1').addClass('form-hide');
    $('#form-2').removeClass('form-hide');

    $('#form-1-circle').addClass('fa-circle-o');
    $('#form-1-circle').removeClass('fa-circle');

    $('#form-2-circle').addClass('fa-circle');
    $('#form-2-circle').removeClass('fa-circle-o');
}

function form2Transition (){

  $('#form-2').addClass('form-hide');
  $('#form-3').removeClass('form-hide');

  $('#form-2-circle').addClass('fa-circle-o');
  $('#form-2-circle').removeClass('fa-circle');

  $('#form-3-circle').addClass('fa-circle');
  $('#form-3-circle').removeClass('fa-circle-o');

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
