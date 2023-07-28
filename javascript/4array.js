// array is a collection of hemogenious as well as heterogenious data types 

// homogenious =>same data type

var a=[12,34,45,56] // all are integer data type
var b=["hello" ,"everyone","whats","up"] // alsl are string data type


//heterogenious => different data type
 var c=[ 12,123.4 ,true,"arman",false,"go_down"];
  

 console.log(typeof(a));
   
//  var name=["java","operting_system","dsa","python","c/c++","javascript"]; // =>Element
//           // 0        1               2     3        4         5         // =>index/position
             
var city = ["delhi", "mumbai","kolkatta", "chennai", "banglore","kerala"]; 
//            0        1          2          3           4          5
 console.log(city[3]) // chennai
  console.log(city[0])//delhi

  //push => add an element at end of array
   

console.log(city.push("ranchi")); //it will return length of an array (7)
console.log(city)//(7) ['delhi',- 'mumbai', 'kolkatta', 'chennai', 'banglore', 'kerala', 'ranchi']
console.log(city.push("paris")); // 8
console.log(city)//8) ['delhi', 'mumbai', 'kolkatta', 'chennai', 'banglore', 'kerala', 'ranchi', 'paris']


// pop => remove last element from an array 
 
console.log(city.pop()); // paris
console.log(city)//(7) ['delhi', 'mumbai', 'kolkatta', 'chennai', 'banglore', 'kerala', 'ranchi']


// unshift  => add an element from start of an  array

city = ["delhi", "mumbai","kolkatta", "chennai", "banglore","kerala"]; 
 console.log(city.unshift("d1032h"));
  
 var x=["🚑","🚑","🚛","🚅","🚞","🚇","🚠"]
console.log(x.unshift("👧","👱‍♀️"));//9
console.log(x);//(9) ['👧', '👱‍♀️', '🚑', '🚑', '🚛', '🚅', '🚞', '🚇', '🚠'];
  

// shift => remove a element from start of an array

console.log(x.shift());// 👧
console.log(x);// (8) ['👱‍♀️', '🚑', '🚑', '🚛', '🚅', '🚞', '🚇', '🚠'] 


// slice[startindex,endindex] end_index not included 


city = ["delhi", "mumbai","kolkatta", "chennai", "banglore","kerala"]; 
//        -6         -5        -4          -3        -2         -1
console.log(city.slice(1,3))//(2) ['mumbai', 'kolkatta']
console.log(city)//(6) ['delhi', 'mumbai', 'kolkatta', 'chennai', 'banglore', 'kerala'] 
//there is no any changeses reflect in original array


console.log(city.slice(0,-2));//(4) ['delhi', 'mumbai', 'kolkatta', 'chennai']
console.log(city.slice(-6,-1))//(5) ['delhi', 'mumbai', 'kolkatta', 'chennai', 'banglore']

console.log(city.slice(-1,-6))//[]


//splice[startindex,deleteitem,insertitem]
city = ["delhi", "mumbai","kolkatta", "chennai", "banglore","kerala"]; 
console.log(city.splice(1,3))// ['mumbai', 'kolkatta', 'chennai']
console.log(city)//(3) ['delhi', 'banglore', 'kerala']
console.log(city.splice(1,0,"ranchi","tata","dhanbad"))//[]
console.log(city)//(6) ['delhi', 'ranchi', 'tata', 'dhanbad', 'banglore', 'kerala']
