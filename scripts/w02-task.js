/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Kevin Dorgeles Tetede';
let currentYear = '2023';
let profilePicture = 'images/Kevin.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName},</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute ('src', profilePicture);
imageElement.setAttribute ('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favoriteFood = ['Rice', 'Foutou', 'Placali', 'Alloco'];
foodElement.innerText = favoriteFood;

// Declare and instantiate a variable to hold another single favorite food item
const otherFood = 'Fufu congolais';

// Add the value stored in this new variable to your favorite food array.
favoriteFood.push(otherFood);

foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.shift();
foodElement.innerHTML += `<br>${favoriteFood}`;
favoriteFood.pop();
foodElement.innerHTML += `<br>${favoriteFood}`;



