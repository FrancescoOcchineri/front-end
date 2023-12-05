//Esercizio 1
class user {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    comparazione(persona) {
        if (this.age > persona.age) {
            return this.firstName + ' è più vecchio di ' + persona.firstName;
        } else if (this.age < persona.age) {
            return this.firstName + ' è più giovane di ' + persona.firstName;;
        }
    }
}

let u = new user('Paolo', 'Bianchi', 54, 'Milano');
let l = new user('Lorenzo', 'Neri', 32, 'Torino');
let f = new user('Francesca', 'Neri', 43, 'Senigallia');

console.log(u.comparazione(l));
console.log(f.comparazione(u));
console.log(l.comparazione(f));


// Esercizio 2
class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
    }

    sameOwner(pet) {
        if (pet.ownerName === this.ownerName) {
            return true;
        } else {
            return false;
        }
    }
}

let pet1 = new Pet('Aron', 'Marco', 'cane', 'pitbull');
let pet2 = new Pet('Roger', 'Simona', 'coniglio', 'nano');

console.log(pet1.sameOwner(pet2))

let button = document.querySelector('button');
button.addEventListener('click', () => {
    let f = document.querySelectorAll('form input, form select');
    let petName = f[0].value;
    let ownerName = f[1].value;
    let species = f[2].value;
    let breed = f[3].value;
    let p = new Pet(petName, ownerName, species, breed);
    list()
    f.forEach(input => {
        input.value = '';
    });

    function list() {
        let ol = document.querySelector('.petsOl');
        let li = document.createElement('li');
        li.innerHTML = 'petName: ' + petName + ', ownerName: ' + ownerName + ', species: ' + species + ', breed: ' + breed;
        ol.appendChild(li);
    }

})
