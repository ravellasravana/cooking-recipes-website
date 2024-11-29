// Recipe Data
const recipes = {
    italian: [
      {
        name: "Spaghetti Carbonara",
        image: "spag.jpg",
        ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese"],
        steps: ["Boil pasta", "Cook pancetta", "Mix with eggs and cheese", "Combine with pasta"]
      },
      {
        name: "Margherita Pizza",
        image: "pizz.jpg",
        ingredients: ["Pizza dough", "Tomato sauce", "Mozzarella", "Basil"],
        steps: ["Prepare dough", "Spread sauce", "Add cheese", "Bake in oven"]
      }
    ],
    indian: [
      {
        name: "Butter Chicken",
        image: "butter.jpg",
        ingredients: ["Chicken", "Butter", "Tomato puree", "Cream"],
        steps: ["Marinate chicken", "Cook with spices", "Add tomato puree", "Finish with cream"]
      },
      {
        name: "Paneer Tikka",
        image: "paneer.jpg",
        ingredients: ["Paneer", "Yogurt", "Spices", "Vegetables"],
        steps: ["Marinate paneer", "Skewer with veggies", "Grill"]
      }
    ],
    chinese: [
      {
        name: "Kung Pao Chicken",
        image: "kung.jpg",
        ingredients: ["Chicken", "Peanuts", "Chilies", "Soy Sauce"],
        steps: ["Cook chicken", "Add peanuts and sauce", "Stir fry"]
      },
      {
        name: "Spring Rolls",
        image: "spring.jpg",
        ingredients: ["Spring roll wrappers", "Vegetables", "Soy Sauce"],
        steps: ["Prepare filling", "Wrap rolls", "Fry until crispy"]
      }
    ]
  };
  
  // Event Listener for Cuisine Selection
  document.querySelectorAll(".cuisine-button").forEach((button) => {
    button.addEventListener("click", function () {
      const cuisine = this.getAttribute("data-cuisine");
      displayRecipeList(cuisine);
    });
  });
  
  // Function to Display Recipes for Selected Cuisine
  function displayRecipeList(cuisine) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = ""; // Clear previous recipes
  
    // Hide the "Explore Cuisines" section
    document.querySelector(".cuisine-selector").style.display = 'none';
  
    if (cuisine && recipes[cuisine]) {
      recipes[cuisine].forEach((recipe) => {
        const recipeItem = document.createElement("div");
        recipeItem.className = "recipe-item";
        recipeItem.innerHTML = `
          <img src="${recipe.image}" alt="${recipe.name}" onerror="this.src='default.jpg';">
          <h3>${recipe.name}</h3>
        `;
        recipeItem.addEventListener("click", () => displayRecipeDetails(recipe, cuisine));
        recipeList.appendChild(recipeItem);
      });
  
      // Show the "Back to Home" button when recipe list is displayed
      document.getElementById('back-to-home').style.display = 'block';
    }
  }
  
  // Function to Display Recipe Details
  function displayRecipeDetails(recipe, cuisine) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = `
      <div class="recipe-details">
        <img src="${recipe.image}" alt="${recipe.name}" onerror="this.src='default.jpg';">
        <div class="recipe-details-content">
          <h2>${recipe.name}</h2>
          <h3>Ingredients:</h3>
          <ul>${recipe.ingredients.map((item) => `<li>${item}</li>`).join("")}</ul>
          <h3>Steps:</h3>
          <ol>${recipe.steps.map((step) => `<li>${step}</li>`).join("")}</ol>
          <button onclick="displayRecipeList('${cuisine}')">Back to Recipes</button>
        </div>
      </div>
    `;
  
    // Show the "Back to Home" button when viewing recipe details
    document.getElementById('back-to-home').style.display = 'block';
    document.querySelector(".cuisine-selector").style.display = 'none'; // Hide cuisine buttons
  }
  
  // Function to Go Back to Home (Cuisine Selection)
  function backToHome() {
    // Show the cuisine selection buttons
    document.querySelector(".cuisine-selector").style.display = 'block';
    document.getElementById('recipe-list').innerHTML = ''; // Clear any displayed recipes
  
    // Hide the "Back to Home" button
    document.getElementById('back-to-home').style.display = 'none';
  }
  