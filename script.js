// Sample recipes data (simulating backend)
const recipes = [
    {
        name: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "cheese", "bacon"],
        diet: "none",
        difficulty: "medium",
        cuisine: "italian",
        image: "recipe1.jpg",
        rating: 4.5
    },
    {
        name: "Vegan Tacos",
        ingredients: ["tortilla", "beans", "avocado", "lettuce"],
        diet: "vegan",
        difficulty: "easy",
        cuisine: "mexican",
        image: "recipe2.jpg",
        rating: 5
    }
    // Add more sample recipes here
];

// Handle ingredient search
document.getElementById('search-btn').addEventListener('click', () => {
    const input = document.getElementById('ingredient-search').value.toLowerCase();
    const keywords = input.split(',').map(i => i.trim());
    const matchedRecipes = recipes.filter(recipe =>
        keywords.some(k => recipe.ingredients.includes(k))
    );
    displayRecipes(matchedRecipes);
});

// Handle filter form
document.getElementById('filters-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const diet = document.getElementById('diet').value;
    const difficulty = document.getElementById('difficulty').value;
    const cuisine = document.getElementById('cuisine').value;

    const filtered = recipes.filter(recipe =>
        (diet === "" || recipe.diet === diet) &&
        (difficulty === "" || recipe.difficulty === difficulty) &&
        (cuisine === "" || recipe.cuisine === cuisine)
    );
    displayRecipes(filtered);
});

// Display matched/filtered recipes
function displayRecipes(recipeList) {
    const container = document.querySelector('.recipe-cards');
    container.innerHTML = ''; // Clear previous results

    if (recipeList.length === 0) {
        container.innerHTML = '<p>No recipes found matching your criteria.</p>';
        return;
    }

    recipeList.forEach(recipe => {
        const card = document.createElement('div');
        card.classList.add('recipe-card');
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.name}">
            <h4>${recipe.name}</h4>
            <p>Rating: ${recipe.rating}/5</p>
            <button onclick="alert('Viewing recipe for ${recipe.name}')">View Recipe</button>
        `;
        container.appendChild(card);
    });
}

// Save recipes button
document.getElementById('save-recipes').addEventListener('click', () => {
    alert("Your favorite recipes have been saved!");
});

// Create shopping list button
document.getElementById('shopping-list').addEventListener('click', () => {
    alert("Shopping list created from selected recipes!");
});

// Animation on scroll using IntersectionObserver
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

// Apply observer to sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
