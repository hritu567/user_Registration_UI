
function validation()
{
var fName = document.getElementById('firstName').value;
var lName = document.getElementById('lastName').value;
var email = document.getElementById('email').value;
var firstCheck = /[A-Z]{1}[a-z]{2,}/;
var lastCheck = /[A-Z]{1}[a-z]{2,}/;

if(firstCheck.test(fName))
{
    document.getElementById('ferror').innerHTML = " ";
    
}else
{
   document.getElementById('ferror').innerHTML = "**Invalid first Name ";
    return false;
}


if(lastCheck.test(lName))
{
   document.getElementById('lerror').innerHTML = " ";
}else
{
   document.getElementById('lerror').innerHTML = "**Invalid last Name ";
    return false;
}


if(emailCheck.test(email))
{
    document.getElementById('eerror').innerHTML = " ";
}else
{
    document.getElementById('eerror').innerHTML = "**Invalid email ";
    return false;
}

}