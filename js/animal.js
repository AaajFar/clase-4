class Animal {
    constructor(tipo, nombre, edad, sonido) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.edad = edad;
        this.sonido = sonido;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}, soy un o una ${this.tipo}`);
    }
    sonido() {
        console.log(`Hago ${this.sonido}`);
    }
}