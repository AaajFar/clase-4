export default class Gato {
    constructor(nombre, edad, dueno, sonido) {
        this.nombre = nombre;
        this.edad = edad;
        this.dueno = dueno;
        this.sonido = sonido;
    }
    hablar() {
        console.log(`Pero no soy cualquier animal, mi nombre es ${this.nombre}, soy un gato y hago ${this.sonido}. Mi dueñ@ es ${this.dueno} y tengo ${this.edad} años`);
    }
}