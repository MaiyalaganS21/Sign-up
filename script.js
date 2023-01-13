function validate(){
    var email=document.getElementById("hell").value;
    var password=document.getElementById("bell").value;
    var z = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;


if(email == ""){
    alert("Please enter your email");
    return false;

}
if(email.match(z)){
   
}
else{
    alert("invalid email address")
return false;
}
if(password == ""){
    alert("your password field is empty");
    return false;
}

if(password.length<8){
    alert("Password should have atleast 8 characters ");
    return false;
}
else{
    return true;
}
}