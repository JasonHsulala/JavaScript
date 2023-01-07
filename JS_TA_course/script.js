null == undefined;
//先轉型
Boolean(null)
=>false
Boolean(undefined)
=>false
false == false =>true
//btn - click
//input - change, focus, input, blur
//checkbox - change
//radiobtn - change



/*const btn1 = document.querySelector('.btn1')

function myAlert() {
    alert('hello world')
}
// function myAlert(){
//     alert('hello world')
// }
// hosting
btn1.addEventListener('click', myAlert)

// function 宣告
// 具名(比較不容易踩坑)hoisting
function foo() {
    console.log('bar')
}
// 匿名
const foo1 = function () {

}
btn1.addEventListener('click', function () { })

// arrow
const foo2 = () => {
    //this 有關的坑
}

// 掛click event
//推薦 addEventListener
// 1.直接掛在HTML
// 見HTML
// 2.onclick

console.dir(btn1)
btn1.onclick = myAlert
btn1
// 3.addEventListener
btn1.addEventListener('click')
function myAlert() {
    alert('hello world')
}

let cityObject = {
    taipei: [
        { id: 'taipei01', district: '中正區' },
        { id: 'taipei02', district: '萬華區' },
        { id: 'taipei03', district: '信義區' }],
    taoyuan: [
        { id: 'taoyuan01', district: '桃園市' },
        { id: 'taoyuan02', district: '八德市' },
        { id: 'taoyuan03', district: '中壢市' }],
    taichung: [
        { id: 'taichung01', district: '台中市' },
        { id: 'taichung02', district: '⼤⾥市' },
        { id: 'taichung03', district: '清⽔市' }]
}




const Keelung = [
    { id: 'taipei', name: '台北' },
    { id: 'taoyuan', name: '桃園' },
    { id: 'taichung', name: '台中' }]

const student30 = {
    id: 30,
    name: 'earth',
    en_name: 'earth',
    full_name: 'CHEN, YEN-TING',
    attributeStr: 'E,F,S',
    attributeArr: ['E', 'F', 'S'],
    attributeobj: {
        E: true,
        F: true,
        S: true,
        d: false

    }
 


}*/