/* LESSON 3 - Programming Tasks */

/* Profile Object  */
const myProfile = {
    name: "Tetede Kevin Dorgeles",
    photo: "images/Kevin.jpg",
    favoriteFoods: [
        'Rice',
        'Foutou',
        'Placali',
        'Alloco'
    ],
    hobbies: [
        'Basketball',
        'reading',
        'movies',
        'playing piano'
    ],

    placeLived: []
    
};

/* Populate Profile Object with placesLive objects */
myProfile.placeLived.push(
    {
        place: 'Aboisso, IVC',
        length: '7 year'
    }
);

myProfile.placeLived.push(
    {
        place: 'Danane, IVC',
        length: '3 years'
    }
);

myProfile.placeLived.push(
    {
        place: 'San Pedro, IVC',
        length: '7 year'
    }
);

myProfile.placeLived.push(
    {
        place: 'Abidjan, IVC',
        length: '10 year'
    }
);

myProfile.placeLived.push(
    {
        place: 'Lubumbashi, RDC',
        length: '2 year'
    }
);


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').innerHTML = myProfile.name;
/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);

});

/* Hobbies List */

myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
    
});

/* Places Lived DataList */

myProfile.placeLived.forEach(element => {
    let dt = document.createElement('dt');
    dt.innerHTML = element.place;
    let dd = document.createElement('dd');
    dd.innerHTML = element.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
    
});




