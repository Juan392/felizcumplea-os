const audio = document.getElementById('miAudio');
const botonReproducir = document.getElementById('reproducirBtn');

// Agrega un evento de clic al botón
botonReproducir.addEventListener('click', () => {
  audio.play(); // Reproduce el audio
  botonReproducir.disabled = true; // Desactiva el botón después de hacer clic
});