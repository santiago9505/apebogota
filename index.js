
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


var audio = document.getElementById("audio-accesible")

var teclas = {
  ESC: 27,
  C: 67,
  F: 70
};

document.addEventListener("keyup", reproducirAudio);
function reproducirAudio(evento) 
{
  if(evento.keyCode == teclas.ESC)
  {
    audio.play();  
  }
  else {
    audio.pause(audio);
  }
}
