// function createOrder(x,fn){
//     console.log(x);
// }

// function makepayment(orderId){
//     console.log(orderId);
//     setTimeout(()=>{fn('lik123')},1000);
//     setTimeout(()=>{fn('lik123')},1000);
// }

// createOrder('soap',makepayment);


///               how to write promises


// const pr=new Promise((x,y)=>{
//     if(true){
//         setTimeout(()=>{
//             x('nikal be ');
//             y('some items are out of stock',4000);
//         },5000)
//     }
//     else{          
//  y('error');
//     }
// });
// console.log(pr)


// pr.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })
// console.log(pr);
// setTimeout(() => {

// }, timeout);

// console.log('hello');


// const arr = [10,12,45];
// const arr2 = [10,12,45,12,45,56];

// const ans = arr.map((a)=>{
//     console.log(a);
//     return a;
// });
// console.log(ans);





////     filter

//  const arr = [10,12,45];
//  const ans =arr.filter((a)=>{
//     if(a>20)return true;
//     else return false;
//  });

//  console.log(arr);
//  console.log(ans);

// const arr =[
//     'Delhi','Mumbai','Chennai','Kolkata','Pune','India','Russia','USA','Iraq'
// ]
// const ans = arr.filter((s)=>{
//     if(s.includes('i') || s.includes('I')){
//         return true;
//     }
//     else return false;
// });

//   console.log(ans);

// const arr =[
//     'Delhi','Mumbai-india','Chennai-INDIA','Kolkata','Pune-india','India','india','USA','Iraq'
// ]

// const ans = arr.filter((s)=>{
//     const ns = s.toLowerCase();
//     if(s.includes('india') || s.includes('I')){
//         return true;
//     }
//     else return false;
// });

// const ans2 = arr.filter((a)=>a.toLowerCase().includes('india'));

//   console.log(ans);
//   console.log(ans2);

const arr = [2, 4, 6, 8, 9];

const ans = arr.reduce((a, b, c, d, e+++) => {
    console.log(a, b, c, d, e);
    return a + b;
});

console.log(ans);


