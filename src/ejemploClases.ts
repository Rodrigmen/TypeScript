
/* CLASES */
// TYPESCRIPT
class VehiculoT {
    nombre: string;
    anyo: number;

    constructor(nombre: string, anyo: number) {
        this.nombre = nombre;
        this.anyo = anyo;
    }

    gasto(consumo: number) {
        return 'gasto del vehiculo es ' + consumo + 'L/100KM, ';
    }
}
class CocheT extends VehiculoT {
    kilometros: number;
    constructor(nombre: string, anyo: number, kilometros: number) {
        super(nombre, anyo);
        this.kilometros = kilometros;
    }

    gasto(consumo = 3.7) {
        console.log(this.nombre + ' del año ' + this.anyo + ' se ha movido ' + this.kilometros +
            'KM, teniendo en cuenta que el ' + super.gasto(consumo) + ' este ha gastado: ' + 
            (this.kilometros / 100 * consumo) + 'L');

    }
}
var cocheT = new CocheT('Audi', 2011, 500);
cocheT.gasto();