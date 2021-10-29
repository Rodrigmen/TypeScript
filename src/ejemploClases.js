/* CLASES */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TYPESCRIPT
var VehiculoT = /** @class */ (function () {
    function VehiculoT(nombre, anyo) {
        this.nombre = nombre;
        this.anyo = anyo;
    }
    VehiculoT.prototype.gasto = function (consumo) {
        return 'gasto intermedio de un vechiculo es ' + consumo + 'L/100KM, ';
    };
    return VehiculoT;
}());
var CocheT = /** @class */ (function (_super) {
    __extends(CocheT, _super);
    function CocheT(nombre, anyo, kilometros) {
        var _this = _super.call(this, nombre, anyo) || this;
        _this.kilometros = kilometros;
        return _this;
    }
    CocheT.prototype.gasto = function (consumo) {
        if (consumo === void 0) { consumo = 3.7; }
        console.log(this.nombre + ' del año ' + this.anyo + ' se ha movido ' + this.kilometros +
            'KM, teniendo en cuenta que el ' + _super.prototype.gasto.call(this, consumo) + ' este ha gastado: ' + (this.kilometros / 100 * consumo) + 'L');
    };
    return CocheT;
}(VehiculoT));
var cocheT = new CocheT('Audi', 2011, 500);
cocheT.gasto();
