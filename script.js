var dest = new Date("17 NOV 2023 9:00:00 am").getTime();
var x= setInterval( function() {
    var now = new Date().getTime();
var diff = dest - now;
var days = Math.floor(diff / (1000*60*60*24));
console.log(days);

var hours = Math.floor(diff % (1000 * 60* 60*24) / (1000*60*60));
console.log(hours);

var minute = Math.floor(diff % (1000*60*60)/ (1000*60));
console.log(minute);

var second = Math.floor(diff % (1000*60)/(1000));
console.log(second);
document.getElementById("end-date").innerHTML = days +"d: " + hours + "hrs: " +minute +"m: "+ second+"s"
},1000);
