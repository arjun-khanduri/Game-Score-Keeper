var p1score=0;
var p2score=0;
var gameover=false;
var winningscore=5;
var input=document.querySelector("input");
var p1Display=document.getElementById("p1Display");
var p2Display=document.getElementById("p2Display");
var b1=document.getElementById("b1");
var scoreLimit=document.getElementById("scoreLimit");
var res=document.getElementById("result");
// var popup=document.getElementById("exampleModalCenter");
input.addEventListener("change",function(){
    winningscore=parseInt(input.value);
    scoreLimit.textContent=winningscore;
    scoreLimit.style.fontWeight="bold";
});

b1.addEventListener("click",function(){
    if(!gameover)
         p1score++;
    if(p1score===winningscore){
        gameover=true;
        p1Display.style.color="green";
        res.textContent="Congratulations Player One!";
        $("#exampleModalCenter").modal();
    }
    p1Display.textContent=p1score;
});

var b2=document.getElementById("b2");
b2.addEventListener("click",function(){
    if(!gameover)
         p2score++;
    if(p2score===winningscore){ 
        gameover=true;
        p2Display.style.color="green";
        res.textContent="Congratulations Player Two!";
        $("#exampleModalCenter").modal();
    }
    p2Display.textContent=p2score;
});
var reset=document.getElementById("b3");
b3.addEventListener("click",function(){
    p1score=0;
    p2score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    gameover=false;
    p1Display.style.color="black";
    p2Display.style.color="black";
    scoreLimit.textContent="5";
    input.value="";
    winningscore=5;
})