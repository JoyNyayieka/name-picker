var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var dateComponents = []
var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function akanName() {
  event.preventDefault();
  var userBirthdate = document.getElementById("Date").value;
  console.log(userBirthdate);
  var gender = document.getElementById("userGender").value;
  console.log(gender);
  dateComponents = userBirthdate.split("-")
  console.log(dateComponents);
  var year = dateComponents[0];
  var month = dateComponents[1]-1;
  var date = dateComponents[2];
  console.log(year);
  console.log(month);
  console.log(date);
  var getDate = new Date(year, month, date);


  var dateIndex = getDate.getDay();
  console.log(getDate);
  console.log(dateIndex);
  console.log(maleNames[dateIndex]);
  console.log(femaleNames[dateIndex]);
  if (userGender = femaleNames) {

  } else {userGender = maleNames
  }
  console.log()
}
