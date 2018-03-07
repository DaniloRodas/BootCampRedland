

//Coding Challenge #1
/*
console.log(5<7); //true
console.log(7 === 7);//false | true
console.log(7 === 'seven'); //false
console.log( 4!== 5); //true

console.log('---------------------');



var a = 5;
var b = '5';
var c = 'JavaScript';

//console.log(typeof(a) != typeof(b)); //true


console.log(a == b); //true
console.log(a === b); //false

console.log('---------------------');
console.(5 =='5'); // true
*/
//******************************************************************************************//
//Coding Challenge #2
//create 5 expressions using logical operators (AND and OR)
//2 AND
//3 OR

//Make the first AND expression return true and the second return false


//Make ane or condition return true and  the next two retrun false (ond should
//fail both conditions; one should only fail one condition)
//AND

/*
console.info((20< 40) && (25 < 50));
console.info(20 != 40 && 25 < 50);

console.log('---------------------');
//OR
console.log( 10 == 25 || (25>30));
let x = '10';
let y = 10;
let z = 'Redlands'

console.log(typeof(x) != typeof(y));
console.log(typeof(x) ===  typeof(y)  || typeof(y)  !== 20 || typeof(z) == 'y');


var a = 5 > 7; //false
var b = 'string1' != 'string2'; //true
console.warn(a);
console.warn(b);
*/

// console.info((5>7) && 8);

//prompt the user for their age and save in a variable
//prompt the user asking if the are registered to vote and save answer
//in a variable

// if the user is elegiblre to vote (18 or older registered)
//output to oour div the message "you are able vote"

// if user is not old enogh, output the message 'You need to register'
//if user is neither old enough nor registered to vote " you need to register and grow up"

var age = Number(prompt('What is your age'));
  console.log(age);
  if( age >= 18  &&  age != NaN){
    document.getElementById('output').innerHTML = '<h1>You are able vote</h1>';

  } else{
    document.getElementById('output').innerHTML = '<h1>You need to register</h1>';
      if(confirm('Do you need Registration')==true){
      //  document.getElementById("output").innerHTML = '<h1>show to form</h1>';
        var name = prompt('Insert Full Name');
        let fname = (name == '')? true : false ;
        if(fname &&  age != NaN){
        

        }else{

        }

          document.getElementById("output").innerHTML = name;
        console.log('Show  to Form');

       }else{
          document.getElementById("output").innerHTML = '<h1>hide to form</h1>';
       }
  }


//if(comfirm(''))
