const turno1 = document.getElementById("link-1");
const turno2 = document.getElementById("link-2");
// const turno3 = document.getElementById("link-3");
// const turno4 = document.getElementById("link-4");
// const turno5 = document.getElementById("link-5");
// const turno6 = document.getElementById("link-6");
// const turno7 = document.getElementById("link-7");
// const turno8 = document.getElementById("link-8");
// const turno9 = document.getElementById("link-9");
// const turno10 = document.getElementById("link-10");

const database = firebase.database();
const rootRef = database.ref("turnos");
const turno1Ref = database.ref("turnos/1/link");
const turno2Ref = database.ref("turnos/2/link");
// const turno3Ref = database.ref("turnos/3/link");
// const turno4Ref = database.ref("turnos/4/link");
// const turno5Ref = database.ref("turnos/5/link");
// const turno6Ref = database.ref("turnos/6/link");
// const turno7Ref = database.ref("turnos/7/link");
// const turno8Ref = database.ref("turnos/8/link");
// const turno9Ref = database.ref("turnos/9/link");
// const turno10Ref = database.ref("turnos/10/link");

//Prueba
// const turnoId = document.getElementById("turnoId");
// const link = document.getElementById("link");
// const addBtn = document.getElementById("addBtn");
// const updateBtn = document.getElementById("updateBtn");
// const removeBtn = document.getElementById("removeBtn");

// addBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   rootRef.child(turnoId.value).set({
//     link: link.value,
//   });
// });

// updateBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const newData = {
//     link: link.value,
//   };
//   rootRef.child(turnoId.value).update(newData);
// });

turno1Ref.on("value", (snap) => {
  turno1.innerHTML = snap.val();
  turno1.href = snap.val();
});

turno1.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = turno1.href;
  const newData = {
    link: "En este momento no se encuentra disponible",
  };
  rootRef.child("1").update(newData);
});

turno2Ref.on("value", (snap) => {
  turno2.innerHTML = snap.val();
  turno2.href = snap.val();
});

turno2.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = turno2.href;
  const newData = {
    link: "En este momento no se encuentra disponible",
  };
  rootRef.child("2").update(newData);
});

// turno3Ref.on("value", (snap) => {
//   turno3.innerHTML = snap.val();
//   turno3.href = snap.val();
// });

// turno3.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.href = turno3.href;
//   const newData = {
//     link: "En este momento no se encuentra disponible",
//   };
//   rootRef.child("3").update(newData);
// });

// turno4Ref.on("value", (snap) => {
//   turno4.innerHTML = snap.val();
//   turno4.href = snap.val();
// });

// turno4.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.href = turno4.href;
//   const newData = {
//     link: "En este momento no se encuentra disponible",
//   };
//   rootRef.child("4").update(newData);
// });

// turno5Ref.on("value", (snap) => {
//   turno5.innerHTML = snap.val();
//   turno5.href = snap.val();
// });

// turno5.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.href = turno5.href;
//   const newData = {
//     link: "En este momento no se encuentra disponible",
//   };
//   rootRef.child("5").update(newData);
// });

// turno6Ref.on("value", (snap) => {
//   turno6.innerHTML = snap.val();
//   turno6.href = snap.val();
// });

// turno6.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.href = turno6.href;
//   const newData = {
//     link: "En este momento no se encuentra disponible",
//   };
//   rootRef.child("6").update(newData);
// });

// turno7Ref.on("value", (snap) => {
//   turno7.innerHTML = snap.val();
//   turno7.href = snap.val();
// });

// turno7.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.href = turno7.href;
//   const newData = {
//     link: "En este momento no se encuentra disponible",
//   };
//   rootRef.child("7").update(newData);
// });

// turno8Ref.on("value", (snap) => {
//   turno8.innerHTML = snap.val();
//   turno8.href = snap.val();
// });

// turno8.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.href = turno8.href;
//   const newData = {
//     link: "En este momento no se encuentra disponible",
//   };
//   rootRef.child("8").update(newData);
// });

// turno9Ref.on("value", (snap) => {
//   turno9.innerHTML = snap.val();
//   turno9.href = snap.val();
// });

// turno9.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.href = turno9.href;
//   const newData = {
//     link: "En este momento no se encuentra disponible",
//   };
//   rootRef.child("9").update(newData);
// });

// turno10Ref.on("value", (snap) => {
//   turno10.innerHTML = snap.val();
//   turno10.href = snap.val();
// });

// turno10.addEventListener("click", (e) => {
//   e.preventDefault();
//   window.location.href = turno10.href;
//   const newData = {
//     link: "En este momento no se encuentra disponible",
//   };
//   rootRef.child("10").update(newData);
// });

function enlace() {
  location.href =
    "https://forms.office.com/Pages/ResponsePage.aspx?id=gcPCyy4vk02R0VBskxas5_uaYzbSud1LmU6-S958qnFUMVZEQ0paT0JLVzFGOE5JNEJYVzNEWDQyUS4u";
}

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
