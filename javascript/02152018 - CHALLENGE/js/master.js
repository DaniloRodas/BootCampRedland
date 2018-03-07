//CHALLENGE 2

var  zipCode = ['hola','como','estas'];
//zipCode.push(92374);

//document.write();
//zipCode.pop();
//document.write(zipCode);

var zip ="<ul>";

for(var i= 0; i< zipCode.length; i++){
  zip +=  "<li>" +zipCode[i]+"</li>";

//  document.getElementById("output").innerHTML = zipCode[i];
 ///document.write(i +'.- <b>Zip Code</b> '+zipCode[i]+ '<br>');

}
 zip += "</ul>";
   document.getElementById("output").innerHTML = zip;
/*
document.write('<br >');
document.write(zipCode[0]);
document.write('<br >');
document.write(zipCode.shift(zipCode));
document.write('<br >');
document.write(zipCode.slice(0,3,5));
*/

//CHALLENGE 3

var state =['California', 'Florida', 'New Mexico'];
var NewState = ['Nueva York', 'Los Angeles'];
var totState = state.concat(NewState);
var sortTotState = totState.sort();

sortTotState.map(function(state,t){
  document.write('<b>State</b> '+state+ '<br>');

});


var bikes = ['Trek', 'DeVinci', 'Santa Cruz', 'Bianchi', 'Schwinn', 'Huffy'];

var mountainBikes = ['Trek', 'DeVinci', 'Santa Cruz'];

var otherBikes = ['Bianchi', 'Schwinn', 'Huffy'];
var hash = {};
var resBikes = bikes.concat(mountainBikes, otherBikes);
resBikes.sort();


console.log(resBikes.filter(function(current){
  var exist = !hash[current.id] || false;
  hash[current.id] = true;
  return exist;
})); //show those that do not repeat;
