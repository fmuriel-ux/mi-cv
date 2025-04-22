document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("modoToggle");
  
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
  
      const isDark = document.body.classList.contains("dark-mode");
      toggleBtn.textContent = isDark ? "☀️" : "🌙";
      toggleBtn.setAttribute("aria-label", isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
  
      // Guardar preferencia en localStorage
      localStorage.setItem("modoOscuro", isDark ? "true" : "false");
    });
  
    // Cargar preferencia guardada
    const modoGuardado = localStorage.getItem("modoOscuro");
    if (modoGuardado === "true") {
      document.body.classList.add("dark-mode");
      toggleBtn.textContent = "☀️";
      toggleBtn.setAttribute("aria-label", "Cambiar a modo claro");
    }
  });