

if (DD>31 || DD<=0 ){
alert("You entered an invalid date. Please try again.")
}
else if (MM>12 || MM<=0){
alert("You entered an invalid month. Please try again.")
}
else if (weekday===0 && gender==="male"){
alert("Your Akan Name is Kwasi!")
alert("Your Akan Name is Kwasi!");
}
else if (weekday===1 && gender==="male"){
alert("Your Akan Name is Kwadwo!")
alert("Your Akan Name is Kwadwo!");
}
else if (weekday===2 && gender==="male"){
alert("Your Akan Name is Kwabena!")
alert("Your Akan Name is Kwabena!");
}
else if (weekday===3 && gender==="male"){
alert("Your Akan Name is Kwaku!")
alert("Your Akan Name is Kwaku!");
}
else if (weekday===4 && gender==="male"){
alert("Your Akan Name is Yaw!")
alert("Your Akan Name is Yaw!");
}
else if (weekday===5 && gender==="male"){
alert("Your Akan Name is Kofi!")
alert("Your Akan Name is Kofi!");
}
else if (weekday===6 && gender==="male"){
alert("Your Akan Name is Kwame!")
alert("Your Akan Name is Kwame!");
}
else if (weekday===0 && gender==="female"){
alert("Your Akan Name is Akosua!")
alert("Your Akan Name is Akosua!");
}
else if (weekday===1 && gender==="female"){
alert("Your Akan Name is Adwoa!")
alert("Your Akan Name is Adwoa!");
}
else if (weekday===2 && gender==="female"){
alert("Your Akan Name is Abenaa!")
alert("Your Akan Name is Abenaa!");
}
else if (weekday===3 && gender==="female"){
alert("Your Akan Name is Akua!")
alert("Your Akan Name is Akua!");
}
else if (weekday===4 && gender==="female"){
alert("Your Akan Name is Yaa!")
alert("Your Akan Name is Yaa!");
}
else if (weekday===5 && gender==="female"){
alert("Your Akan Name is Afua!")
alert("Your Akan Name is Afua!");
}
else if (weekday===6 && gender==="female"){
alert("Your Akan Name is Ama!")
alert("Your Akan Name is Ama!");
}
var day = function(CC, YY, MM, DD)
{
return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7;
};
var CC = parseInt(prompt("Enter a number1:"));
var YY = parseInt(prompt("Enter a  number2:"));
var MM = parseInt(prompt("Enter a number3"));
var DD = parseInt(prompt("Enter a number4"));
alert(DD-MM-CCYY);
