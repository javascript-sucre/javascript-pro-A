//variables
var cantAlumnos = 15; //entero
var temperatura = 21.5;
var nombre = "Benji Castillo";
var frameworks =Array("AngularJs", "Angular", "React","Ember", "Aurelia");
var lenguajes = ['c','c#',"javascript"];
var developer = true;
console.log(frameworks);
console.log(lenguajes);
console.log(developer);



//condicionantes
if(developer){
	console.log("Sos developer!")
}else{
	console.log("No sos developer!, que esperas?")
}

//iterativas
con = 1;
while(con <= 10){
	console.log("hola mundo")
	con ++;
}
for (var i=1 ; i <= 5; i++) {
	console.log("hola mundo "+i);
}

frameworks.forEach(function(element) {
    console.log(element);
});
//funcione sin parametros
function hello() {
  console.log("Hola ");
}
//funcion con parametro

function helloName(nombre){
	console.log("Hola !"+nombre);
}

//variables locales y globales
function helloLocal(){
	var nombre = "Benji ;)";
	console.log("hola ! "+nombre);
}
function helloGlobal(){
	console.log("hola! "+this.nombre);
}

//call permite llamar a cualquier el objeto que actuará como this dentro de la función llamada,
// así como los parámetros adicionales que sean necesarios.
var player = { name: 'benji Castillo' };

function setNumber(number) {
  this.number = number;
}
function SetAtributos(games, score){
  this.games = games;
  this.score = score;		
}
setNumber.call(player, 35);
console.log(player); // 35

SetAtributos.apply(player, [ "Super Mario",1000]);
console.log(player)
//El método .apply() actúa de forma bastante similar a .call(), 
//pero con una variación, solo recibe dos argumentos, el primero es el contexto de la función

