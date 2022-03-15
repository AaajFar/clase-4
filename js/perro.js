class Perro {
    constructor(nombre, dueno, edad, sonido) {
        this.nombre = nombre;
        this.dueno = dueno;
        this.edad = edad;
        this.sonido = sonido;
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre}, mi dueño es ${this.dueno}`);
    }
    sonido() {
        console.log(`Hago ${this.sonido}`);
    }
}