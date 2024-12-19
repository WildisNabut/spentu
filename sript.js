function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark");

  // Menampilkan atau menyembunyikan ikon berdasarkan mode
  const iconMoon = document.getElementById("iconMoon");
  const iconSun = document.getElementById("iconSun");

  if (body.classList.contains("dark")) {
    iconMoon.classList.add("hidden");
    iconSun.classList.remove("hidden");
  } else {
    iconMoon.classList.remove("hidden");
    iconSun.classList.add("hidden");
  }
}
