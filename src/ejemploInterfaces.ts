/* INTERFACES */

// JAVASCRIPT
var perrosJ = [{ nombre: 'Balto', raza: 'Bull Terrier', peso: 50, dueño: 'Enrique' },
{ nombre: 'Pluto', raza: 'Husky', peso: 30, dueño: 'María' }];

// TYPESCRIPT
interface Perro {
    nombre: string;
    raza: string,
    peso: number,
    dueño: string
}

var perrosJ:Perro[] = [{ nombre: 'Balto', raza: 'Bull Terrier', peso: 50, dueño: 'Enrique' },
{ nombre: 'Pluto', raza: 'Husky', peso: 30, dueño: 'María' }];