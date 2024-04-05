// Iniciar el carrusel automáticamente al cargar la página

$(document).ready(function () {
  // Activar el carrusel
  $("#carouselExampleSlidesOnly").carousel({
    interval: 1000, // Cambia la imagen cada 10 segundos (ajusta según tu preferencia)
    ride: "carousel", // Esto debería estar en la configuración del carrusel, no en el JavaScript
    wrap: true, // Vuelve al principio después de llegar al final
  });
});

/* uso el framework sweetalert2 para mostrar una alerta con datos e imagenes*/
function mostrarAlertaConIcono() {
  // Obtener los valores de los campos del formulario
  var nombre = document.getElementById("nombre").value;
  var asunto = document.getElementById("asunto").value;
  var mensaje = document.getElementById("mensaje").value;

  // Mostrar el alerta personalizado con SweetAlert2
  Swal.fire({
    title: "Mensaje Enviado",
    html: `<img src="assets/img/viajes.svg" alt="Icono del menú" width="40px"><br>
               <b>Nombre:</b> ${nombre}<br>
               <b>Asunto:</b> ${asunto}<br>
               <b>Mensaje:</b> ${mensaje}`,
    icon: "success",
  });
}

/*efecto en el scroll no funciona revisando varias alternativas */
$(window).scroll(() => {
    const y = $(window).scrollTop();
  
    if (y > 1400) {
      $("#navhijo").css('background-color', 'black !important;'); // Cambiar el color de fondo a negro
    } else {
      $("#navhijo").css('background-color', 'transparent !important;'); // Restaurar el color de fondo a transparente
    }
});



 /* efecto en el header, afecta al carrusel*/ 

$(document).ready(() => {
    $('header').animate({
   
      opacity: '0.2'
    },5000);
  });
  

  
 
  $(document).ready(() => {
    $('.iconosfooter').animate({
      heigth: '10px',
      width: '50px',
      opacity: '0.5'
    },5000);
  });