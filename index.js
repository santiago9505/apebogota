
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

// var correo = document.getElementById('email');
// var password = document.getElementById('password');
// var error = document.getElementById('error');
// error.style.color = 'red';



// function enviarFormulario(){
//   console.log("enviando formulario");

  

//   var mensajesError = [];

//   if(correo.value === "sguaqueta@sena.edu.co" && password.value ==='Sena2020*'){
//     mensajesError.push('Ingresa tu contraseña');

//     var turnos = [];
//     const funcionarios = document.getElementById('funcionarios')
//     const parrafo = document.getElementById('atencion1');
//     const modulo = parrafo.textContent;
//     const ancla = document.getElementById('salelink');

//     parrafo.addEventListener('click', tuLink);
//       function makeCounter(n) {
//         let count = n; 

//         return {
//           increase: function() {
//             count = count + n;
//           },
//           getCount: function() {
//             return count;
//           }
//         }
//       }
//       let counter = makeCounter(0);
//       counter.increase();

//       function tuLink() {
//         let link = prompt('link de tu reunión');
//         parrafo.textContent = "Turno: " + n;
//         ancla.textContent = link;
//         ancla.href = link;
//       }
    

   
//   }

//   if(correo.value === null || correo.value ===''){
//     mensajesError.push('Ingresa tu correo');
//   }


//   if(password.value === null || password.value ===''){
//     mensajesError.push('Ingresa tu contraseña');
//   }

//   error.innerHTML = mensajesError.join(', ');

//   return false;
// }

var audio1 = document.getElementById("audio1-accesible");
var audio2 = document.getElementById("audio2-accesible");
var audio3 = document.getElementById("audio3-accesible");
var audio4 = document.getElementById("audio-emprendimiento");




  



var teclas = {
  ESC: 27,
  C: 67,
  SPACE: 32,
  CTRL: 17,
  BORRAR: 8,
  E: 69,
  F: 70
};

document.addEventListener("keyup", reproducirAudio);
function reproducirAudio(evento) 
{
  
  if(evento.keyCode == teclas.SPACE)
  {
    audio1.play();
    audio2.pause();
    audio3.pause();
    audio4.pause();
  }
  if(evento.keyCode == teclas.BORRAR)
  {
    audio1.pause();
    audio2.pause();
    audio3.play();
    audio4.pause();
  }
  if(evento.keyCode == teclas.E)
  {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.play();
  }
  if(evento.keyCode == teclas.ESC)
  {
    audio1.pause();
    audio3.pause();
    audio2.play();  
    audio4.pause();
  }
  if(evento.keyCode == teclas.CTRL)
  {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
  }
 
  if(evento.keyCode == teclas.C)
  {
    enlace();
  }
}


