
var h = document.querySelector("h1");
var mdate = document.querySelector(".date");
var Day = document.querySelector(".day");

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

function getMonthName(mon){
    switch(mon){
    case 0 :  
    return "JANUARY" ;
    break;
    case 1 : 
    return "FEBRUARY" ;
    break;
    case 2 : 
    return "MARCH";
    break;
     case 3 : 
    return "APRIL";
    break;
     case 4 : 
   return "MAY";
    break;
     case 5 : 
   return "JUNE";
    break;
     case 6 : 
   return "JULY";
    break;
     case 7 : 
    return "AUGUST";
   break;
    case 8 : 
    return "SEPTEMBER";
    break;
     case 9 : 
    return "OCTOBER";
    break;
     case 10 : 
    return "NOVEMBER";
    break;
     case 11 : 
    return "DECEMBER";
    break;
}
}

var month = getMonthName(mon);

var year = time.getFullYear();
var dd = time.getDay();

function getdayName(dd){
switch(dd){
   case 0 : return "SUNDAY";
  break;
  case 1 : return "MONDAY";
  break;
   case 2 : return "TUESDAY";
  break;
   case 3 : return "WEDNESDAY";
  break;
   case 4 : return "THURSDAY";
  break;
   case 5 : return "FRIDAY";
  break;
   case 6 : return "SATURDAY";
  break;
}
}

var Days = getdayName(dd);

h.innerHTML =   hh + ":" + mm + ":" + ss + " " + ampm;

mdate.innerHTML =  date + ":"  + " " + month + " " + ":" + year ; 

Day.innerHTML =  Days;

console.log(ampm);

},1000)
