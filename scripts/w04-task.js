/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Shannon Feist",
    photo: "images/kayaking.jpg",
    favoriteFoods: [
        "Pizza", "Chocolate", "Steak", "Salad"
    ],
    hobbies: [
        "Gardening", "Poultry", "Hiking", "Reading"
    ],
    placesLived: []
};

myProfile.placesLived.push (
    
    {
        place: "Meadville, PA", 
        stay: "21 years"
    },
    {
        place: "Colonial Beach, VA",
        stay: "3 years"
    },
    {
        place: "Beaver, PA",
        stay: "3 years"
    }
);

document.querySelector('#name').textContent = myProfile.name;

let favFoods = document.getElementById('favorite-foods');
let myHobby = document.getElementById('hobbies');
let places = document.getElementById('places-lived');



const imageElement = document.querySelector('#photo')

imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', `Profile picture of ${myProfile.name}`);

for (food of myProfile.favoriteFoods) {
    favFoods.innerHTML += '<li>' + food + '</li>';
}

for (hobby of myProfile.hobbies) {
    myHobby.innerHTML += '<li>' + hobby + '</li>';
}

for (let i = 0; i < myProfile.placesLived.length; i++) {

        places.innerHTML += `<li><strong>${myProfile.placesLived[i].place}</strong> - ${myProfile.placesLived[i].stay}</li>`
}

/* Populate Profile Object with placesLive objects */




/* DOM Manipulation - Output */

/* Name */

/* Photo with attributes */


/* Favorite Foods List*/


/* Hobbies List */


/* Places Lived DataList */


