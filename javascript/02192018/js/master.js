function student(name){
  var grade = ['A', 'B', 'C', 'D', 'E']; //random Grade
  var totgrade = grade.length;
  index  = Math.floor(Math.random() * totgrade);
  return 'Hello: <b>' +name + '</b> You got grade of: <b>'+ grade[index] + '</b> on the quiz.';
}
var nameStudent = prompt("Insert Name Student");
if(nameStudent != ''){
  document.write(student(nameStudent));
}else{
  var nameStudent = prompt("Insert Name Student");
}
