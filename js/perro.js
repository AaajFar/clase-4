export default class Perro {
    constructor(nombre, edad, dueno, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.dueno = dueno;
        this.sonido = sonido;
    }
    hablar() {
        console.log(`Pero no soy cualquier animal, mi nombre es ${this.nombre}, soy un perro y hago ${this.sonido}. Mi dueñ@ es ${this.dueno} y tengo ${this.edad} años`);
    }
}