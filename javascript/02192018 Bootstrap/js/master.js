function createNewItem(){
  var inputValue = document.getElementById('newItemField').value;
  if(inputValue == ''){
    alert('You must tyoe in some text');
  }else{
    //<li class="list-group-item">cras justo odio <button type="button" class="btn btn-danger">Delete</button> </li>

    var li = document.createElement('li');
    li.className = 'list-group-item';
    var text = document.createTextNode(inputValue);
    li.appendChild(text);
    document.getElementById('todosList').appendChild(li);
    document.getElementById('newItemField').value ="";

    var button = document.createElement('button');
    button.className = 'btn btn-danger';

    var btnText = document.createTextNode('Delete');

      button.appendChild(btnText);


    li.appendChild(button);

var claseButtons = document.getElementsByClassName('btn-danger');
  for(var i = 0; i < claseButtons.length; i++ ){
    claseButtons[i].onclick = function(){
      var li = this.parentElement;
      li.style.display = 'none';
    }
  }

  }

}
