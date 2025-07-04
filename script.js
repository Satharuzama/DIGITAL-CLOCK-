var h = document.querySelector("h1");
var mdate = document.querySelector(".date");
var Day = document.querySelector(".day");
var moon = document.querySelector("#moon");
var sun = document.querySelector("#sun");

setInterval(function(time){
 var time = new Date();
var hh = time.getHours();

var ampm = hh >= 12 ? "PM" : "AM"  // 11/12
hh = hh % 12;

if (hh == 0){
 hh = 12; 
}

mm = mm < 10 ? "0" + mm : mm ; 

var mm = time.getMinutes(); 
var ss = time.getSeconds();
var date = time.getDate();

hh = hh < 10 ? "0" + hh : hh ;
mm = mm < 10 ? "0" + mm : mm ; 
date = date < 10 ? "0" + date : date ;

var mon = time.getMonth();
const months = [ "JANUARY" , "FEBRUARY"  , "MARCH", "APRIL" ,"MAY", "JULY", "AUGUST" , "SEPTEMBER" ,"OCTOBER", "NOVEMBER"
,"DECEMBER"]

// function getMonthName(mon){
//     switch(mon){
//     case 0 :  
//     return "JANUARY" ;
//     break;
//     case 1 : 
//     return "FEBRUARY" ;
//     break;
//     case 2 : 
//     return "MARCH";
//     break;
//      case 3 : 
//     return "APRIL";
//     break;
//      case 4 : 
//    return "MAY";
//     break;
//      case 5 : 
//    return "JUNE";
//     break;
//      case 6 : 
//    return "JULY";
//     break;
//      case 7 : 
//     return "AUGUST";
//    break;
//     case 8 : 
//     return "SEPTEMBER";
//     break;
//      case 9 : 
//     return "OCTOBER";
//     break;
//      case 10 : 
//     return "NOVEMBER";
//     break;
//      case 11 : 
//     return "DECEMBER";
//     break;
// }
// }


var year = time.getFullYear();
var dd = time.getDay();

const dayName = [ "SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY"
,"SATURDAY"]

// function getdayName(dd){
// switch(dd){
//    case 0 : return "SUNDAY";
//   break;
//   case 1 : return "MONDAY";
//   break;
//    case 2 : return "TUESDAY";
//   break;
//    case 3 : return "WEDNESDAY";
//   break;
//    case 4 : return "THURSDAY";
//   break;
//    case 5 : return "FRIDAY";
//   break;
//    case 6 : return "SATURDAY";
//   break;
// }
// }

// var Days = getdayName(dd);

h.innerHTML =   hh + ":" + mm + ":" + ss + " " + ampm;

mdate.innerHTML =  date + ":"  + " " + months[mon] + " " + ":" + year ; 

Day.innerHTML =  dayName[dd];


},1000)


var flag = 0 ;

var dm = document.querySelector(".time");
var dm1 = document.querySelector("html,body");
var dm2 = document.querySelector(".clock");
var dm4 = document.querySelector("#dm")
var dm5 = document.querySelector(".cen");

var btn1 = document.querySelector("#dm");


btn1.addEventListener("click",function(){
if (flag == 0){
 dm.style.backgroundColor = "white";
  dm.style.color = "black";
   dm1.style.backgroundColor = "white";
  dm1.style.color = "black";
     dm2.style.backgroundColor = "white";
  dm2.style.color = "black";
     dm4.style.backgroundColor = "white";
  dm4.style.color = "black";
     dm5.style.backgroundColor = "white";
  dm5.style.color = "black";
     moon.style.opacity = 1;
        sun.style.opacity = 0; 
  flag = 1; 
}  else {
   dm.style.backgroundColor = "black";
   dm.style.color = "white";
   dm1.style.backgroundColor = "black";
   dm1.style.color = "white";
   dm2.style.backgroundColor = "black";
   dm2.style.color = "white";
   dm4.style.backgroundColor = "black";
   dm4.style.color = "white";
   dm5.style.backgroundColor = "black";
   dm5.style.color = "white";
    moon.style.opacity = 0;
        sun.style.opacity = 1; 
 
      flag = 0;
}


})




