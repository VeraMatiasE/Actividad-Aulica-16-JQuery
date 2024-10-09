let doc = $(document);
doc.ready(inicializarEventos);

function inicializarEventos() {
  // 2.
  let parrafo1 = $("#parrafo1");
  parrafo1.click(clickParrafo1);

  // 3.
  let tabla1 = $("#tabla1");
  tabla1.click(cambiarFondoTabla1);

  // 4.
  let elementosListaSinOrden = $("ul li");
  elementosListaSinOrden.click(ocultarElemento);

  // 5. Selección de elementos utilizando los selectores CSS
  let tabla2 = $("#tabla2");
  tabla2.click(cambiarFondoTabla2);

  //6.
  let botonLetraPequena = $("#botonLetraPequena");
  let botonLetraMediana = $("#botonLetraMediana");
  let botonLetraGrande = $("#botonLetraGrande");

  botonLetraPequena.click(cambiarNoticiaLetraPequena);
  botonLetraMediana.click(cambiarNoticiaLetraMediana);
  botonLetraGrande.click(cambiarNoticiaLetraGrande);

  // 7.
  let botonTabla4 = $("#botonTabla4");
  botonTabla4.click(cambiarTextoTabla4);

  // 8.
  let botonGoogle = $("#botonGoogle");
  let botonMicrosoft = $("#botonMicrosoft");
  let botonMozilla = $("#botonMozilla");

  botonGoogle.click(clickGoogleBoton);
  botonMicrosoft.click(clickMicrosoftBoton);
  botonMozilla.click(clickMozillaBoton);

  // 9.
  let botonAgregarEstiloTabla = $("#agregarEstiloTabla");
  let botonQuitarEstiloTabla = $("#quitarEstiloTabla");

  botonAgregarEstiloTabla.click(agregarEstiloTabla);
  botonQuitarEstiloTabla.click(quitarEstiloTabla);

  // 10.
  let botonMostrarHead = $("#mostrarHead");
  let botonMostrarBody = $("#mostrarBody");

  botonMostrarHead.click(mostrarHead);
  botonMostrarBody.click(mostrarBody);

  // 11.
  let strongTexto = $("strong");
  strongTexto.click(ocultarElemento);

  // 12.
  let camposTabla6 = $("#tabla6 td");
  camposTabla6.mouseover(cambiarFondoAleatorio);
  camposTabla6.mouseout(quitarFondo);

  // 13.
  let camposTabla7 = $("#tabla7 td");
  camposTabla7.hover(cambiarFondoAleatorio, quitarFondo);

  // 14.
  let divMouseCoordenada = $("#divMouseCoordenada");
  divMouseCoordenada.mousemove(mostrarCoordenadaMouse);
  divMouseCoordenada.mouseout(quitarCoordenadaMouse);

  // 15.
  let botonFondo1 = $("#botonFondo1");
  let botonFondo2 = $("#botonFondo2");

  botonFondo1.mousedown(cambiarFondoAleatorio);
  botonFondo1.mouseup(quitarFondo);
  botonFondo2.mousedown(cambiarFondoAleatorio);
  botonFondo2.mouseup(quitarFondo);

  // 16.
  let divDobleclick = $("#divDobleclick");
  divDobleclick.dblclick(dobleClickRedimensionar);

  // 17.
  let inputFocus1 = $("#inputFocus1");
  let inputFocus2 = $("#inputFocus2");

  inputFocus1.focus(cambiarLetraAzul);
  inputFocus2.focus(cambiarLetraAzul);

  // 18.
  let textoBlur = $('#formularioBlur input[type="text"');
  textoBlur.blur(comprobarText);

  // 20.
  $("#showHideDiv2").hide();
  let divShowHide1 = $("#showHideDiv1");
  divShowHide1.click(ocultarParrafosDiv);

  // 21.
  $("#showHideDiv4").hide();
  let divShowHide3 = $("#showHideDiv3");
  divShowHide3.click(ocultarParrafosDiv2);

  // 22.
  $("#showHideDiv6").hide();
  let divShowHide5 = $("#showHideDiv5");
  divShowHide5.click(bajarOpacidadDiv);

  // 24.
  $("#resaltarSubdominioAR").click(resaltarSubdominiosAR);
}

// 2.
function clickParrafo1() {
  alert("Se presionó el primer párrafo.");
}

// 3.
function obtenerColorAleatorio() {
  return `rgb(${Math.random() * 255},${Math.random() * 255},${
    Math.random() * 255
  })`;
  // 255 * 255 * 255 = 16581375
  //return `#${Math.ceil(Math.random() * 0xffffff)}`;
}

function cambiarFondoTabla1() {
  let tabla1 = $("#tabla1");
  tabla1.css("background-color", obtenerColorAleatorio());
}

// 4.
function ocultarElemento() {
  let e = $(this);
  e.hide();
}

// 5.
function cambiarFondoTabla2() {
  let filas = $("#tabla2 tr");
  filas.css("background-color", obtenerColorAleatorio());
}

// 6.
function cambiarNoticiaLetraPequena() {
  let descripcion = $(".noticia p");
  descripcion.css("font-size", "14px");
}

function cambiarNoticiaLetraMediana() {
  let descripcion = $(".noticia p");
  descripcion.css("font-size", "16px");
}

function cambiarNoticiaLetraGrande() {
  let descripcion = $(".noticia p");
  descripcion.css("font-size", "18px");
}

// 7.
function cambiarTextoTabla4() {
  let contenidoTabla4 = $("#tabla4 td");
  contenidoTabla4.text("-");
}

// 8.
function clickGoogleBoton() {
  let link = $("#linkDinamica");
  link.attr("href", "https://www.google.com");
  link.text("Google");
}

function clickMicrosoftBoton() {
  let link = $("#linkDinamica");
  link.attr("href", "https://www.microsoft.com/");
  link.text("Microsoft");
}

function clickMozillaBoton() {
  let link = $("#linkDinamica");
  link.attr("href", "https://www.mozilla.org/");
  link.text("Mozilla");
}

// 9.
function agregarEstiloTabla() {
  let encabezadoTabla = $(".tabla-con-estilo thead");
  encabezadoTabla.addClass("encabezado-tabla");
  let cuerpoTabla = $(".tabla-con-estilo tbody");
  cuerpoTabla.addClass("cuerpo-tabla");
}

function quitarEstiloTabla() {
  let encabezadoTabla = $(".tabla-con-estilo thead");
  encabezadoTabla.removeClass("encabezado-tabla");
  let cuerpoTabla = $(".tabla-con-estilo tbody");
  cuerpoTabla.removeClass("cuerpo-tabla");
}

// 10.
function mostrarHead() {
  let head = $("head");
  alert(head.html());
}

function mostrarBody() {
  let body = $("body");
  alert(body.html());
}

// 12.
function cambiarFondoAleatorio() {
  let e = $(this);
  e.css("background-color", obtenerColorAleatorio());
}

function quitarFondo() {
  let e = $(this);
  e.css("background-color", "unset");
}

// 14.
function mostrarCoordenadaMouse(evento) {
  let display = $("#displayCoordenadas");
  let x = evento.clientX;
  let y = evento.clientY;
  display.text(`x: ${x} - y: ${y}`);
}

function quitarCoordenadaMouse() {
  let display = $("#displayCoordenadas");
  display.text("El mouse no se encuentra dentro del div");
}

// 16.
function dobleClickRedimensionar() {
  let e = $(this);
  if (e.width() != 800) {
    e.width(800);
    e.height(70);
  } else {
    e.width(250);
    e.height(250);
  }
}

// 17.
function cambiarLetraAzul() {
  let e = $(this);
  e.css("color", "blue");
}

// 18.
function comprobarText() {
  let e = $(this);
  let value = e.val();
  if (value.length == 0) {
    alert("El campo de texto no debe de estar vacío");
  }
}

// 20.
function ocultarParrafosDiv() {
  let parrafos = $("#showHideDiv1");
  parrafos.hide("slow", mostrarParrafosDiv);
}

function mostrarParrafosDiv() {
  let parrafos = $("#showHideDiv2");
  parrafos.show("slow");
}

// 21.
function ocultarParrafosDiv2() {
  let parrafos = $("#showHideDiv3");
  parrafos.fadeOut("slow", mostrarParrafosDiv2);
}

function mostrarParrafosDiv2() {
  let parrafos = $("#showHideDiv4");
  parrafos.fadeIn("slow");
}

// 22.
function bajarOpacidadDiv() {
  let parrafo = $("#showHideDiv5");
  parrafo.fadeTo("slow", 0.2, mostrarParrafosDiv3);
}

function mostrarParrafosDiv3() {
  let parrafos = $("#showHideDiv6");
  parrafos.fadeIn("slow");
}

// 24.
function resaltarSubdominiosAR() {
  let link = $("#listaDominios a");
  link.each(resaltarElemento);
}

function resaltarElemento() {
  let e = $(this);
  if (e.attr("href").indexOf(".ar") != -1) {
    e.css("background-color", "blue");
    e.css("color", "white");
  }
}
