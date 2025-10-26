const app = document.getElementById("app");


function createHeader() {
  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
    <div class="left">Taal</div>  
    <div class="right">
      <a href="#">Aanmelden</a>
      <a href="#">Inloggen</a>
    </div>`;
  app.appendChild(header);
}

function createHero() {
  const hero = document.createElement("section");
  hero.className = "hero";
  hero.innerHTML = `
    <div class="overlay">
      <h1 class="title">RoomUs</h1>
      <button id="searchBtn" class="cta">kamer zoeken</button>
    </div>`;
  app.appendChild(hero);

  document.getElementById("searchBtn").addEventListener("click", () => {
    console.log("Navigating to kamer.html");
    window.location.href = "kamer.html";
  });
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `
    <a href="#">Hoe het werkt</a>
    <a href="#">About us</a>
    <a href="#">Contact</a>
  `;
  app.appendChild(footer);
}

createHeader();
createHero();
createFooter();
