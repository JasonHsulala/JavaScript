var array1 = [1,3,5,7];

// 顯示型別 - 不精準
console.log(typeof array1);

// 判斷是否為Arrray實例 - 精準
console.log(array1 instanceof Array);
console.log(Array.isArray(array1));

let Cars = ['BMW','Benz','Audi','Lexus'];

Cars.forEach(function(item,index){
    console.log(index,item,typeof item)
})

//或⽤Arrow Function 
Cars.forEach((item, index) => { 
    console.log(index, item, typeof item) 
   })
