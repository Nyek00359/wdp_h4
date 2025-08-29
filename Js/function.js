var count = 4;
function validate(){
        var un = document.myform.username.value;
        var pw = document.myform.password.value;
        var valid = false;
        var login = false;
        var unArray = ['terrible','salazar','soriano','protomartir','prado','ypil'];  // as many as you like - no comma after final entry
        var pwArray = ['glenn','claire','kyla','robby','erika','shoji'];  // the corresponding passwords;

        for (var i=0; i <unArray.length; i++) {
                if ((un == unArray[i]) && (pw == pwArray[i])) {
                        valid = true;
                        login = true;
                        break;
                }
        }
        if (valid) {
                alert ("Login was sucessfully processed.  You will be redirected to the members page now.");
                        window.sessionStorage.setItem('user',un);
                        window.sessionStorage.setItem('login',login);
                        window.location= "Profile/profile.html";
                        document.myform.username.value = "";
                        document.myform.pword.value = "";
                        setTimeout("document.myform.username.focus()", 25);
                        setTimeout("document.myform.username.select()", 25);
                        count --;
                        return false;
                }
        else{
                login = false;
        }
        var t = " tries";
        if (count == 1) {t = " try"}

        if (count >= 1) {
                alert ("Invalid username and/or password.  You have " + count + t + " left.");
                document.myform.username.value = "";
                document.myform.pword.value = "";
                setTimeout("document.myform.username.focus()", 25);
                setTimeout("document.myform.username.select()", 25);
                count --;
        }

        else {
                alert ("Still incorrect! You have no more tries left!");
                document.myform.username.value = "No more tries allowed!";
                document.myform.pword.value = "";
                document.myform.username.disabled = true;
                document.myform.pword.disabled = true;
                return false;
}

}

function User(){

        var user = sessionStorage.getItem('user');
        var login = sessionStorage.getItem('login');
if(login){
  window.location= "profile_"+user+".html";
}
else{
        alert ("Login First");
        window.location="../register.html";
}
};

function Logout(){
        sessionStorage.clear();
        window.location="../index.html";
        
}
function Logon(){
        var login = sessionStorage.getItem('login');
if(login){
}
else{
        alert ("Login First");
        window.location="../index.html";
}      
}
