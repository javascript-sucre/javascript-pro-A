// arrays
//multiples valores, en una sola variable

var ciudades = ["Sucre","La Paz","Buenos Aires"];

var paises = new Array("Argentina","Bolivia","Colombia");

console.log(paises);
console.log(ciudades);
//pueden ser de diferentes tipos de datos

var detodo = [100,"arroz con leche",['linux',4.4],"Vilma Palma"];

console.log(detodo);

//accediendo a los elementos
//Para acceder a uno de los elementos dentro de un array, 
//necesitaras utilizar los corchetes y un indice:
//siendo el primer indice 0

//var tresportres =[[1,2,3],[4,5,6],[7,8,9]];
console.log(paises[0]);

//Propiedades y metodos
//concat 
//devuelve un nuevo arreglo
// que combina los valores de dos matrices.
var taco = ["tortilla"];
taco = taco.concat(["salsa","queso","guacamole"]);
console.log(taco); 
//pop
//remueve el ultimo elemento y lo muestra 
taco.pop()
//push
//anade un elemento al arreglo y devuelte el tamano
taco.push("chile");
//reverse
//retorna arreglo en orden opuesto
// taco.reverse();

// --- POO ---


//En JavaScript, los objetos son lo mas. 
//Si entendés objetos,
// entendés JavaScript.
// En JavaScript casi todo es un Objeto.
// "casi", por que solo los valores o tipo de datos primitivos 
//no son objetos string, number, boolean , null , undefined

//Creacion de Objetos de forma literal
// Utilizan las llaves para nombrar los valores o propiedades
var curso1 = {
   name : "Javascript Pro",
   duration :"4 semanas",
   price : 50,
   costo : function(){
       return "El costo es de "+this.price;
   } 
}
//Crear funcion para ver si puedo pagar el curso ;)

//Creacion de Objetos con palabra Reservada Object

var curso2 = new Object();
    curso2.name = "TypeScript";
    curso2.duration = "2 semanas";
    curso2.price = 25,
    curso2.costo = function(){
        return "El costo es de "+curso2.price;
    }

//Creacion de Objetos con constructor

function Curso(name, duration, price){
    this.name = name;
    this.duration = duration;
    this.price = price;
    this.costo = function(){
        return "El costo del curso es de "+this.price;
    }
}

curso3 =  new Curso("Animaciones Web","3 semanas",100)
//Propiedades de Objetos

//adicionar una propiedad
curso3.start = new Date();

var fecha = new Date();

console.log(fecha);

//eliminar una propiedad
delete curso3.duration;

// for(valor in curso2){
//     console.log(curso2[valor]);
// }

//-- Prototypes --

//Cada objeto JavaScript tiene un prototipo. 
//El prototipo es también objeto.

//Todos los objetos JavaScript heredan sus propiedades y métodos de su prototipo.

//crear un prototipo
//La forma estándar de crear un prototipo de objeto 
//es utilizar una función de constructor de objetos:

function Person(name, lastName, age, eyecolor ){
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.eyecolor = eyecolor;
    this.mayordeEdad = function(){
        if(this.age >= 18){
            return "Es mayor de edad";
        }else{
            return "Es menor de edad";
        }
    }
}
var persona1 =  new Person("Luisa","Aranguiz",16,"azul");
//modificar edad
//anadir una propiedad al objeto
persona1.nacionality = "alemana";
persona1.age = 18;
var persona2 = new Person("Pedro","Gallardo",22,"cafe");
//si queremos obtener la propiedad de la persona2
//sera undefined, porque la nacionalidad adicionada es 
// del objeto persona1, no asi del prototipo
//anadir propiedades al prototipo persona
Person.prototype.nacionality = "Boliviana";
Person.prototype.developer = false;
//anadir metodo al prototipo Persona
Person.prototype.setDeveloper = function(valor){
    this.developer = valor;
}

// ---JSON --
//JavaScript Object Notation
//sintaxis para almacenar e intercambiar datos
// es texto, escrito con notacion de objetos
var comidasObjeto = [
    {
        "name":"Mondongo",
        "price":25,
        "delicious":true
    },
    {
        "name":"Parrillada",
        "price":40,
        "delicious":true
    },
    {
        "name":"Milanesa",
        "price":25,
        "delicious":true
    }   
];
var comidasJSON = JSON.stringify(comidasObjeto);
//Intercambio de datos
//para intercambiar datos de un cliente(Navegador) al servidor
//solo puede ser texto
//El texto puede ser leído y utilizado como formato de datos
// por cualquier lenguaje de programación.
function enviarDatos(){
    window.location = "php/server.php?data="+comidasJSON;
}


//--- DOM Document Object Model ---
// Es el modelo del documento (Pagina)
//Estandar de W3C (World Wide Web Consortium)
//construido como un arbol de objetos
// Javascript tiene el poder de manejar el DOM
//puede hacer lo siguiente
//cambiar los elementos, atributos,estilos,eliminar,agregar
//reaccionar a eventos, crear eventos

//Busqueda de elementos 

//metodo de acceso getElementById
//propiedad innerHTML, se usa para obtener o reemplazar el 
//contenido de elementos HTML
document.getElementById("saludo").innerHTML = "Hola mundo!";
var texto = document.getElementById("texto").innerHTML;
console.log(texto)

document.getElementById("saludo2").innerHTML = "Hola soy pollo";

function merienda(){
    var comida = document.getElementById("comida").innerHTML;
    alert(comida);
}

function miNombre(nombre){
    document.getElementById("minombre").innerHTML = nombre;
    document.getElementById("minombre").style.color = "blue";
    document.getElementById("minombre").style.background = "black";
}