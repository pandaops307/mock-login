/* ===== PAGE SWITCHER ===== */
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page =>
    page.classList.remove("active")
  );
  document.getElementById(pageId).classList.add("active");
}

/* ===== LOGIN ===== */
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("user", user);
    document.getElementById("welcomeText").innerText = `Welcome, ${user}!`;
    showPage("dashboardPage");
  } else {
    alert("Invalid credentials");
  }
}

/* ===== LOGOUT ===== */
function logout() {
  localStorage.removeItem("user");
  showPage("loginPage");
}

/* ===== AUTH PROTECTION ===== */
function checkAuth() {
  const user = localStorage.getItem("user");
  if (user) {
    document.getElementById("welcomeText").innerText = `Welcome, ${user}!`;
    showPage("dashboardPage");
  }
}
checkAuth();

/* ===== PASSWORD TOGGLE ===== */
function togglePassword() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

/* ===== NAVIGATION ===== */
function goProfile() {
  showPage("profilePage");
}

function goDashboard() {
  showPage("dashboardPage");
}

/* ===== PARTICLE BACKGROUND ===== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.5 + 0.5,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.4)";

  particles.forEach(p => {
    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
