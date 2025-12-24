// //console.log("hellow");
// //let age = 25;
// //document.getElementById("myH1").textContent = 'hellow'
// //let price = 10.99;
// //let gpa = 7.80;
// //let online = true;
// //let newage = age * 2;
// //age += 1;
// //console.log(typeof online);

// //console.log(`you are ${age} and price is ${price} and your gpa is ${gpa}`);
// //console.log(typeof age);
// //document.getElementById("myH1").textContent = `age is ${age}`;
// //co//nsole.log(newage);
// //window.alert("hellow bro");
// //name = window.prompt("what's your name");
// //console.log(name);
// //let username;
// //document.getElementById("submitbtn").onclick = function() {
// //  username = document.getElementById("mytext").value;
// //document.getElementById("myH1").textContent=`hi ${username}`;
// //}
// // const PI = 3.14;
// // let radius;
// // let circumference;
// // document.getElementById("submitbtn").onclick=function(){
// //     radius = document.getElementById("mytext").value;
// //     radius = Number(radius);
// //     circumference = 2*PI*radius;
// //     document.getElementById("myh3").textContent=circumference + "cm";
// // }
// // let min = 1;
// // let max = 6;

// // let random = Math.floor(Math.random()*max)+min;
// // console.log(random);
// // let minv=10;
// // let maxv=90;
// // let value = Math.floor(Math.random()*(maxv-minv+1)+minv);
// // console.log(value);
// // sum( getresult ,5, 6);
// // function sum(callback, x, y) {
// //   let result = x + y;
// //   callback(result);
// // }
// // // function getresult(result) {
// // //   console.log(result);

// // }
// // function getresult(result){
// //   document.getElementById("myh1").innerText= result;
// // }
// let number = [1,2,3,4,5];
// let result = number.map(square);
// console.log(result);

// function square (element){
//     return Math.pow(element , 2);
// }

// let dates = [ "2025-1-10" , "2026-2-22"];
// const finalform = dates.map(format);
// console.log(finalform);

// function format(element){
//     const part = element.split("-");
//     return `${part[2]}/${part[1]}/${part[0]}`;
// }
// const value=[2 ,22, 22 ,5];
// const total = value.reduce(namee);
// console.log(`$${total}`);

// function namee (accumulator , element){
//   return accumulator + element;
// }
// const value=[2 ,22, 22 ,5];
// const qube = value.map(function(element){
//   return Math.pow(element,3);
// });
// console.log(qube);
// const value=[2 ,22, 22 ,5];
// const evennumber = value.filter((element)=>element % 2 === 0 );
// console.log(evennumber);
// let person1={
//     name:"sunil",
//     say:function(){console.log(`hello ${this.name}`);
//     }
// }
// person1.say();
// function car(model,color,year){
//     this.model=model,
//     this.color=color,
//     this.year=year
// }
// const car1 = new car("bmw","black","2025");
// console.log(car1.color);
// class MathUtil{
//     static PI = 3.14;
//     static getArea(radius){
//         return this.PI * radius * radius;
//     }
// }
// console.log(MathUtil.getArea(1));
// class User {
//     static usercount = 0;
//     constructor(username) {
//         this.username = username;
//         User.usercount++;

//     }
// }
// const user1 = new User("sunil");
// console.log(user1.username);
// console.log(User.usercount);

// class Area {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
//     set height(newHeight) {
//         if (newHeight > 0) {
//             this._height = newHeight;
//         }
//         else {
//             console.error("please enter a valid height");
//         }

//     }
//     set width(newWidth) {
//         if (newWidth > 0) {
//             this._width = newWidth;
//         }
//         else {
//             console.error("please enter a valid width");
//         }

//     }
//     get height() {
//         return this._height;
//     }
//     get width() {
//         return this._width;
//     }

// }
// const Area1 = new Area(4,5);
// // Area1.height=1;
// // Area1.width=4;
// console.log(Area1.height);
// const array = ["hi" , "hellow" , "sunil" , "thunder"]; //destucture and swap
// [array[0],array[3]]=[array[3],array[0]];
// console.log(array);
const number = [1,2,3,6,7,4,9];
number.sort((a,b)=>(a-b));
console.log(number);
