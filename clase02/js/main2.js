// Arrays
// valor que contiene muchos valor
var ciudades = ["Sucre","Cochabamba","Tarija","Villamontes","Potosi"]; 
console.log(ciudades);
//para acceder a un valor de 
//el array se le pasa el indice
console.log(ciudades[1]);
//se obtiene el tamanio
var tam = ciudades.length;
console.log(tam);
//verifica el tipo de dato de la variable
typeof(ciudades);

var comidas = new Array("mondongo","pique","saice");

console.log(comidas);

//multidimensional

//ejercicio, hallar el campo papitas
var detodo = ["vilma palma",5,"azul",
                    ["Bolivar","Oriente"],
                    true,
                        [1,
                            [2.5,"Papitas"]
                        ]
            ];

console.log(detodo[5][1][1]);
//concat
var taco = ["tortilla"];
console.log("Solo tortilla "+taco);
taco = taco.concat(["salsa","queso","guacamole"]);
console.log("taco creado "+taco);             
//anadir un nuevo valor al array
taco.push("crema agria");
//quita un el ultimo valor
taco.pop();

// --- POO--
// En javascript casi todo es objeto
//En JavaScript, los objetos son lo mas. 
//Si entendés objetos,
// entendés JavaScript.
// "casi", por que solo los valores o tipo de datos primitivos 
// no son objetos string, number, boolean,float, null , undefined

//Creacion de Objetos de forma literal
// Utilizan las llaves para nombrar los valores o propiedades
 var mascota = {
     nombre : "Yuki",
     especie : "Felina",
     raza : "Normal",
     edad : 1.5,
     peso : "2 kilos",
     sexo : "Hembra",
     color : "Negro atigrado",
     habla: function(){
         if(this.especie == "Felina"){
             return " Meow ";
         }
         if(this.especie == "Canina"){
             return "Guau Guau";
         }
     },
     cambiarEspecie:function(especie){
         this.especie = especie;
     }

 }
 // imprime el objeto
console.log(mascota);
//imprimer el atributo nombre del objeto
console.log(mascota.nombre)


//Crear funcion para ver si puedo pagar el curso ;)

//Creacion de Objetos con palabra Reservada Object

var curso2 = new Object();
    curso2.name = "TypeScript";
    curso2.duration = "2 semanas";
    curso2.price = 25//Crear funcion para ver si puedo pagar el curso ;)

//Creacion de Objetos con palabra Reservada Object

var curso2 = new Object();
    curso2.name = "TypeScript";
    curso2.duration = "2 semanas";
    curso2.price = 25;
    curso2.costo = function(){
        return "El costo es de "+curso2.price;
    };
    
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

curso4 = new Curso("Videojuegos con JS","4 Semanas",150);
//

//Propiedades de Objetos    
//Protototype
//anadir propiedad al objeto
curso4.esBueno = true;


Curso.prototype.bueno = "es bueno";
curso5 = new Curso("Semantic UI","4 semanas ",200);
console.log(curso4);
console.log(curso5);

//JSON
//Javascript Object Notation
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
console.log(comidasJSON);

