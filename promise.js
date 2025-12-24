// const MYpromise = new Promise((resolve,reject)=>{  
//     let success = true;
//     if(success){
//         resolve("successfully get the data");
//     }
//     else{
//         reject("not successfully");
//     }
// });
// MYpromise
// .then(result=>console.log(result))

// .catch(error=>console.error(error));

// fetch("https://randomuser.me/api/")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("not fetch"+response.status);
//         }
//         return response.json();
//     }
//     )
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// async function fetchData() {
//     try {
//         const response = await fetch("https://randomuser.me/api/")
//         const data = await response.json();
//         console.log(data);
//     }
//     catch (error) {
//         console.log( "errrrr",error);
//     }
// }
// fetchData();



