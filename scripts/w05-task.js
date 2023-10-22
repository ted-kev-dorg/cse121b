/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) =>{
    temples.forEach(temple => {
        let articleElement = document.createElement('article');
        
        let h3Element = document.createElement('h3');
        h3Element.textContent = `${temple.templeName} Temple`;
        
        let imgElement = document.createElement('img');
        imgElement.src = temple.imageUrl;
        imgElement.alt = temple.location;

        articleElement.appendChild(h3Element);
        articleElement.appendChild(imgElement);

        templesElement.appendChild(articleElement) 
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async()=> {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')
    if (response.ok) {
        const data = await response.json();
        templeList = data;
    }
    displayTemples(templeList)
}


/* reset Function */
const reset = () => {
    templesElement.innerHTML = '';
  };

/* sortBy Function */
let sortBy = (temples) => {
    reset();
    const filter = document.querySelector('#sortBy').value;
    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.includes('Utah')));
            break;        
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case 'all':
        default:
            displayTemples(temples);
            break;
    }
};

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => { sortBy(templeList)});

getTemples();



