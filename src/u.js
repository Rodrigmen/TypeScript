
/* CLASES */

// JAVASCRIPT
class VehiculoJ {
    constructor(nombre, anyo) {
        this.nombre = nombre;
        this.anyo = anyo;
    }

    gasto(consumo) {
        return 'gasto del vehiculo es ' + consumo + 'L/100KM, ';
    }
}

class CocheJ extends VehiculoJ {
    constructor(nombre, anyo, kilometros) {
        super(nombre, anyo);
        this.kilometros = kilometros;
    }

    gasto(consumo = 3.7) {
        console.log(this.nombre + ' del año ' + this.anyo + ' se ha movido ' + this.kilometros + 
        'KM, teniendo en cuenta que el ' + super.gasto(consumo)+ ' este ha gastado: '+ (this.kilometros/100 * consumo) + 'L');

    }
}

var cocheJ = new CocheJ('Audi', 2011, 500);
cocheJ.gasto();
//TYPESCRIPT