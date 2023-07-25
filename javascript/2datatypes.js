// type, casting =>  it is a technique to convert from one data type to onther
//Es5
var a="23.45"
console.log(parseFloat(a))//23.45
console.log(parseInt(a))//23
var a="hii"
console.log(parseInt(a))//NaN
 

// but in Es6
var a="2"
console.log(Number(a))//23.45
var b=2
var c=+a + +b;
console.log(c)



var a="123delhi"
var b="delhi123"
var c="123delhi123"
console.log(parseInt(a))//123
console.log(parseInt(b))//NaN => not a number
console.log(parseInt(c)) //123


