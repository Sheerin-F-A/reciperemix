// Toggle visibility of ingredients list
function toggleIngredients(id) {
    const ingredientsDiv = document.getElementById(id);
    if (ingredientsDiv.style.display === "none") {
      ingredientsDiv.style.display = "block";
    } else {
      ingredientsDiv.style.display = "none";
    }
  }
// Suggest a random recipe
function suggestRandomRecipe() {
    const recipes = [
      "boursinomelet.html",
      "chocolatecherrycheesecake.html",
      "maplesalmon.html",
      "tomatobisque.html",
      "garlicbuttershrimp.html",
      "avocadotoast.html",
      "classicpancakes.html"
    ];
  
    const randomIndex = Math.floor(Math.random() * recipes.length);
    window.location.href = `./recipes/${recipes[randomIndex]}`;
  }
  