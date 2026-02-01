// REGISTRO
document.getElementById("registerForm")?.addEventListener("submit", e => {
  e.preventDefault();

  // Obtener valores
  const email = regEmail.value;
  const password = regPassword.value;

  // Guardar en LocalStorage
  localStorage.setItem("user", JSON.stringify({ email, password }));

  alert("Usuario registrado");
  window.location.href = "index.html";
});

// LOGIN
document.getElementById("loginForm")?.addEventListener("submit", e => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const user = JSON.parse(localStorage.getItem("user"));

  // Validación básica
  if (user && user.email === email && user.password === password) {
    window.location.href = "dashboard.html";
  } else {
    alert("Credenciales incorrectas");
  }
});
