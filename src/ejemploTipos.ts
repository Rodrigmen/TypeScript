// CTRL+SHIFT+B = COMPILACION ----- CTRL+F5 = EJECUCIÓN

/* TIPOS BÁSICOS */

// STRING
var cadenaJ = "Cadena de texto en JavaScript";
var cadenaT:string = "Cadena de texto en TypeScript";

// NUMBERS
var numeroJ = 1;
var numeroT:number = 2.8;

// BOOLEAN 
var booleanJ = true;
var booleanT:boolean = false;

// ARRAY
var arrayJ = ["es", "un", "array", "en", "JavaScript"];
var arrayT:Array<string> = ["es", "un", "array", "en", "TypeScript"];

var OTROarrayJ = [1, "un", 3, "en", 4];
var OTROarrayT:Array<string|number> = [1, "un", 3, "en", 4];


// NULL
var nullJ = null;
var nullT:null = null;

var anuloJ = "no es nulo";
anuloJ = null;

var anuloT:string|null = "no es nulo";
anuloT = null;

//ANY
var anyT:any = "hola";
anyT = 3;

var arrayAny:Array<any> = [true, 2, "cadena"];