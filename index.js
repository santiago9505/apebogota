
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function enlace()
{
  location.href = "https://forms.office.com/Pages/ResponsePage.aspx?id=gcPCyy4vk02R0VBskxas5_uaYzbSud1LmU6-S958qnFUMVZEQ0paT0JLVzFGOE5JNEJYVzNEWDQyUS4u"
}

var audio1 = document.getElementById("audio1-accesible");
var audio2 = document.getElementById("audio2-accesible");
var audio3 = document.getElementById("audio3-accesible");

var teclas = {
  ESC: 27,
  C: 67,
  SPACE: 32,
  CTRL: 17,
  BORRAR: 8,
  F: 70,
};

document.addEventListener("keyup", reproducirAudio);
function reproducirAudio(evento) 
{
  if(evento.keyCode == teclas.SPACE)
  {
    audio1.play();
  }
  if(evento.keyCode == teclas.ESC)
  {
    audio1.pause();
    audio2.play();  
  }
  if(evento.keyCode == teclas.CTRL)
  {
    audio1.pause();
    audio2.pause();
    audio3.pause();
  }
  if(evento.keyCode == teclas.BORRAR)
  {
    audio1.pause();
    audio3.play();
  }
  if(evento.keyCode == teclas.C)
  {
    enlace();
  }
}
