var sunday=0
var monday=1
var tuesday=2
var wednesday=3
var thursday=4
var friday=5
var saturday=6
 if (weekday===0 && gender==="male"){
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

}

var DD= document.getElementById("DD").value;
var MM= document.getElementById("MM").value;
var YYYY= document.getElementById("YYYY").value;
var dd=parseInt(DD)
var mm=parseInt(MM)
var cc=parseInt((YYYY/100))
var yy=parseInt(YYYY-cc*100)
var weekday=parseInt(  ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7

var YYYY= document.getElementById("YYYY");
var gender=document.getElementById("gender")
var dd=parseInt(DD);
var mm=parseInt(MM);
var cc=parseInt((YYYY/100));
var yy=parseInt(YYYY-cc*100);
var weekday=parseInt(  ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd ) % 7;
var result=akanName(DD,MM,dd,mm,cc,yy,gender);
alert(result);
