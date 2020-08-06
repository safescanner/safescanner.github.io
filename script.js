document.addEventListener("input", () => {
    setBubble();
});

function initialize(){
    var d = new Date();
    var time = d.getHours() * 60 + d.getMinutes();
    document.getElementById("time").value = time;
    setBubble();
}

function setBubble(){
    var input = document.getElementById("time").value;
    var suffix = input < 720? "am" : "pm";
    var hour = Math.floor((input % 720) /60);
    if(hour == ("0")){
        hour = "12";
    }
    var minute = input%60;
    if(parseInt(minute, 10) < 10){
        minute = "0" + minute;
    }
    document.getElementById("bubble").innerHTML = hour + ":" + minute + " " + suffix;
    
    var dragPercent = input/1439;
    var room = (window.innerWidth * 0.6) - (1 * 120); //make space on both sides of track for the bubble
    document.getElementById("bubble").style.left = dragPercent*room + "px";
}