window.addEventListener("load", () => {
  const audio = document.getElementById("bg-music");

  // Intentar reproducir automáticamente
  audio.play().catch(() => {
    // Si el navegador bloquea el autoplay, activamos con un clic
    document.body.addEventListener("click", () => {
      audio.play();
    }, { once: true });
  });
});