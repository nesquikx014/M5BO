console.log("kamer.js geladen ✅");

const app = document.getElementById("app");

app.innerHTML = `
  <h1 style="text-align:center; margin-top:3rem;">Beschikbare kamers</h1>
  
  <div class="kamer-container">

    <div class="kamer-card">
      <img src="fotos/foto1.png" alt="" class="kamer-img" loading="lazy">
      <h3>Room</h3>
      <p class="Price">€ 749,00/month</p>
      <p>Location: Maastricht</p>
      <p>Available: 31 Oct 2025</p>
      <button class="more">Read more..</button>
    </div>

    <div class="kamer-card">
      <img src="fotos/gezellige-woonkamer-van-een-modern-appartement.jpg" alt="Comfort Kamer" class="kamer-img" loading="lazy">
      <h3>Room</h3>
      <p class="Price">€ 679,00/month</p>
      <p>Location: Alkmaar</p>
      <p>Available: 14 Nov 2025</p>
      <div class="knoppen">
        <button class="more">Read more..</button>
      </div>
    </div>

    <div class="kamer-card">
      <img src="fotos/foto3.png" alt="Budget Kamer" class="kamer-img" loading="lazy">
      <h3>Room</h3>
      <p class="Price">€ 599,00/month</p>
      <p>Location: Arnhem</p>
      <p>Available: 13 Dec 2025</p>
      <div class="knoppen">
        <button class="more">Read more..</button>
      </div>
    </div>

    <div class="kamer-card">
      <img src="fotos/foto4.png" alt="Room" class="kamer-img" loading="lazy">
      <h3>Room</h3>
      <p class="Price">€ 599,00/month</p>
      <p>Location: Arnhem</p>
      <p>Available: 13 Dec 2025</p>
      <div class="knoppen">
        <button class="more">Read more..</button>
      </div>
    </div>

    <div class="kamer-card">
      <img src="fotos/foto5.png" alt="Room" class="kamer-img" loading="lazy">
      <h3>Room</h3>
      <p class="Price">€ 599,00/month</p>
      <p>Location: Arnhem</p>
      <p>Available: 13 Dec 2025</p>
      <div class="knoppen">
        <button class="more">Read more..</button>
      </div>
    </div>

    <!-- keep adding your other kamer-cards here, they will be handled by the infinite scroll -->
  </div>
`;

/* Improved infinite scroll implementation */

// Select the container
const kamerContainer = document.querySelector(".kamer-container");

// Sample data for rooms (you can replace this with your actual data)
const roomsData = [
    {
        image: "fotos/foto1.png",
        price: "749,00",
        location: "Maastricht",
        available: "31 Oct 2025"
    },
    {
        image: "fotos/foto15.png",
        price: "679,00",
        location: "Alkmaar",
        available: "14 Nov 2025"
    },
    {
        image: "fotos/foto4.png",
        price: "599,00",
        location: "Arnhem",
        available: "13 Dec 2025"
    },
    {
        image: "fotos/foto5.png",
        price: "599,00",
        location: "Arnhem",
        available: "13 Dec 2025"
    },
    {
        image: "fotos/image.png",
        price: "599,00",
        location: "Arnhem",
        available: "13 Dec 2025"
    },
    {
        image: "fotos/gezellige-woonkamer-van-een-modern-appartement.jpg",
        price: "825,00",
        location: "Amsterdam",
        available: "1 Dec 2025"
    },
    {
        image: "fotos/foto4.png",
        price: "695,00",
        location: "Rotterdam",
        available: "15 Nov 2025"
    },
    {
        image: "fotos/foto5.png",
        price: "750,00",
        location: "Utrecht",
        available: "1 Jan 2026"
    },
    {
        image: "fotos/image.png",
        price: "580,00",
        location: "Eindhoven",
        available: "15 Dec 2025"
    },
    {
        image: "fotos/foto3.png",
        price: "625,00",
        location: "Groningen",
        available: "1 Dec 2025"
    },
    {
        image: "fotos/gezellige-woonkamer-van-een-modern-appartement.jpg",
        price: "675,00",
        location: "Den Haag",
        available: "20 Nov 2025"
    },
    {
        image: "fotos/foto5.png",
        price: "595,00",
        location: "Tilburg",
        available: "15 Jan 2026"
    },
    {
        image: "fotos/foto4.png",
        price: "715,00",
        location: "Haarlem",
        available: "1 Dec 2025"
    },
    {
        image: "fotos/image.png",
        price: "685,00",
        location: "Nijmegen",
        available: "15 Dec 2025"
    },
    {
        image: "fotos/foto3.png",
        price: "635,00",
        location: "Enschede",
        available: "1 Jan 2026"
    },
    {
        image: "fotos/gezellige-woonkamer-van-een-modern-appartement.jpg",
        price: "595,00",
        location: "Breda",
        available: "15 Nov 2025"
    },
    {
        image: "fotos/foto4.png",
        price: "775,00",
        location: "Leiden",
        available: "1 Dec 2025"
    },
    {
        image: "fotos/foto5.png",
        price: "645,00",
        location: "Zwolle",
        available: "15 Dec 2025"
    },
    {
        image: "fotos/image.png",
        price: "695,00",
        location: "Amersfoort",
        available: "1 Jan 2026"
    },
    {
        image: "fotos/foto3.png",
        price: "625,00",
        location: "Almere",
        available: "15 Nov 2025"
    },
    {
        image: "fotos/gezellige-woonkamer-van-een-modern-appartement.jpg",
        price: "735,00",
        location: "Delft",
        available: "1 Dec 2025"
    },
    {
        image: "fotos/foto4.png",
        price: "665,00",
        location: "Apeldoorn",
        available: "15 Dec 2025"
    },
    {
        image: "fotos/foto5.png",
        price: "705,00",
        location: "Deventer",
        available: "1 Jan 2026"
    },
    {
        image: "fotos/image.png",
        price: "615,00",
        location: "Venlo",
        available: "15 Nov 2025"
    },
    {
        image: "fotos/foto3.png",
        price: "785,00",
        location: "Hilversum",
        available: "1 Dec 2025"
    },
    {
        image: "fotos/gezellige-woonkamer-van-een-modern-appartement.jpg",
        price: "655,00",
        location: "Emmen",
        available: "15 Dec 2025"
    },
    {
        image: "fotos/foto4.png",
        price: "725,00",
        location: "Roosendaal",
        available: "1 Jan 2026"
    },
    {
        image: "fotos/foto5.png",
        price: "605,00",
        location: "Oss",
        available: "15 Nov 2025"
    },
    {
        image: "fotos/image.png",
        price: "795,00",
        location: "Dordrecht",
        available: "1 Dec 2025"
    },
    {
        image: "fotos/foto3.png",
        price: "645,00",
        location: "Lelystad",
        available: "15 Dec 2025"
    },
    {
        image: "fotos/gezellige-woonkamer-van-een-modern-appartement.jpg",
        price: "679,00",
        location: "Alkmaar",
        available: "14 Nov 2025"
    },
    {
        image: "fotos/foto3.png",
        price: "599,00",
        location: "Arnhem",
        available: "13 Dec 2025"
    },
    {
        image: "fotos/foto4.png",
        price: "599,00",
        location: "Arnhem",
        available: "13 Dec 2025"
    },
    {
        image: "fotos/foto5.png",
        price: "599,00",
        location: "Arnhem",
        available: "13 Dec 2025"
    },
    // Adding more rooms with different locations and prices
    {
        image: "fotos/foto1.png",
        price: "825,00",
        location: "Amsterdam",
        available: "1 Dec 2025"
    },
    {
        image: "fotos/foto3.png",
        price: "695,00",
        location: "Rotterdam",
        available: "15 Nov 2025"
    },
    {
        image: "fotos/foto4.png",
        price: "750,00",
        location: "Utrecht",
        available: "1 Jan 2026"
    },
    {
        image: "fotos/foto5.png",
        price: "580,00",
        location: "Eindhoven",
        available: "15 Dec 2025"
    },
    {
        image: "fotos/foto1.png",
        price: "625,00",
        location: "Groningen",
        available: "1 Dec 2025"
    },
    {
        image: "fotos/foto3.png",
        price: "675,00",
        location: "Den Haag",
        available: "20 Nov 2025"
    },
    {
        image: "fotos/foto4.png",
        price: "595,00",
        location: "Tilburg",
        available: "15 Jan 2026"
    }
];

let page = 0;
const itemsPerPage = 3;
let loading = false;

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

    if (roomsToLoad.length > 0) {
        const roomsHTML = roomsToLoad.map(createRoomCard).join('');
        kamerContainer.insertAdjacentHTML('beforeend', roomsHTML);
        page++;
    }

    loading = false;
}

// Debounced scroll handler
let scrollTimeout;
function handleScroll() {
    if (scrollTimeout) clearTimeout(scrollTimeout);
    
    scrollTimeout = setTimeout(() => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        
        if (scrollTop + clientHeight >= scrollHeight - 300) {
            loadMoreRooms();
        }
    }, 100);
}

// Initial load
loadMoreRooms();

// Attach scroll listener
window.addEventListener('scroll', handleScroll);

// image fallback: replace broken images with fotos/default.png (create that file)
document.querySelectorAll(".kamer-img").forEach(img => {
  // if an image fails to load, swap to fallback
  img.onerror = () => {
    if (!img.dataset.fallbackSet) { // prevent infinite loop if fallback missing
      img.dataset.fallbackSet = "1";
      img.src = "fotos/default.png";
    }
  };
});

// optional: in case images are heavy, use lazy attribute (already added above)
// If you want the first batch to be visible right away, nothing else needed
console.log("Kamer page setup complete ✅");