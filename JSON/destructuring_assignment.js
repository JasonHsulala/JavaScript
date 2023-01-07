let person = {
    name:"Mary",
    age:28,
    email:"mary@gmail.com"
};//物件屬性
[{
    name:"John",
    age:35,
    email:"john@gmail.com"

}]
let {name,age,email}=persons[0];
let {name:myName, age:myAge, email:myEmail} = person[1];

let name,age,email;//宣告三個變數
let {name:myName, age:myAge, email:myEmail} = person;//person先把值給name,name再把值指派給myName

console.log(myName);
console.log(myAge);
console.log(myEmail);//三個變數