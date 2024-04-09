// const figlet = require("figlet");

// figlet("Hello Shobhit !",(err,data)=>{
//     console.log(data);
// });

// fetch('https://api.github.com/user/deepak3440')
// .then((res)=>{
//     return res.json();
// });
// .then((data)=>{
//     console.log(data);
// });

// ASYNCHORONOUS
// console.log('Start');

// async function getAPI() {
//     console.log('api calling');
//     const pr = await fetch('https://api.github.com/user/deepak3440');
//     console.log('making json')
//     const data = await pr.json();
//     console.log('fetched data');
// }
// getAPI();
// console.log('end');

console.log('Start');

async function getAPI() {
    const pr = await new Promise((res, rej) => {
        console.log('promise started');
        setTimeout(() => {
            console.log('Timeout 1....');
        }, 5000);
        console.log('promise completed');
    })
}
getAPI();
console.log('END');