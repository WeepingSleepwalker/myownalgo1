function timeConversion(s) {
    // Write your code here
    s = s.split(":");
    var hours = Number(s[0]);
    var mins = Number(s[1]);
    var meridian = s[2].slice(-2);
    var secs = Number(s[2].slice(0,-2));
    
    var timey;
    if ((hours == 12) && (meridian == "AM") ){
        timey = "00";  
    }else if((hours == 12) && (meridian == "PM")){
        timey = "12";
    }else if ((meridian == "AM") && (hours < 10)) {
        timey = "0" + (hours);
    }else if  ((meridian == "AM") && (hours >=10)){
        timey = "" + hours;
    }else if (meridian == "PM"){
        timey = "" + (hours+12);
    }

timey += (mins < 10) ? ":0" + mins : ":" + mins;
timey += (secs < 10) ? ":0" + secs : ":" + secs;
// timey += (hours >= 12) ? "PM" : "AM";

return timey;
}