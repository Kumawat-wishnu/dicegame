
var r1=Math.floor(Math.random()*6)+1;
var randomdiceImage="images/dice"+r1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomdiceImage);
var r2=Math.floor(Math.random()*6)+1;
var randomdiceImage2="images/dice"+r2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomdiceImage2);
if(r1>r2)
{
    document.querySelector("h1").innerHTML="player 1 won";
}
else if(r2>r1){
    document.querySelector("h1").innerHTML="player 2 won";
}
else{
    document.querySelector("h1").innerHTML="both won";
}
