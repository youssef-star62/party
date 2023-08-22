$(".openIcon").click(function(){
    $(".open").css("left" , "0")
})

$(".close").click(function(){
    $(".open").css("left" , "-270px")
})

$(".acc h3").click(function(){
    $(this).next().slideToggle();
    $(".acc div").not($(this).next()).slideUp();
})

let countDownDate = new Date("Oct 25 , 2023 23:59:59").getTime();
let counter = setInterval( () => {

let dateNow = new Date().getTime();
let dateDiff = countDownDate - dateNow;


let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60));
let seconds = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 ));


document.querySelector(".days").innerHTML = days;
document.querySelector(".hours").innerHTML = hours;
document.querySelector(".minutes").innerHTML = minutes;
document.querySelector(".seconds").innerHTML = seconds;
}, 1000);

$("textarea").keyup(function(){

   let myLength = $(this).val().length;
   
    $("#chars").text(
        100 - myLength
    )
})