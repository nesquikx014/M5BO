// frontend/main.js
const API = "http://127.0.0.1:5000/api/rooms"; // waar de Python server draait
const app = document.getElementById("app");

/* --- Bouw de pagina via JS --- */

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
  

  document.getElementById("searchBtn").addEventListener("click", loadRooms);
  
}

async function loadRooms() {
  try {
    const res = await fetch(API);
    if (!res.ok) throw new Error("Netwerkfout");
    const rooms = await res.json();
    showRoomList(rooms);
  } catch (err) {
    alert("Kon kamers niet laden: " + err.message);
  }
}

// Toon de kamers en een klein formulier om eentje toe te voegen
function showRoomList(rooms) {
  // verwijder oude lijst als die er is
  const old = document.querySelector(".rooms");
  if (old) old.remove();

  const container = document.createElement("div");
  container.className = "rooms";
  container.innerHTML = `<h2>Beschikbare kamers</h2>`;
  const list = document.createElement("div");
  list.className = "list";

  rooms.forEach(r => {
    const p = document.createElement("p");
    p.textContent = `${r.stad} — €${r.prijs}`;
    list.appendChild(p);
  });

  container.appendChild(list);

  // Korte form om nieuwe kamer toe te voegen
  const form = document.createElement("form");
  form.className = "addRoomForm";
  form.innerHTML = `
    <h3>Nieuwe kamer toevoegen</h3>
    <input name="stad" placeholder="Stad" required />
    <input name="prijs" placeholder="Prijs" required type="number" />
    <button type="submit">Toevoegen</button>
  `;

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // voorkom pagina herladen
    const formData = new FormData(form);
    const data = {
      stad: formData.get("stad"),
      prijs: Number(formData.get("prijs"))
    };
    await addRoom(data);
    form.reset();
    loadRooms(); // refresh lijst
  });

  container.appendChild(form);
  app.appendChild(container);
}

// Verstuur nieuwe kamer naar backend (POST)
async function addRoom(room) {
  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(room)
    });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.error || "Serverfout");
    }
    return await res.json();
  } catch (err) {
    alert("Kon kamer niet toevoegen: " + err.message);
  }
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

/* start */
createHeader();
createHero();
createFooter();


const btn = document.getElementById("searchBtn");
if (btn) {
  btn.addEventListener("touchstart", () => btn.classList.add("active"));
  btn.addEventListener("touchend", () => btn.classList.remove("active"));
}