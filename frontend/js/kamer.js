console.log("kamer.js geladen ✅");

const app = document.getElementById("app");


app.innerHTML = `
  <h1 style="text-align:center; margin-top:30px;">Beschikbare kamers</h1>
  
  <div class="kamer-container">

    <div class="kamer-card">
      <img src=fotos/foto1.png"" alt="" class="kamer-img">
      <h3>Luxe Suite met Balkon</h3>
      <p class="prijs">€ 749,00/month</p>
      <p>Locatie: Maastricht</p>
      <button class="meer">Lees meer </button>
      
    </div>

    <div class="kamer-card">
      <img src="" alt="Comfort Kamer" class="kamer-img">
      <h3>Room </h3>
      <p class="prijs">€ 679,00/month</p>
      <p>Locatie: Aklmaar</p>
      <div class="knoppen">
        <button class="meer">Lees meer..</button>
       
      </div>
    </div>

    <div class="kamer-card">
      <img src="" alt="Budget Kamer" class="kamer-img">
      <h3>Budget Kamer</h3>
      <p class="prijs">€ 599,00/month</p>
      <p>Locatie: Arnhem</p>
      <p>Available: 13 Dec 2025</p>
      <div class="knoppen">
        <button class="more">Read more..</button>
      </div>
    </div>

  </div>
`;

