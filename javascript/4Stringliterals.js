//string literal(Es5) and template literal(Es6)


//an avengers is  an action movie with rating of 4.5 and form the category of holywood
var mname = "avengers";
var rating = "5";
var type = "action";
var category = "holywood";

//Es5

// var output = "an" + mname + " is " + "an" + type + " with " + " rating " + " of " + rating + " and " + " form " + " the " + " category " + " of " + category + ".";
// console.log(output);


//Es6
// ` ` =>backtick
// ${ } => interpolation =>substitute the value


var output=`an ${mname} is  an ${type} movie with rating of ${rating } and form the category of ${category}`
console.log(output);
