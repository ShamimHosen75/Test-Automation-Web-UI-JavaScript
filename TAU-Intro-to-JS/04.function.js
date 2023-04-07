function sum (a, b){
  return a+b;
}

console.log(sum(20, 10)); //30


// Another examples 
function product (a, b){
  return a*b;
}

console.log(product(5,15)); //75

// Another Examples 
const bigProduct = product(5353, 134534);
console.log(bigProduct);


setTimeout (function (){
  console.log("Hey, I am an Anonymous!");
}, 1000);