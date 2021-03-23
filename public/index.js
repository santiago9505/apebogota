var turno1 = document.getElementById("link-1");
var turno2 = document.getElementById("link-2");
var turno3 = document.getElementById("link-3");
var turno4 = document.getElementById("link-4");
var turno5 = document.getElementById("link-5");
var turno6 = document.getElementById("link-6");
var turno7 = document.getElementById("link-7");
var turno8 = document.getElementById("link-8");
var turno9 = document.getElementById("link-9");
var turno10 = document.getElementById("link-10");

var database = firebase.database();

var turno1Ref = database.ref("link");
var turno2Ref = database.ref("link2");
var turno3Ref = database.ref("link3");
var turno4Ref = database.ref("link4");
var turno5Ref = database.ref("link5");
var turno6Ref = database.ref("link6");
var turno7Ref = database.ref("link7");
var turno8Ref = database.ref("link8");
var turno9Ref = database.ref("link9");
var turno10Ref = database.ref("link_10");

turno1Ref.once("value").then(function (snap) {
  turno1.innerText = snap.val();
  turno1.href = snap.val();
});
turno2Ref.once("value").then(function (snap) {
  turno2.innerText = snap.val();
  turno2.href = snap.val();
});
turno3Ref.once("value").then(function (snap) {
  turno3.innerText = snap.val();
  turno3.href = snap.val();
});
turno4Ref.once("value").then(function (snap) {
  turno4.innerText = snap.val();
  turno4.href = snap.val();
});
turno5Ref.once("value").then(function (snap) {
  turno5.innerText = snap.val();
  turno5.href = snap.val();
});
turno6Ref.once("value").then(function (snap) {
  turno6.innerText = snap.val();
  turno6.href = snap.val();
});
turno7Ref.once("value").then(function (snap) {
  turno7.innerText = snap.val();
  turno7.href = snap.val();
});
turno8Ref.once("value").then(function (snap) {
  turno8.innerText = snap.val();
  turno8.href = snap.val();
});
turno9Ref.once("value").then(function (snap) {
  turno9.innerText = snap.val();
  turno9.href = snap.val();
});
turno10Ref.once("value").then(function (snap) {
  turno10.innerText = snap.val();
  turno10.href = snap.val();
});

//Tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$('#navbarNavDropdown [data-toggle="tooltip"]').tooltip({
  animated: "fade",
  placement: "bottom",
  html: true,
});
$('#another [data-toggle="tooltip"]').tooltip({
  animated: "fade",
  placement: "bottom",
  html: true,
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

const boton = document.getElementById("boton-contactanos");
boton.addEventListener("click", enlace);

function enlace() {
  location.href =
    "https://forms.office.com/Pages/ResponsePage.aspx?id=gcPCyy4vk02R0VBskxas5_uaYzbSud1LmU6-S958qnFUMVZEQ0paT0JLVzFGOE5JNEJYVzNEWDQyUS4u";
}

const otras_vacantes = document.getElementById("otras-vacantes");
otras_vacantes.addEventListener("click", vacantes);

function vacantes() {
  location.href =
    "https://agenciapublicadeempleo.sena.edu.co/spe-web/spe/cartelera";
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
var audio5 = document.getElementById("audio5-accesible");

var teclas = {
  ESC: 27,
  C: 67,
  SPACE: 32,
  CTRL: 17,
  BORRAR: 8,
  E: 69,
  O: 79,
  F: 70,
};

document.addEventListener("keyup", reproducirAudio);
function reproducirAudio(evento) {
  if (evento.keyCode == teclas.SPACE) {
    audio1.play();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  }
  if (evento.keyCode == teclas.BORRAR) {
    audio1.pause();
    audio2.play();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  }
  if (evento.keyCode == teclas.ESC) {
    audio1.pause();
    audio2.pause();
    audio3.play();
    audio4.pause();
    audio5.pause();
  }
  if (evento.keyCode == teclas.E) {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.play();
    audio5.pause();
  }
  if (evento.keyCode == teclas.O) {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.play();
  }

  if (evento.keyCode == teclas.CTRL) {
    audio1.pause();
    audio2.pause();
    audio3.pause();
    audio4.pause();
    audio5.pause();
  }

  if (evento.keyCode == teclas.C) {
    enlace();
  }
}
