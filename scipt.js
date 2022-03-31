


//string====> primitive data type
//



// when you use backtik(` `) then not use of /n for new line beacause is give in new line .


// multiple lines in the code but in the console it shows in single line .
//better reability in code =>
// let str="hello-\
// i'am continuting in line2-\
// this line3";
// console.log(str);


// let hello="hello /n world";
// let hello2= `hello
// world`;
// console.log(hello===hello2);//true

//escape character

// let str2='hello. how \'re you doing ';
// console.log(str2);

// let str3="hello that  \"color\" is red";
// console.log(str3);


////////////////string having prpeerty is length................
// let str4="hello";
// console.log(str4.length);



// accessing string character
//[]or charAt()
// console.log(str4[2]);//  l
// console.log(str.charAt(2));// l

// ...............................................string are immutable..............
//we can not change inside the string .
// we can not reasign the string 
//string replace nhi kr sakte matlab  
// let str5="apple";
// str5[0]="b";//aaise nhi kr sakte
// console.log(str5[0]);// "a" hi aayega

///.................................concatination of string ,[ +, concat]
// let name='vijay pratap sighn';
// let age=22;
// let statement = name + " is " + age + " years old";
// console.log(statement);// vijay pratap sighn is 22 years old 

// console.log(name.concat(" " + age));



//...............................................string method..................................................

// ......indexof 
// it include space also and return number index of that string .
// when the string is not present then give return -1.
let str6='widget with id';
console.log(str6.indexOf("with"));// 7 
console.log(str6.indexOf('id'));//1  because it serch from starting then id is give in index of 1 so give return 1
console.log(str6.indexOf('id', 2));//12 if we use in index of with using thier index number then we got 12.


//........includes() ===> it return boolean value
let str7="widget";
console.log(str7.includes("widset"));//true
console.log(str7.includes("with"));//false

//..........slice(start,end) ==> it give substring 
//aaplyapa jar negative index pahije asel tr ulat count karaych string 

let str8="stringify";
console.log(str8.slice(0,5));//strin  
console.log(str8.slice(3));//ngify


///..................substring=> it does not work with negative index
let str9="stringify";
console.log(str9.substring(2,6))//ring

//...................split ==> this method convert your string in to an array.. , it work on string

let greeting = 'hi how are you';
let resultArr= greeting.split(' ');
let resultArr1= greeting.split('o');// remove o and return into aaray 

console.log(resultArr); //Array(4) [ "hi", "how", "are", "you" ]
console.log(resultArr1);//Array(3) [ "hi h", "w are y", "u" ]
console.log(resultArr.join('-'));//hi-how-are-you  // join is using into string  ,, it work on only array


///...........chainable ==> it give one after another 
let strA="what*are*you*doing";
console.log(strA.split('*').join('-'));//what-are-you-doing // this is chainable 


let arr=[1,2,3,4];
console.log(arr.reverse());//Array(4) [ 4, 3, 2, 1 ] array will be reverse

// ...............replace() , replaceAll() ==>>

const temp = 'john is a good guy . john is working as developer ';// const is modified but not assign 
console.log(temp.replace('john', 'rahul')); //replace only the first occurence 


///................trim => is used for remove the gap between starting and ending 

let strB= '                                       rahul----------             *******               sharma';
console.log(strB.trim());




//== ......> automatically conver to number , then the comparision
//===......>  

















