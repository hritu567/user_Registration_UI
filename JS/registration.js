function validation()
{
var fName = document.getElementById('firstName').value;
var lName = document.getElementById('lastName').value;
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
var cpassword = document.getElementById('cpassord').value;
var number = document.getElementById('number').value;
var firstCheck = /[A-Z]{1}[a-z]{2,}/;
var lastCheck = /[A-Z]{1}[a-z]{2,}/;
var emailCheck = /[a-zA-Z0-9]+([.+-_][a-zA-Z0-9]+)*@[a-zA-Z0-9]+.[a-z]{2,4}([.][a-z]{2})*/;
var passCheck = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$#%*+]).{8,}/;
var mnumber = /[6-9][0-9]{9}/;

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
if(passCheck.test(password))
{
    document.getElementById('perror').innerHTML = " ";
}else
{
    document.getElementById('perror').innerHTML = "**Invalid password ";
    return false;
}
if( cpassword.match(password))
{
    document.getElementById('cperror').innerHTML = " ";
}else
{
    document.getElementById('cperror').innerHTML = "**Password not matching ";
    return false;
}
if( mnumber.test(number))
{
    document.getElementById('merror').innerHTML = " ";
}else
{
    document.getElementById('merror').innerHTML = "**Invalid Number ";
    return false;
}
}
  