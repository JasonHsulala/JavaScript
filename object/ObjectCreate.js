var person = {name:"Kevin",age:32,height:175,weight:64};
console.log(person);
var person = {name:"Kevin",age:32,height:175,weight:64,bmi:function(){return this.weight / ((this.height / 100) ** 2);}};
console.log(person);
console.log(person.bmi());
let person = {name:"Kevin",age:32,height:175,weight:64};
console.log(person);
console.log("The object is"+person);
console.log("This object is %O",person);

let jsonText = Json.stringify(person);
console.log(typeof jsonText); 
let p = JSON.parse(jsonText); 
console.log(p); 
console.log(typeof p);

let keys = object.keys(person);
let values = object.values(person);

keysArray.forEach(function(key,index){
    console.log(person[key]);

});