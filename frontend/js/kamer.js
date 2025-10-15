console.log("kamer.js geladen ✅");

const app = document.getElementById("app");

function createKamerPage() {
  const container = document.createElement("div");
  container.className = "kamer-pagina";
  container.innerHTML = `
    <h1>Beschikbare kamers</h1>
    <p>Welkom op de kamerpagina van RoomUs!</p>
    <button id="backBtn">⬅️ Terug naar home</button>
  `;
  app.appendChild(container);

  // Terugknop stuurt terug naar index.html
  document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

createKamerPage();
