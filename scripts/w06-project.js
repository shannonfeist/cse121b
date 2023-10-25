

let recipesElement = document.querySelector('#recipes');
let recipesList = [];

 const displayRecipes = (recipes) => {
    recipesElement.innerHTML = "";

    recipes.forEach((recipe) => {
        const article = document.createElement('article');
        recipesElement.appendChild(article);
        const recipeName = document.createElement('h3')
        recipeName.innerHTML = recipe.recipeName;
        const image = document.createElement('img');
        image.src = recipe.imageUrl;
        image.alt = recipe.recipeName;
        article.appendChild(recipeName);
        article.appendChild(image);
        
    });
};

const getRecipes = async() => {
    const response = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients");
    data = await response.json();
    recipesList.push(...data);
    console.log
    displayRecipes(recipesList);
};


const reset = () => {
    recipesElement.innerHTML = '';
};

const sortBy = (recipes) => {
    reset();
    const filter = document.getElementById('sortBy').value;
    switch (filter) {
        case 'bacon':
            displayRecipes(recipes.filter(recipe => recipe.ingredient.includes('bacon')));
            break;
        case 'notutah':
            displayRecipes(recipes.filter(recipe => recipe.ingredient.includes('chicken')));
            break;
        case 'older':
            displayRecipes(recipes.filter(recipe => recipe.ingredient.includes('beef')));
            break;
        case 'all':
            displayRecipes(recipes);
            break;
        }
};



document.getElementById("sortBy").addEventListener("change", () => {
    sortBy(recipesList);
});

getRecipes();