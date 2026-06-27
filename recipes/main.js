const recipes = [
    {
        tags: ['dessert'],
        description: "This apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
        image: './images/apple-crisp.jpg',
        name: 'Apple Crisp',
        rating: 4
    },
    {
        tags: ['Southwest', 'entree'],
        description: 'Black beans and tomatoes served over a bed of rice. Top with cheese and scoop up with tortilla chips for maximum enjoyment.',
        image: './images/black-beans-and-rice.jpg',
        name: 'Black Beans and Rice',
        rating: 3
    },
    {
        tags: ['chicken', 'entree', 'Indian'],
        description: 'Quick and easy Chicken curry recipe made with easy to find ingredients.',
        image: './images/chicken-curry.webp',
        name: 'Chicken Curry',
        rating: 5
    },
    {
        tags: ['dessert'],
        description: 'Delicious soft chocolate chip cookies with coconut.',
        image: './images/chocolate-chip-cookies.jpg',
        name: 'Chocolate Chip Cookies',
        rating: 5
    },
    {
        tags: ['Chicken', 'Entree'],
        description: 'Delicious quick and easy creamy rice dish. The mustard, mushrooms, and lemon all blend together wonderfully',
        image: './images/escalopes-de-poulet-a-la-creme.webp',
        name: 'Escalope de Poulet a la Creme with steamed green beans',
        rating: 4.5
    },
    {
        tags: ['dessert', 'German'],
        description: "This gooseberry cake with crumble is easy to follow, a bit tart and not too sweet.",
        image: './images/german-gooseberry-cake.jpg',
        name: 'Gooseberry cake with vanilla cream and crumble',
        rating: 5
    },
    {
        tags: ['Potatoes', 'side'],
        description: 'Easy and delicious oven roasted potatoes that go great with almost anything.',
        image: './images/roasted-potatoes.webp',
        name: 'Oven Roasted potato slices',
        rating: 4
    },
    {
        tags: ['Waffles', 'Sweet Potato', 'Side'],
        description: 'Savory waffles made with Sweet potato with a hint of Ginger',
        image: './images/sweet-potato-waffle-md.jpg',
        name: 'Sweet Potato Waffles',
        rating: 4
    }
];

const recipeContainer = document.querySelector('#recipe-container');
const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('#search-input');

function getRandomRecipe() {
    const randomIndex = Math.floor(Math.random() * recipes.length);
    return recipes[randomIndex];
}

function ratingTemplate(rating) {
    let stars = '';

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars += '<span aria-hidden="true">⭐</span>';
        } else {
            stars += '<span aria-hidden="true">☆</span>';
        }
    }

    return `
        <span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">
            ${stars}
        </span>
    `;
}

function tagsTemplate(tags) {
    return tags.map(tag => `<p class="tag">${tag}</p>`).join('');
}

function recipeTemplate(recipe) {
    return `
        <article class="recipe-card">
            <img class="recipe-image" src="${recipe.image}" alt="${recipe.name}">

            <div class="recipe-info">
                <div class="tags">
                    ${tagsTemplate(recipe.tags)}
                </div>

                <h2>${recipe.name}</h2>

                ${ratingTemplate(recipe.rating)}

                <p class="description">
                    ${recipe.description}
                </p>
            </div>
        </article>
    `;
}

function renderRecipes(recipeList) {
    recipeContainer.innerHTML = recipeList.map(recipeTemplate).join('');
}

function searchRecipes(searchText) {
    const cleanSearch = searchText.toLowerCase();

    const filteredRecipes = recipes.filter(recipe => {
        const nameMatch = recipe.name.toLowerCase().includes(cleanSearch);
        const descriptionMatch = recipe.description.toLowerCase().includes(cleanSearch);
        const tagMatch = recipe.tags.join(' ').toLowerCase().includes(cleanSearch);

        return nameMatch || descriptionMatch || tagMatch;
    });

    filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));

    return filteredRecipes;
}

searchForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const results = searchRecipes(searchInput.value);

    if (results.length > 0) {
        renderRecipes(results);
    } else {
        recipeContainer.innerHTML = '<p>No recipes found. Try another search.</p>';
    }
});

renderRecipes([getRandomRecipe()]);