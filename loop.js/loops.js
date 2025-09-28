for (let i = 0; i < 5; i++) {
  console.log(i);
}

let i = 0;
while(i < 5) { console.log(i); i++; }

do { console.log(i); i++; } while(i < 5);

for (let x of [1,2,3]) console.log(x);

for (let key in {a:1,b:2}) console.log(key);
setTimeout(()=>console.log("Hello after 2 sec"), 2000);
//setInterval(()=>console.log("Repeating..."), 1000);
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Done!"), 2000);
});

promise.then(result => console.log(result));
let obj = { name: "Sunil", age: 22 };
let str = JSON.stringify(obj); // Object → JSON
let newObj = JSON.parse(str);  // JSON → Object
localStorage.setItem("name", "Sunil");
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
