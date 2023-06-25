/* let numero;
numero = 3;
let numero1;
numero1 = 8;
let palabra;
palabra = 'pepe';
let numero2;
numero2 = numero + numero1;
console.log(numero2);  */

/* alert("Hola!");

let prueba = prompt("Ingrese su edad");
let prueba2 = prompt("ingrese otro dato");
console.log(prueba + prueba2);
 */

/* let a = 4;
let b = 7;

if (a < b){
    console.log('hola que tal')
} */

//// Primer tanda de ejercicios

/// Ejercicio 1

/* let nombre;
let apellido;
let edad;

nombre = 'Homero';
apellido = 'Simpson';
edad = 37;

console.log(nombre, apellido, edad); */

/// Ejercicio 2

/* const SPRINGFIELD = 'SPRINGFIELD';
const SHELBIVILLE = 'SHELBIVILLE';
const HOLYWOOD = 'HOLYWOOD';
const LANUS = 'LANUS';
const BANFIELD = 'BANFIELD';

console.log(SPRINGFIELD); */

/// Ejercicio 3

/* let persona    = "BART SIMPSON";
let domicilio  = "742 EVERGREEN";
let pais       = "USA";
let nacimiento = "02-11-70";
const codigo   = "B47U89RE243";
let carnet = "Codigo: "+codigo+" "+
             "Nombre: "+persona+" "+
             "Pais: "+pais+" "+
             "Nacimiento: "+nacimiento+" "+
             "Domicilio: "+domicilio;
console.log(carnet); */

/* let nombre1;
let direccion;
let pais;
nombre1 = "Bart Simmpson";
direccion = "Av Siempre viva 742";
pais = "Estados Unidos";

let CARNET = nombre1 + " " + direccion + " " + pais;
console.log(CARNET); */

/// Ejercicio 4
/* 
let nombre2;
let nombre3;
let nombre4;
let nombre5;
let nombre6;
nombre2 = prompt('Ingrese su nombre');
nombre3 = prompt('Ingrese su nombre');
nombre4 = prompt('Ingrese su nombre');
nombre5 = prompt('Ingrese su nombre');
nombre6 = prompt('Ingrese su nombre');
let familia;
familia = nombre2 + " " + nombre3 + " " + nombre4 + " " + nombre5 + " " + nombre6;

alert('¡Bienvenidos ' + familia + "!"); */

/// Ejercicio 5

/* let precio;
precio = parseFloat(prompt("Ingrese un valor"));
let descuento30;
let descuento50;
descuento30 = precio - (precio*0.3);
descuento50 = precio - (precio/2);


console.log(descuento30);
console.log(descuento50);
 */

//// Segunda tanda de ejercicios

/// Ejercicio 1

/* let nombre;
let nombre1;
let aviso = "Yo fui"
nombre1 = "Camila";
nombre = prompt("Ingrese su nombre");


if (nombre1 == nombre){
    alert(aviso);
}
    else{
        alert("Yo no fuí");
    } */

/// Ejercicio 2

/* let letra;
const LETRA1 = "Y";
const LETRA2 = "y"; */
/* letra = prompt("Ingrese una letra"); */

/* if ((letra == LETRA1) || (letra == LETRA2)){
    alert("Correcto")
}
    else{
        alert("Error");
    } */
/* 
if ((letra != LETRA1) && (letra != LETRA2)){
    alert("Error");
}
    else{
     alert("Correcto");   
    }
 */

/// Ejercicio 3

/* let homero;
let marge;
let bart;
let lisa;
let numer;

numer = prompt("Elige un número");

homero = 1;
marge = 2;
bart = 3;
lisa = 4;

if (numer >= 1 && numer <= 4){
    if (numer == 1){
        alert("Homero");
    }
    if (numer == 2){
        alert("Marge");
    }
    if (numer == 3){
        alert("Bart");
    }
    if (numer == 4){
        alert("Lisa");
    }
}
    else{
        alert ("Elige un número correcto");
    } */

/// Ejercicio 4

/// Resolví el 3 con la lógica de resolución del segundo

/// Ejercicio 5

/* let producto;
let producto1;
let producto2;
let producto3;

producto = prompt ("Ingrese un producto");
producto1 = prompt ("Ingrese un producto");
producto2 = prompt ("Ingrese un producto");
producto3 = prompt ("Ingrese un producto");

if (producto != "" && producto1 != "" && producto2 != "" && producto3 != ""){
    alert(producto + " " + producto1 + " " + producto2 + " " + producto3);
}
    else{
     alert("Error. Es necesario cargar todos los productos");   
    }
 */

/// Clase 3 - Ciclos e iteraciones

////nos planteamos una calculadora
/* 
  1-  + sumar
  2-  - restar
  3-  / dividir
  4-  * multiplicar
*/



/* const SUMAR = '+';
const RESTAR = '-';
const DIVIDIR = '/';
const MULTIPLICAR = '*';
let num1;
let num2;
let resultado = 0;
let opcion;
let operacion; */

/* alert('Bienvenido a la calculadora!' + '\n' +
'"+": sumar' + '\n' +
'"-": restar' + '\n' +
'"*": multiplicar' + '\n' +
'"/": division' + '\n' +
'"Fin": salir');

opcion = (prompt('ingrese la operacion que desea realizar'));
num1 = parseFloat(prompt('Ingrese el primer numero'));
num2 = parseFloat(prompt('Ingrese el segundo numero')); */

///USANDO UNA ESTRUCTURA SWITCH - CASE
/* alert('Bienvenido a la calculadora!' + '\n' +
            '"+": sumar' + '\n' +
            '"-": restar' + '\n' +
            '"*": multiplicar' + '\n' +
            '"/": division' + '\n' +
            '"Fin": salir');
opcion = (prompt('ingrese la operacion que desea realizar'));
num1 = parseFloat(prompt('Ingrese el primer numero'));
num2 = parseFloat(prompt('Ingrese el segundo numero'));
while(opcion =! "Fin"){

    switch(opcion) {
        case SUMAR: 
                resultado = num1 + num2;
                operacion = 'suma';
                console.log('estoy en sumar');
                break; ///salimos de la estructura switch
        case RESTAR:
                resultado = num1 - num2;
                operacion = 'resta';
                console.log('estoy en restar');
                break; ///cortamos el flujo del codigo dentro de estas llaves (nos vamos hacia afuera)
        case DIVIDIR:
                resultado = num1 / num2;
                operacion = 'division';
                console.log('estoy en dividir');
                break;
        case MULTIPLICAR:
                resultado = num1 * num2;
                operacion = 'multiplicacion';
                break;
        default:
                resultado = 0;
    }
}
console.log('El resultado de la ' + operacion + ' entre ' + num1 + ' y ' +  num2 +  ' es: ' + resultado); */

/* 
if (opcion === SUMAR) {
    resultado = num1 + num2;
    operacion = 'suma';
} else {
    if (opcion === RESTAR) {
        resultado = num1 - num2;
        operacion = 'resta';
    } else {
        if (opcion === DIVIDIR) {
            resultado = num1 / num2;
            operacion = 'division';
        } else {
            if (opcion === MULTIPLICAR) {
                resultado = num1 * num2;
                operacion = 'multiplicacion';
            }
        }
    }
}
 */

/* let accion;
let consecuencia;
consecuencia = "Lleva dinero"; */


/// resolución de una calculadora
/* let num1;
let num2;
let resultado = 0;
let opcion;
const SUMAR = 1;
const RESTAR = 2;
const MULTIPLICAR = 3;
const DIVIDIR = 4;
let eleccion;

do{
    alert('Bienvenido a la calculadora');
    opcion = parseInt(prompt('Ingrese la operación a realizar: 1 = +, 2 = -, 3 = *, 4 = /'));
    num1 = parseFloat(prompt('Ingrese el primer número')); 
    num2 = parseFloat(prompt('Ingrese el segundo número'));
    /// se usa la variable OPCION porque es la variable a evaluar en todo el switch

    switch(opcion){
        case SUMAR:
            resultado = num1 + num2;
            break;
        case RESTAR:
            resultado = num1 - num2;
            break;
        case MULTIPLICAR:
            resultado = num1 * num2;
            break;
        case DIVIDIR:
            resultado = num1 / num2;
            break;
        default: 
            resultado;   
}
alert('El resultado de: ' + num1 + ' y ' + num2 + ' es ' + resultado);
eleccion = prompt('Desea realizar otra operación? "SI/NO"');
} while(eleccion == "SI"); */





/* if (opcion === SUMAR) {
    resultado = num1 + num2;
}
    else{
        if(opcion === RESTAR){
            resultado = num1 - num2;
        }
        else{
            if(opcion === MULTIPLICAR){
                resultado = num1 * num2;
            }
            else{
                if(opcion === DIVIDIR){
                    resultado = num1 / num2;
                }
            }
        }
    }

console.log('El resultado es: ' + resultado); */

///bucle for

/* let i;
i = 1;

/// i = i + 1 o con el operador de incremento queda en i++

for(i; i <= 10; i = i+1){
    console.log(i);
} */


///bucle while

/* let continuar;
let precio;
let cantidad;
let total = 0; */

/* while(continuar != 'basta') { 
    console.log('Agregando un nuevo item en el carrido de compras.')
    precio = parseFloat(prompt('Ingrese precio del item'));
    cantidad = parseInt(prompt('Ingrese la cantidad'))
    total = total + precio*cantidad;
    continuar = prompt('Desea agregar otro item al carrito de compras? si/basta');
} */
/* alert('El monto total es de: $' + total); */

///bucle do.. while
    
/* do { 
    console.log('Agregando un nuevo item en el carrido de compras.');
    precio = parseFloat(prompt('Ingrese precio del item'));
    cantidad = parseInt(prompt('Ingrese la cantidad'))
    total = total + precio*cantidad;
    continuar = prompt('Desea agregar otro item al carrito de compras? si/basta');
}   
    while(continuar == 'si');
    alert('El monto total es de: $' + total); 
 */

/// clase FUNCIONES

/// declaracion de una función - realiza UNA determinada acción
/// forma declarativa / explícita

///declaración
/* function saludar(){
    alert('Hola!');
}
 */
/// uso de la función - llamar / invocar / ejecutar a la función
/// siempre usando los ()
/* saludar(); */

/// PARAMETROS DE ENTRADA / SALIDA
////ENTRADA
/* function saludarAUnAlumno(nombreAlumno){
    alert('Hola ' + nombreAlumno + ', como estás?');
}

saludarAUnAlumno(prompt('Ingrese su nombre')); // o podría hacerse declarando una variable y agregandola dentro de la function.
let nombre;
nombre = prompt('Ingrese su nombre');
saludarAUnAlumno(nombre);

function suma(num1, num2){
    console.log(num1 + num2);
}

suma(3,5); */

///validar los datos para que no se envie cualquier valor por parámetro

/* let x;
let y;

x = 25;
y = 'pepe';

if(Number(x) && Number(y)){
    suma(x,y);
}
    else{
        alert('Parametros inválidos');
    } */


////SALIDA
///se usa la palabra reservada RETURN

///ejemplo de carrito de compras

/* let total;
total = 0;


function agregarItemAlCarrito(totalCarrito, precio, cantidad){
    return totalCarrito + precio*cantidad;
}

console.log('Total del carrito ' + total);

total = agregarItemAlCarrito(total, 30.5, 3);
console.log('Total del carrito con un nuevo item $' + total); */
/// expresión de función
/// FUNCION ANÓNIMA - SE DEFINE SIN NOMBRE
/* const SUMA = function(a,b){
    return a + b;
}
let h;
let j;

h = parseFloat(prompt('ingrese un numero'));
j = parseFloat(prompt('ingrese un numero'));

console.log(SUMA(h,j)); */

///saludar a un alumno con expresión de función

/* const saludando = function(){
    alert('Hola como va');
} */

///para utilizarlo uso la constante
/* saludando(); */



/// INTENTO PREENTREGA

/* let entradas;
let cantidadEntrada;
let comida;
let cantidadComida;
const ENTRADA_2D = 500;
const ENTRADA_3D = 700;
const ENTRADA_4D = 1000;
const ENTRADA_DBOX = 1500;
const BALDE = 600;
const GASEOSA = 400;
const COMBO_POP = 1250;
const COMBO_NACHO = 900;

entradas = parseInt(prompt('Ingrese el tipo de entrada al cine que desea presupuestar:' + 'n/' + '1) Entrada 2D: $500' 
                + 'n/' + '2) Entrada 3D: $700'
                + 'n/' + '3) Entrada 4D: $1000'
                + 'n/' + '4) Entrada XD/D-BOX: $1500'));
cantidadEntrada = parseInt(prompt('Ingrese la cantidad de entradas'));
comida = parseInt(prompt('Ingrese el tipo de entrada al cine que desea presupuestar:' + 'n/' + '1) Balde de Pochoclos: $600' 
                + 'n/' + '2) Gaseosa: $400'
                + 'n/' + '3) Balde con 2 gaseosas: $1250'
                + 'n/' + '4) Nachos con cheddar + 1 bebida: $900'));
cantidadComida = parseInt(prompt('Ingrese la cantidad de combos a comprar'));
*/

/// simular presupuesto de viaje
/* 
    destino (a modo informativo)
    cantidad de pasajeros
    tipo de viaje (aéreo/terrestre)
    hotel - media pension, pension completa o allinclusive

    let pasajeros;
    let viaje;
    let alojamiento;
    const presupuesto = function (pax, viaje, hotel){
        return (pax*viaje) + (pax*hotel);
    }
    const MICRO = a;
    const AVION = b;
    pasajeros = parseInt(prompt('Ingrese la cantidad de pasajeros a presupuestar'));
    switch(viaje){
        case 
    }

*/


/// simular sueldo a asignar según $ x h ya definido
/// partiendo de un sueldo de $50/h, calcular el sueldo neto a abonar según las horas trabajadas y la cantidad de empleados contratados.
/// ver la posibilidad de agregar descuento. 
/* 
    const VALOR_HORA = 50;
    let empleados;
    let horas;
    let dias;
    let sueldoPorDia;
    let sueldoMensual;
    let repetir;
    const calculoSueldoDiario = function (personas, tiempo, precioHora){
        return personas*tiempo*precioHora;
    }
    const calculoSueldoMensual = function(sueldoDiario, totalDias){
        return sueldoDiario*totalDias;
    }
    do{
    alert('Calcule el sueldo a abonar del total de sus empleados, partiendo del monto de $50/h.');
    empleados = parseInt(prompt('Ingrese la cantidad de empleados en su empresa'));
    horas = parseFloat(prompt('Ingrese cantidad de horas trabajadas'));
    sueldoPorDia = calculoSueldoDiario(empleados,horas,VALOR_HORA);
    console.log('Se abonaran $' + sueldoPorDia + ' por cada día trabajado.');
    dias = parseInt(prompt('Ingrese la cantidad de días trabajados'));
    sueldoMensual = calculoSueldoMensual(sueldoPorDia, dias);
    repetir = parseInt(prompt('El sueldo a abonar por ' + empleados + ' empleados que trabajaron ' + dias + ' dias es de $' + sueldoMensual + '. Desea realizar otra liquidación de sueldo? Presione "1" para continuar, "2" para terminar.'));
    }
        while(repetir == 1); */

/// opcion 2 de calculo de sueldo

 /*    let valorHora;
    let empleados;
    let horas;
    let dias;
    let sueldoPorDia;
    let sueldoMensual;
    let repetir;
    const calculoSueldo = function(valor1, valor2){
        return valor1*valor2;
    }
    do{
    alert('Calcule el sueldo a abonar del total de sus empleados.');
    empleados = parseInt(prompt('Ingrese la cantidad de empleados en su empresa'));
    horas = parseFloat(prompt('Ingrese cantidad de horas trabajadas'));
    valorHora = parseFloat(prompt('Ingrese el monto a abonar por hora trabajada'));
    sueldoPorDia = calculoSueldo(empleados,horas);
    sueldoPorDia = calculoSueldo(sueldoPorDia,valorHora);
    console.log('Se abonaran $' + sueldoPorDia + ' por cada día trabajado.');
    dias = parseInt(prompt('Ingrese la cantidad de días trabajados'));
    sueldoMensual = calculoSueldo(sueldoPorDia, dias);
    repetir = parseInt(prompt('El sueldo a abonar por ' + empleados + ' empleados que trabajaron ' + dias + ' dias es de $' + sueldoMensual + '. Desea realizar otra liquidación de sueldo? Presione "1" para continuar, "2" para terminar.'));
    
    }
        while(repetir == 1);
 */

/// opcion 2 de calculo de sueldo
/* 
let valorHora;
let empleados;
let horas;
let dias;
let sueldoPorDia;
let sueldoMensual;
let repetir;
const calculoSueldo = function(valor1, valor2){
    return valor1*valor2;
}
do{
    alert('Calcule el sueldo a abonar del total de sus empleados.');
    empleados = parseInt(prompt('Ingrese la cantidad de empleados en su empresa'));
    horas = parseFloat(prompt('Ingrese cantidad de horas trabajadas'));
    valorHora = parseFloat(prompt('Ingrese el monto a abonar por hora trabajada'));
    sueldoPorDia = calculoSueldo(empleados,horas);
    sueldoPorDia = calculoSueldo(sueldoPorDia,valorHora);
    console.log('Se abonaran $' + sueldoPorDia + ' por cada día trabajado.');
    dias = parseInt(prompt('Ingrese la cantidad de días trabajados'));
    sueldoMensual = calculoSueldo(sueldoPorDia, dias);
    repetir = parseInt(prompt('El sueldo a abonar por ' + empleados + ' empleados que trabajaron ' + dias + ' dias es de $' + sueldoMensual + '. Desea realizar otra liquidación de sueldo? Presione "1" para continuar, "2" para terminar.'));

}
    while(repetir == 1);
 */

/// clase 5 OBJETOS

/// tienen propiedades//características y métodos//acciones
/// listado de pares CLAVE-VALOR ej: nombre(clave): 'pepe' (valor)


///declaración de objetos

/* /// forma LITERAL de declarar objetos

const persona1 = { nombre: 'pepe', apellido: 'lopez', edad: 25, dni: 1234567};

/// como acceder a las caracteristicas/propiedades del objeto

console.log(persona1.dni);
console.log('El dni de ' + persona1.nombre + ' es ' + persona1.dni);
////si no existe el atributo devuelve UNDEFINED

///modificar el contenido del atributo de un objeto
persona1.nombre = 'pepito';
console.log(persona1.nombre);

///otra forma de acceder al atributo
///de esta forma se puede enviar a traves de una variable
let atributo = 'nombre';
console.log(persona1[atributo]);

/// se podría hacer una función
function mostrarAtributo(nombreAtributo, objeto){
    console.log(objeto[nombreAtributo]);
}
///cuando la llamo
mostrarAtributo('dni', persona1);
/// muestra el DNI (atributo) del objeto mencionado (persona1)

///RECORRIENDO OBJETOS
///bucle FOR IN // recorre la lista de ATRIBUTOS del objeto. Por cada propiedad que hay EN el objeto, imprime objeto[propiedad]. 

for (const atributo in persona1){
    console.log(atributo + ': ' + persona1[atributo]);
}

/// el IN avisa si esa propiedad existe en ese objeto. Devuelve booleano // true or false // se puede colocar en un IF..

if ('peso' in persona1){
    console.log('El atributo peso está en persona1');
}
    else{
        console.log('El atributo peso NO está en persona1');
    }

///PORQUÉ DECLARO OBJETOS COMO VARIABLE 

/// yo no almaceno valores // son un conjunto de valores que están almacenados en un mismo lugar. lo que importa es dónde está eso almacenado. La declaración de un objeto devuelve dónde está almacenado. Mientras sepa donde está almacenado voy a poder acceder a los atributo o al objeto en sí. 

/// CONSTRUCTORES DE OBJETOS

///comparten las mismas características/atributos/propiedades pero con diferentes VALORES. 
/// es una función. se declara como función. Guardo en los atributos del objeto los valores que llegan por parámetro. 
///THIS hace referencia a ESTE objeto. A este objeto que estoy creando ahora (this.nombreAtributo = valor), por ej: this.edad = 'edad'. 
///CONVENCION de ponerle el mismo nombre de valor al atributo. 

///al construir el nuevo objeto dentro del constructor: 
///declaro la constante y agrego NEW // indica que se agrega un NUEVO objeto. 
/// const persona1(nombreObjeto) = new(indica que es un nuevo objeto) Persona(llamo al constructor)(valores);

/// HACIENDO UN CONSTRUCTOR

function Producto(nombre, precio, marca){
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
}

const producto1 = new Producto ('Cacao', '500.5', 'Nesquik');
console.log(producto1); ///cosultando todo el objeto
console.log(producto1['precio']); ///consultando un atributo del objeto

///CONSTRUCTOR DE POKEMONS

function Pokemon(nombre, tipo, entrenador, generacion, poder, vida,  ataque){
    /// generar atributos/características/propiedades del objeto
    this.nombre = nombre;
    this.tipo = tipo;
    this.entrenador = entrenador;
    this.generacion = generacion;
    this.poder = poder;
    this.vida = vida;
    this.ataque = ataque;

    ///acciones/comportamiento/métodos
    this.atacar = function(nombre){
        console.log(this.nombre + ' ataca a ' + nombre + ' con un tipo de ataque de ' + this.poder);
    }
    ///funcion de tipo expresion
    this.evolucionar = function(nombreEvolucionado, cantAtaque, cantVida){
        console.log(this.nombre + ' está evolucionando...');
        this.nombre = nombreEvolucionado;
        this.ataque = this.ataque + cantAtaque;
        this.vida = this.vida + cantVida;
        this.generacion++;
        console.log('Evolucion lista, ahora se llama ' + nombreEvolucionado);
    }
    ///funcion expresion tipo arrow
    this.volverPokebola = () => {
        console.log(this.nombre + ' vuelve a la pokebola.');
    }
    this.recibirAtaque = (ataqueRecibido, atacante) => {
        console.log(this.nombre + ' recibe una cantidad de ataque de ' + ataqueRecibido + ' de ' + atacante);
        this.vida = this.vida - ataqueRecibido;
        console.log(`Ahora la cantidad de vida de ${this.nombre} es de ${this.vida}`);
    }
    
}
/// SE AGREGA THIS dentro de la función xq está haciendo referencia a ESE nombre(en este caso) del objeto. Se actualiza con cada objeto. 

const pokemon1 = new Pokemon('Pikachu', 'eléctrico', 'Ash', 1, 'impactrueno', 500, 300);

console.log(pokemon1);

/// METODOS Y OPERACIONES CON OBJETOS
///las acciones que van a formar parte de un objeto, sólo pueden ejecutarse con ese objeto. Esa función forma parte sólo de ese objeto. 
/// para acceder usamos el . (punto)
/// this.accion = function (){código a ejecutar segun esa accion}
///PARA LLAMARLA: 
/// nombreOjbeto.accion();

const pokemon2 = new Pokemon('Charmander', 'fuego', 'Brock', 1, 'lanzallamas', 400, 250);

pokemon1.volverPokebola();
pokemon1.atacar(pokemon2.nombre);
pokemon2.recibirAtaque(pokemon1.ataque, pokemon1.nombre);
pokemon2.evolucionar('charizard', 100, 200);
console.log(pokemon2);

/// CLASES

///son plantillas del objeto. tiene los atributos, el constructor y las acciones del objeto. 
/// proveen una sintaxis mas clara y simple a la hora de crear un objeto.
/// palabra reservada CLASS. 
/// PUEDE CONTENER (O NO) UN CONSTRUCTOR / si no está el constructor dentro de la clase crea un objeto SIN VALORES. 
/// DIFERENCIAS con lo anterior. 
// se crean en archivos distintos. 
/// se esccriben los atributos sin el this y sin asignarle valor/parámetro.
///antes de llamar a la hoja de js donde se usa la clase, se llama a la de la clase. 
*/ 
class Pokemons{
    nombre;
    tipo;
    entrenador;
    generacion;
    poder;
    vida;
    ataque;

constructor(nombre, tipo, entrenador, generacion, poder, vida,  ataque){
        /// generar atributos/características/propiedades del objeto
        this.nombre = nombre;
        this.tipo = tipo;
        this.entrenador = entrenador;
        this.generacion = generacion;
        this.poder = poder;
        this.vida = vida;
        this.ataque = ataque;
        }   

atacar = function(nombre){
        console.log(this.nombre + ' ataca a ' + nombre + ' con un tipo de ataque de ' + this.poder);
        }
        ///funcion de tipo expresion
evolucionar = function(nombreEvolucionado, cantAtaque, cantVida){
        console.log(this.nombre + ' está evolucionando...');
        this.nombre = nombreEvolucionado;
        this.ataque = this.ataque + cantAtaque;
        this.vida = this.vida + cantVida;
        this.generacion++;
        console.log('Evolucion lista, ahora se llama ' + nombreEvolucionado);
        }
        ///funcion expresion tipo arrow
volverPokebola = () => {
        console.log(this.nombre + ' vuelve a la pokebola.');
        }
recibirAtaque = (ataqueRecibido, atacante) => {
        console.log(this.nombre + ' recibe una cantidad de ataque de ' + ataqueRecibido + ' de ' + atacante);
        this.vida = this.vida - ataqueRecibido;
        console.log(`Ahora la cantidad de vida de ${this.nombre} es de ${this.vida}`);
        }
} 

/* let nombre = prompt('Ingrese el nombre de su pokemon');
let tipo = prompt('Ingrese el tipo de su pokemon');
let entrenador = prompt('Ingrese el entrenador');
let generacion = prompt('Ingrese la generación');
let poder = prompt('Ingrese el poder');
let vida = prompt('Ingrese la vida');
let ataque = prompt('Ingrese el valor del ataque');

const pokemon3 = new Pokemons(nombre, tipo, entrenador, generacion, poder, vida, ataque);
alert('Tu nuevo Pokemon ' + pokemon3.nombre + ' ha sido creado');
console.log(pokemon3); */

                    /// CLASE 6 / ARRAYS

/// array = lista = un objeto // nuevo tipo de dato. Tiene atributos y métodos. Características y acciones.
/// sirve para almacenar valores en forma de lista. todo almacenado bajo un mismo nombre. 
// Puede ser una colección = define un lugar donde se almacenan muchos datos. una variación de la colección es el array. Pueden ser de number, de strings, de booleans, de objetos, un array de arrays. Pueden ser mixtos. (varios valores de tipo diferente dentro del mismo array).
// tienen un índice. Comienza siempre con el CERO (0) hasta el N° final de la lista de elementos. 
/// DEFINIR UN ARRAY. 
/// se define como una variable/const pero asignandola entre corchetes ('[]'). 

/// CREANDO ARRAYS

//array vacio
/* const arrayVacio = [];

//array con elementos
const arrayConElementos = ['pepe', 'juan', 'cristian', 'mario'];

console.log(arrayVacio);
console.log(arrayConElementos);

///ATRIBUTO LENGTH - indica la cantidad de elementos del array
///muestra un N° a la izq de cada elemento // representa el índice del array. 
///EL Q DE ELEMENTOS ES SIEMPRE 1 n° MÁS DEL INDICE (SI TENGO 4 ELEMENTOS TENGO HASTA EL ÍNDICE 3). 

///ACCEDER A UN ELEMENTO DEL ARRAY
//se realiza mediante el índice
// nombreArray[N°deIndice/subíndice];

console.log(arrayConElementos[2]);
console.log(arrayConElementos[4]); //DEVUELVE UNDEFINED SI NO TIENE ELEMENTO EN ESE INDICE. 

///modificar el valor que contiene una celda/indice
arrayConElementos[2] = 'cristiano';
console.log(arrayConElementos); //NO MODIFICA EL ARRAY ORIGINAL. 

///ATRIBUTOS DE UN ARRAY

///LENGTH
//indica la cantidad de elementos del array. 
console.log(arrayConElementos.length);

// RECORRER UN ARRAY 
// SIEMPRE MENOR QUE LENGTH. SI SE PONE MENOR/IGUAL LLEGA A UN INDICE VACIO. 

for (let i = 0; i < arrayConElementos.length; i++){
    console.log(arrayConElementos[i]);
}

/// METODOS DE UN ARRAY.

// PUSH: Agregar un elemento al array AL FINAL de la fila. 
//miArray.push(elElementoASubir);

const miArray = [4, 8, 86, 645, 345];
console.log(miArray);
miArray.push = (5555);
console.log(miArray);

///

const perritos = ['firulais', 'luz', 'chester', 'lola'];
console.log(perritos);
let nuevoPerrito = 'Mochin';
perritos.push(nuevoPerrito);
console.log(perritos);

//UNSHIFT: Agregar un elemento al array ADELANTE de la fila
//miArray.unshift(elElementoASubir);
perritos.unshift('renata');
console.log(perritos); 

///EJEMPLO DE CARRITO DE COMPRAS

/* const carrito = [];
function insertarProductoEnCarrito(producto){
    carrito.push(producto);
}

function cargarProductosEnCarrito() {
    let seguir;
    let item;
    do {
        item = prompt('Ingrese un nuevo producto');
        insertarProductoEnCarrito(item);
        seguir = prompt('Desea continuar? Si / No');
    }
        while(seguir === 'Si');
}

function muestraCarrito() {
    for (let i = 0; i < carrito.length; i++) {
        console.log(carrito[i]);
    }
}

cargarProductosEnCarrito();
muestraCarrito(); */

///POP: Quita el ÚLTIMO elemento del array y RETORNA el elemento
//miArray.pop(); no necesita ingresar parámetro
//SI EL ARRAY NO TIENE DATOS DEVUELVE UNDEFINED. 
/* 
let otroElementoQuitado = perritos.pop();
console.log(perritos + ' ' + perritos.length); // BORRA A MOCHIN QUE ES EL ULTIMO ELEMENTO DEL ARRAY


///SHIFT: Quita el PRIMER elemento del array y RETORNA el elemento
//miArray.shift(); no necesita ingresar parámetro
//SI EL ARRAY NO TIENE DATOS DEVUELVE UNDEFINED. 

let elementoQuitado = perritos.shift();
console.log(perritos + ' ' + perritos.length); // BORRA A RENATA QUE ES EL PRIMER ELEMENTO DEL ARRAY. 

///SPLICE: Quita un elemento en particular del array. 
//FUNCIONA CON DOS PARÁMETROS: 1: el índice del elemento que queremos eliminar. 2: Q de elementos. 
///miArray.splice((desde el elemento que está en el índice N°)1, (cantidad de elementos a eliminar)2);
//miArray.splice(1,2);

perritos.splice(2,1);
console.log(perritos);

/* const carrito = [];
function insertarProductoEnCarrito(producto){
    carrito.push(producto);
}

function cargarProductosEnCarrito() {
    let seguir;
    let item;
    do {
        item = prompt('Ingrese un nuevo producto');
        insertarProductoEnCarrito(item);
        seguir = prompt('Desea continuar? Si / No');
    }
        while(seguir === 'Si');
}

function muestraCarrito() {
    for (let i = 0; i < carrito.length; i++) {
        console.log(i + ': ' + carrito[i]);
    }
}
function eliminarUnItemDelCarrito(){
    let indice;
    muestraCarrito();
    indice = prompt('Elija el indice donde se encuentra el elemento que desea eliminar');
    carrito.splice(indice,1);
    alert('Elemento eliminado');
    muestraCarrito();
}

cargarProductosEnCarrito();
eliminarUnItemDelCarrito();
 */


///JOIN: Concatena la información del array, separandolos por el valor que se envíe por parámetro. NO MODIFICA EL ARRAY ORIGINAL. Devuelve un string.
//miArray.join(",") (la coma es el valor que va a utilizar para concatenar la información)

/* const secciones = ['mercadolibre.com', 'calzado', 'zapatos', 'zapatos49', 'marcaX'];

//formar una URL para que funcione en la web mediante el metodo join
const url = secciones.join('/'); //me devuelve un string
console.log(url);
 */
///CONCAT: Agrupa dos o más arrays dentro de uno solo. NO AFECTA LOS ARRAYS ORIGINALES, CREA UNO NUEVO. AGREGA AL FINAL DEL PRIMER ARRAY EL SEGUNDO
///miArray1 = [blablabalba] // miArray2 = [balbalblaba] // miArray3 = miArray1.concat(miArray2); //queda miArray1 + miArray2

/* const perros = ['firu', 'luz', 'lola'];
const gatos = ['nilo', 'milo', 'nina'];
const mascotas = perros.concat(gatos);
console.log(mascotas); */

///SLICE: Hace una copia DE UNA PARTE del array en un nuevo array. NO AFECTA AL ARRAY ORIGINAL. Similar al splice en la forma de llamarlo. 
//miArray.slice(DESDE EL N° DE INDICE, EL INDICE HASTA DONDE LLEGA SIN TENER EN CUENTA ESE MISMO). 
//miArray.slice(1(indice 1 copia DESDE ahí INCLUSIVE), 3(indice 3 copia HASTA ahí EXCLUSIVO, tiene en cuenta hasta el anterior INCLUSIVE)). 

/* const nuevasMascotas = mascotas.slice(1,4);
console.log(nuevasMascotas); */

///INDEXOF: Devuelve el PRIMER indice que coincide con el elemento que estamos buscando. RESPETA MAYUSC/MINUSC. Si no encuentra ningun elemento devuelve un INDICE INVALIDO (-1). Significa que el elemento que estamos buscando no está en ese array. 
// miArray.indexOf('nombreElemento');

/* let mascota = prompt ('ingrese la mascota a buscar');
let indice = mascotas.indexOf(mascota);
/// VALIDACIÓN DE LA BUSQUEDA DEL INDICE DE LA MASCOTA A BUSCAR. 
if (indice !== -1) {
    console.log('El elemento se encuentra en la posición ' + indice);
}
    else{
        console.log('El elemento no existe');
    } */
/// INCLUDES:  Permite saber si un elemento que estoy buscando existe o no, devolviendo un booleano // true or false. 
//miArray.includes('elElementoABuscar');

/* console.log(mascotas.includes('nilo')); 
// validación con el includes
if (mascotas.includes('nilo')){
    console.log(`nilo existe`);
} */

///REVERSE: Da vuelta los elementos del carrito de atrás para adelante o visceversa. AFECTA AL ARRAY ORIGINAL. 
/* 
mascotas.reverse();
console.log(mascotas); */

//ARRAY DE OBJETOS

/* const productos = [{nombre: 'cacao', precio: 205.2}, {nombre: 'mermelada', precio: 5465.5}]
console.log(productos);

//ACCEDER A UN OBJETO.
console.log(productos[0].nombre);

productos.push({nombre:'pasto', precio: 500});
console.log(productos.length);  */


//VER FOR OF CLASE PROXIMA 

                /// CLASE 7 FUNCIONES DE ORDEN SUPERIOR I 

//CONCEPTO DE ABSTRACCIÓN
//Mayor entendimiento al usuario al tener menor código a utilizar, teniendo un problema existente ya resuelto evitando crear código. 
//Resumimos un grupo complejo de instrucciones bajo una palabra clave (la función) que sugiere cuál es el problema a resolver por la misma. Ocultan detalles sobre la operación a resolver / lenguaje mas coloquial.

///FUNCION DE ORDEN SUPERIOR:
//Funciones que permiten recibir (por parámetro) o retornar otra función.

///RETORNAR FUNCIONES: 

function Dios(poder) {
    return function(nombre){
        console.log(nombre + ' ahora puede ' + poder)
    }
}

function Jebus(poder){
    switch(poder){
        case 'volar':
            return function(nombre){
                console.log(`${nombre} ahora puede volar`);
            }
        case 'llegar a fin de mes': 
            return function(nombre){
                console.log(`${nombre} ahora puede llegar a fin de mes`);
            }
        default:
            return function(nombre){
                console.log(`${nombre} ahora puede ${poder}`)
            }
    }
}
// VOLAR ES EL PARÁMETRO QUE PIDE LA FUNCION DIOS ORIGINAL BAJO LA QUE SE VA A EJECUTAR EL RETURN DE LA OTRA FUNCION.
const elMilagro = Dios('volar');
elMilagro('pepe');
elMilagro('Juancito');

const otroMilagro = Dios('hacer lo que se le cante');
otroMilagro('Camila');

/* 
let milagro = prompt('ingrese el milagro que desee poseer');
let nombreMilagro = prompt('ingrese quien recibira el milagro');
const milagroso = Jebus(milagro);
milagroso(nombreMilagro); */

///RECIBIR Y EJECUTAR FUNCIONES POR PARÁMETRO 

const miArray = ['Pablo', 'Pachu', 'Miranda', 'Juan'];
let totalmiArray = '';

function porCadaUno(array, accion) {
    for (const elemento of array){
            accion(elemento);
    }
}
/* porCadaUno(miArray,console.log); */

//LA FUNCION PORCADAUNO RECIBE COMO 1ER PARAMETRO EL ELEMENTO CON EL QUE SE VA A REALIZAR LA ACCION Y DE SEGUNDO PARAMETRO LA FUNCION QUE SE REALIZARÁ. El FOR..OF recorre los elementos DENTRO del array, y de ahí toma la información para utilizar en la funciónn porCadaUno. 

/* function suma(valor){
    totalmiArray = totalmiArray + valor;
} */

/* porCadaUno(miArray,suma); */ ///
///OTRA MANERA DE DECLARAR LA FUNCION // SI NO SE VUELVE A USAR LA FUNCION ES MAS FACIL USARLO ASÌ YA QUE EVITAS CODIGO POR FUERA.
porCadaUno(miArray, (valor) => {totalmiArray = totalmiArray + valor});
console.log(totalmiArray);

///METODOS DE BUSQUEDA Y TRANSFORMACIÒN SOBRE LOS ARRAYS:
///utilizan como parametro funciones de alto orden

//forEach: Itera sobre el array y por cada elemento va a ejecutar la función que se le envíe por parámetro. Esa accion requiere que reciba un parámetro. CON ARROWFUNCTION - NO NECESITA RETURN.

const unArray = ['Pedro', 'Pablo', 'Camila', 'Juana'];

const mostrar = function(elemento){
    console.log(elemento);
}
unArray.forEach(mostrar);

///DECLARACION DE LA FUNCION. El resultado es igual al de arriba solo que no se declaró la función como tal sino que se utiliza como expresión de función.
unArray.forEach((elemento) => console.log(elemento));

////otro ejemplo con objetos
const pokemon = [];

pokemon.push(new Pokemons('Pikachu', 'electrico', 'ash', 1, 500, 600,55555));
pokemon.push(new Pokemons('Pikachuss', 'electrico', 'adaaash', 55, 3300, 700));
pokemon.push(new Pokemons('Charmander', 'fuego', 'Brock', 'lanzallamas', 400, 250,20000));
pokemon.forEach((pokemon) => (console.log(pokemon.nombre)));

//FIND: Recibe una funcion de comparacion por parámetro. ESA FUNCION TIENE QUE RETORNAR TRUE OR FALSE. El metodo retorna EL PRIMER ELEMENTO QUE CUMPLA CON ESA CONDICIÓN. 
///SI NO ENCUENTRA RESULTADO, DEVUELVE UNDEFINED. 

const pokemonEncontrado = pokemon.find((pokemon) => {return pokemon.nombre === 'Pikachu'});
console.log(pokemonEncontrado);

///FILTER: Recibe una función comparadora por parámetro y retorna UN NUEVO ARRAY con las coincidencias. Lo devuelve VACIO o con datos. 

const pokemonDeFuego = pokemon.filter((pokemon) => {return pokemon.tipo === 'electrico'});
console.log(pokemonDeFuego);
pokemonDeFuego.forEach((pokemon) => console.log(pokemon));


///SOME: Funciona similar al find, recibo el elemento en la arrow y debo retornar true or false. Se fija que ALGUN elemento coincida con el criterio de búsqueda. 


const productos = [{nombre: 'chocolate', marca: 'cadbury'},
    {nombre: 'desodorante', marca: 'rexona'},
    {nombre: 'arroz', marca: 'luchetti'}]

if(productos.some((item) => {return item.marca === 'rexona'})) {
    console.log('esta lista de productos contiene un item de la marca rexona, tiene descuento.')
}
    else{
        console.log('esta lista no tendrá descuento.')
    }

///MAP: método de transformación. Crea un nuevo array con todos los elementos del array original, pero transformados según las operaciones que haya en la arrow que se envíe. MISMA Q DE ELEMENTOS. 

const carritoSinIVA = [
    {nombre: 'chocolate', marca: 'cadbury', precio: 522},
    {nombre: 'desodorante', marca: 'rexona', precio: 755},
    {nombre: 'arroz', marca: 'luchetti', precio: 22.5}
                    ]

const carritoConIVA = carritoSinIVA.map((item) => {return {nombre: item.nombre, marca: item.marca, precio: item.precio*1.21}});
console.log(carritoSinIVA);
console.log(carritoConIVA);

///devolviendo una lista de los nombres de pokemons.
const nombresPokemons = pokemon.map((pokemon) => pokemon.nombre);
console.log(nombresPokemons);

///REDUCE: permite obtener un unico valor tras iterar sobre el array. Funciona como un método que RESUME EL ARRAY A UN UNICO VALOR DE RETORNO. Método de abstracción.

const totalCarrito = carritoConIVA.reduce((total, item) => {return total + item.precio}, 0);
//PRIMER PARÁMETRO LA ARROW(recibe dos parámetros tmb. 1.DONDE ACUMULA // 2. EL ITEM/ELEMENTO QUE ESTÁ RECORRIENDO.), 2DO PARÁMETRO EL VALOR INICIAL(CERO EN ESTE CASO)
console.log(totalCarrito);

///SORT: Reordena un array segun un criterio que definamos. AFECTA EL ARRAY ORIGINAL. 
///si el retorno devuelve un valor mayor a 0 (positivo) pone el item2 delante del item1. Si es al reves, pone el item1 antes que el item2. 
///ITEM1-ITEM2 DE MENOR A MAYOR. ITEM2-ITEM1 DE MAYOR A MENOR

carritoSinIVA.sort((item1, item2) => {return item2.precio - item1.precio});
console.log(carritoSinIVA);

