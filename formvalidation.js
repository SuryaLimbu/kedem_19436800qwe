function SUBMIT()
{
    var firstname = document.forms["JobForm"]["firstname"];
      var lastname = document.forms["JobForm"]["lastname"];
      var email = document.forms["JobForm"]["email"];
      var info = document.forms["JobForm"]["info"];
      var position = document.forms["JobForm"]["position"];

    
    if(firstname.value == "")
        {
            window.alert("please enter your name");
            firstname.focus();
            return false;
        }
      
    if(lastname.value == "")
        {
            window.alert("please enter your name");
            lastname.focus();
            return false;
        }
    if(email.value == "")
        {
            window.alert("please enter your email");
            email.focus();
            return false;
        }
    if (email.value.index.indexOf("@", 0) < 0){
        window.alert("Please enter your valid e-mail");
        email.focus();
        return false;
    }
    if(info.value == "")
        {
            window.alert("please enter your info ");
            info.focus();
            return false;
        }
    if(position.value == "")
        {
            window.alert("please enter position");
            position.focus();
            return false;
        }

}