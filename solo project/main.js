
var hourEl = $("#hour");
var minuteEl = $("#minutes");
var secondEl = $("#seconds");
var ampmEl = $("#ampm");

function updateClock(){
    var h = new Date().getHours();
    var m = new Date().getMinutes();
    var s = new Date().getSeconds();
    var ampm ="AM";
    if (h > 12){
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    hourEl.text(h);
    minuteEl.text(m);
    secondEl.text(s);
    ampmEl.text(ampm);
    setTimeout(()=>{
        updateClock();
    },1000);
}
updateClock();

//your review 
const textareaEl=document.getElementById("textarea");

const totalCounterEl=document.getElementById("total-counter");

const  remainingCounterEl=document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup",()=>{
    updateCounter();
})


updateCounter()


function updateCounter(){
  totalCounterEl.innerText= textareaEl.value.length;
  remainingCounterEl.innerText= textareaEl.getAttribute("maxLength") - textareaEl.value.length ;
}
//button
var button = document.getElementById("btn");
button.addEventListener("click", function() {
  alert("your message has been sent...thank you");
  
});
var button = document.getElementById("btn");
document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("textarea").innerHTML = "";
});
// game
card1 = null;
card2 =null;
function clicked(card){
    if(card1===null){
    card.className = "show";
    card1=card;
    } else if (card2===null ){
        card.className = "show";
        card2=card;
        setTimeout("checkMatch();",1000);
    }
}
function checkMatch(){
    if(card1.src===card2.src){
        alert("Match!");
        card1 = null;
        card2 = null;
    } 
     else{
        card1.className = "hide";
        card2.className = "hide"; 
        card1 = null;
        card2 = null;
    }
}
