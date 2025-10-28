console.log("kamer.js geladen ✅");

const app = document.getElementById("app");


app.innerHTML = `
  <h1 style="text-align:center; margin-top:30px;">Beschikbare kamers</h1>
  
  <div class="kamer-container">

    <div class="kamer-card">
      <img src="fotos/gezellige-woonkamer-van-een-modern-appartement.jpg" alt="2 kamer" class="kamer-img">
      <h3>Luxe Suite met Balkon</h3>
      <p class="prijs">€ 449,00/maand</p>
      <p>Locatie: Maastricht</p>
      <button class="meer">Lees meer </button>
      
    </div>

    <div class="kamer-card">
      <img src="images/kamer2.jpg" alt="Comfort Kamer" class="kamer-img">
      <h3>Comfort Kamer</h3>
      <p class="prijs">€ 679,00/maand</p>
      <p>Locatie: Aklmaar</p>
      <div class="knoppen">
        <button class="meer">Lees meer..</button>
       
      </div>
    </div>

    <div class="kamer-card">
      <img src="images/kamer3.jpg" alt="Budget Kamer" class="kamer-img">
      <h3>Budget Kamer</h3>
      <p class="prijs">€ 599,00/maand</p>
      <p>Locatie: Arnhem, </p>
      <div class="knoppen">
        <button class="meer">Lees meer..</button>
      </div>
    </div>

  </div>
`;

