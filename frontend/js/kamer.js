console.log("kamer.js geladen ✅");

let app = document.getElementById("app");
// Sample data for rooms (generated using all photos in the fotos/ folder)
const images = [
  "fotos/foto1.png",
  "fotos/foto10.png",
  "fotos/foto11.png",
  "fotos/foto12.png",
  "fotos/foto13.png",
  "fotos/foto14.png",
  "fotos/foto15.png",
  "fotos/foto3.png",
  "fotos/foto4.png",
  "fotos/foto5.png",
  "fotos/foto6.png",
  "fotos/foto7.png",
  "fotos/foto8.png",
  "fotos/Foto9.png",
  "fotos/foto10.png",
  "fotos/foto11.png",
  "fotos/foto12.png",
  "fotos/gezellige-woonkamer-van-een-modern-appartement.jpg"
  , 
];

const cities = [
  "Maastricht","Alkmaar","Arnhem","Amsterdam","Rotterdam","Utrecht","Eindhoven","Groningen",
  "Den Haag","Tilburg","Haarlem","Nijmegen","Enschede","Breda","Leiden","Zwolle","Amersfoort",
  "Almere","Delft","Apeldoorn","Deventer","Venlo","Hilversum","Emmen","Roosendaal","Oss","Dordrecht","Lelystad"
];

const roomsData = Array.from({ length: 30 }, (_, i) => {
  const img = images[i % images.length];
  const city = cities[i % cities.length];
  const price = (580 + (i * 17) % 300).toString().padStart(3, "");
  const availabilityDates = ["1 Dec 2025","15 Dec 2025","1 Jan 2026","15 Nov 2025","20 Nov 2025"];
  const available = availabilityDates[i % availabilityDates.length];

  return {
    image: img,
    price: price,
    location: city,
    available: available
  };
});

let page = 0;
const itemsPerPage = 3;
let loading = false;

let kamerContainer;

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function attachImageFallbacks() {
  const imgs = kamerContainer.querySelectorAll('.kamer-img');
  imgs.forEach(img => {
    img.onerror = () => {
      if (!img.dataset.fallbackSet) {
        img.dataset.fallbackSet = '1';
        img.src = 'fotos/foto1.png'; o
      }
    };
  });
}

function createRoomCard(room) {
    return `
        <div class="kamer-card">
            <img src="${room.image}" alt="Room" class="kamer-img" loading="lazy">
            <h3>Room</h3>
            <p class="Price">€ ${room.price}/month</p>
            <p>Location: ${room.location}</p>
            <p>Available: ${room.available}</p>
            <div class="knoppen">
                <button class="more">Read more..</button>
            </div>
        </div>
    `;
}

function loadMoreRooms() {
    if (loading) return;
    loading = true;

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const roomsToLoad = roomsData.slice(start, end);

  if (roomsToLoad.length === 0) {
    shuffleArray(roomsData);
    page = 0;
  }

  const sliceStart = page * itemsPerPage;
  const sliceEnd = sliceStart + itemsPerPage;
  const batch = roomsData.slice(sliceStart, sliceEnd);
  if (batch.length > 0) {
    const roomsHTML = batch.map(createRoomCard).join('');
    kamerContainer.insertAdjacentHTML('beforeend', roomsHTML);
    attachImageFallbacks();
    page++;
    if (observer) {
      const sentinel = document.getElementById('scroll-sentinel');
      if (sentinel) kamerContainer.appendChild(sentinel);
    }
  }

  loading = false;
}

let observer;
function createObserver() {
  let sentinel = document.getElementById('scroll-sentinel');
  if (!sentinel) {
    sentinel = document.createElement('div');
    sentinel.id = 'scroll-sentinel';
    sentinel.style.width = '100%';
    sentinel.style.height = '1px';
  }

  kamerContainer.appendChild(sentinel);

  if (observer) observer.disconnect();

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !loading) {
        loadMoreRooms();
      }
    });
  }, { root: null, rootMargin: '300px', threshold: 0.01 });

  observer.observe(sentinel);
}

function init() {
  if (!app) app = document.getElementById('app');
  if (!app) {
    console.error('No #app element found — cannot render rooms.');
    return;
  }

  app.innerHTML = `
    <h1 style="text-align:center; margin-top:3rem;">Beschikbare kamers</h1>
    <div class="kamer-container"></div>
  `;

  kamerContainer = app.querySelector('.kamer-container');

  loadMoreRooms();
  function ensureFillViewport() {
    let attempts = 0;
    const maxAttempts = 20; 
    while (document.documentElement.scrollHeight <= window.innerHeight && attempts < maxAttempts) {
      const before = page;
      loadMoreRooms();
      
      if (page === before) break;
      attempts++;
    }
  }
  ensureFillViewport();
  
  createObserver();
  attachImageFallbacks();

  console.log('Kamer page setup complete');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

