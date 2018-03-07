
function submitform1(e){
  // console.log(e.preventDefault());

    var errorMessage = null;

    document.getElementById('errorAlert').style.display = none;
    document.getElementById('fName').style.display = none;


    var  firstnameValue = document.getElementById('fName').value;
      if(firstnameValue == ""){
      document.getElementById('fName').classList += ' is-invalid';
      console.log(firstnameValue);
    }
}
