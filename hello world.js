console.log('hello world')
//primitive 實質型別
let myInt = 123
let myString = 'build school'
let myBoolean = false
let myNull = null
let myUndefined = undefined
//object 參考型別
let myArr = ['build school']
let myObject = {name:'Jason',Age:25} 

  // myObject.name 取到 name 屬性的 value
  // myObject['name'] 取到 name 屬性的 value
  
  console.log(myObject['name'])
  
  // 對 myObject 新增 hight 屬性 value 為 174
  myObject.height = 174
  
  // 對 myObject 新增 weight 屬性 value 為 60
  myObject['weight'] = 60
  
  console.log(
    myObject
  )