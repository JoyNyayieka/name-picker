var day = function(CC, YY, MM, DD)
{
return ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7;
};
var CC = parseInt(prompt("Enter a number1:"));
var YY = parseInt(prompt("Enter a  number2:"));
var MM = parseInt(prompt("Enter a number3"));
var DD = parseInt(prompt("Enter a number4"));
alert(DD-MM-CCYY);
