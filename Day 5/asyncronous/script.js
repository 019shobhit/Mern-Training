// console.log('Gec start');

function pp() {
    console.log('printstart');
    let ans = 2 + 3;
    console.log(ans);
    console.log('printend');
}

// setTimeout(pp,1000);

// console.log('GEC end');

//    EVENT HANDELER

const buto = document.getElementById('btn');
buto.addEventListener("click", pp);


/////////////////////////////           PROMISE           ///////////////////////////////


// console.log('Start');
// const req = fetch('https://api.github.com/user/deepak3440') .
// console.log(req);
// req.then(()=>console.log('fetched'));

// console.log('Start');
// fetch('https://dummyjson.com/products/1')
//     const res = req.then(res => res.json())
//     res.then((data) => console.log(data))
// console.log('End');

console.log('Start');
fetch('https://dummyjson.com/products/1').then(res => res.json()).then((data) => console.log(data));
    // const res = req.then(res => res.json())
    // res.then((data) => console.log(data))
console.log('End');



