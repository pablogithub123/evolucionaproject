let currentIndex = 0; // Índice de la imagen actual
const images = document.querySelectorAll('.banner-img'); // Selecciona todas las imágenes del banner

// Función para mostrar la siguiente imagen en el banner
function showNextImage() {
    images[currentIndex].classList.remove('active'); // Oculta la imagen actual
    currentIndex = (currentIndex + 1) % images.length; // Incrementa el índice y lo reinicia si es necesario
    images[currentIndex].classList.add('active'); // Muestra la nueva imagen
}

// Inicia mostrando la primera imagen
images[currentIndex].classList.add('active');
// Cambia la imagen cada 4 segundos
setInterval(showNextImage, 4000);

// Manejo del menú de navegación
const navbarToggle = document.getElementById('navbar-toggle'); // Selecciona el botón de menú hamburguesa
const navbarMenu = document.getElementById('navbar-menu'); // Selecciona el menú de navegación

// Evento para alternar el menú al hacer clic en el botón
navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active'); // Muestra o esconde el menú
});

// Animación de letras en el texto de introducción
const textElement = document.getElementById('animated-text'); // Selecciona el elemento de texto
const text = textElement.innerText; // Obtiene el texto
textElement.innerHTML = ''; // Limpia el texto original

// Divide el texto en letras y crea un span para cada letra
text.split('').forEach((letter, index) => {
    const span = document.createElement('span'); // Crea un nuevo span
    span.textContent = letter === ' ' ? '\u00A0' : letter; // Mantiene los espacios
    span.classList.add('letter'); // Añade la clase para animación
    span.style.animationDelay = `${index * 0.2}s`; // Retrasa la aparición de cada letra
    textElement.appendChild(span); // Añade la letra al elemento de texto
});

// Función para reiniciar la animación
function resetAnimation() {
    textElement.innerHTML = ''; // Limpia el texto
    text.split('').forEach((letter, index) => {
        const span = document.createElement('span'); // Crea un nuevo span para cada letra
        span.textContent = letter === ' ' ? '\u00A0' : letter; // Mantiene los espacios
        span.classList.add('letter'); // Añade la clase para animación
        span.style.animationDelay = `${index * 0.1}s`; // Retrasa la aparición de cada letra
        textElement.appendChild(span); // Añade la letra al elemento de texto
    });
}

// Vuelve a iniciar la animación cada 5 segundos
setInterval(resetAnimation, 5000);



//-----------------------------------------
//linea de tiempo

function toggleDetails(index) {
    const details = document.querySelectorAll('.timeline-details');
    
    // Obtener el detalle seleccionado
    const selectedDetail = details[index];
  
    // Alternar la visibilidad del detalle seleccionado
    if (selectedDetail.style.display === 'block') {
      selectedDetail.style.display = 'none'; // Cerrar si ya está abierto
    } else {
      // Primero ocultar todos los detalles
      details.forEach((detail) => {
        detail.style.display = 'none';
      });
      // Luego abrir el seleccionado
      selectedDetail.style.display = 'block';
    }
  }





