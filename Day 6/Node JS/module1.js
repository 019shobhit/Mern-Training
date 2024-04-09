function sum(a,b){
    console.log(a+b);
}
function mul(c,d){
    console.log(c*d);
}
const name = 'Ajay'
module.exports={
    mul,
    sum,
    'name': name,
};

// module.exports=sum;
// module.exports=mul;

// sum(5,20);