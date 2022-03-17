let myPerson = new Persona('Juan', 'Perez', 23, 1.8);

console.log(myPerson.saludar());

import Persona from './persona.js';
import Perro from './perro.js';
import Gato from './gato.js';
import Animal from './animal.js';

let myGato = new Gato('Carpo', 5, 'Ariel', 'Miau');

console.log(myGato.hablar());
console.log(myGato instanceof Animal);

let myPerro = new Perro('Wendy', 10, 'Nati', 'Guau');

console.log(myPerro.hablar());
console.log(myPerro instanceof Animal);