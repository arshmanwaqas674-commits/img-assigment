let parent = document.getElementById("parent");

// User se input lekar use lowercase (chote abc) mein badalna
let season = prompt("Which season do you like most?")
 season: 
"summer" 
"winter"
"autem"
"spring"
"rainy"
if (season === "summer") {
  parent.innerHTML = `
    <div class="summer-card">

      <img src="background img.webp" alt="Summer Background" class="bg-img"  object-fit: cover; class="bg-img" >

      <div class="overlay">

        <div class="product-card">

          <span class="badge">☀ Hello Summer</span>

          <div class="product-img">
            <img src="card-img.gif" alt="Summer">
          </div>

          <div class="product-info">
            <h2>Hello Summer</h2>

            <p>
              Welcome to the brightest season of the year! Enjoy warm sunshine,
              cool drinks, tropical vibes, green nature and unforgettable
              summer adventures with your family and friends.
            </p>

            <div class="details">
              <p>☀ Sunny Days</p>
              <p>😎 Good Vibes</p>
              <p>🍹 Cool Drinks</p>
              <p>🌴 Tropical Fun</p>
            </div>

            <button>Enjoy Summer</button>

          </div>

        </div>

      </div>

    </div>
  `;
} 

else {
   // Agar user summer/winter ke alawa kuch aur likhe ya spelling galat ho
   parent.innerHTML = `<h2 style="font-family: sans-serif; text-align: center; margin-top: 20vh; width: 100%;">Please reload and type 'summer' or 'winter'!</h2>`;
}
