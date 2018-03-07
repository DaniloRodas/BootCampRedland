//CHALLENGE 1
var shoppingList = ['Apples', 'Bananas', 'Milk', 'Beans'];
shoppingList.push = ('Chicken');

let  content = "I have items <b>  \" " +shoppingList.length+" \"     </b> shopping list<br />";


document.getElementById("output").innerHTML =  content;

  list = "<ol>";
for(var i = 0; i < shoppingList.length; i++){
  //document.getElementById("output").innerHTML = shoppingList[i];
  //document.write(i + ".- My favorite food is <b>"+shoppingList[i] +'</b><br >');
  document.write(list ="<li>" +shoppingList[i] +"</li>");
}

  document.write("<br ><br ><b>Used Map</b>");
list = "<ul>";
document.write('<br />');
  shoppingList.map(function(item, index ){
    document.write(list ="<li>" +item +"</li>");

});
list += "<ul>";
  document.write("<br ><br ><b>Used pop</b><br >");
document.write(shoppingList.pop()); //print last in the list
