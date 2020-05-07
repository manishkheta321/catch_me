var a=["2.png","1.png","3.png","4.jpg"]
var x=4;
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

w=w-50;
var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
h=h-300;
function changelocation()
{
    document.getElementById("box").style.left=(Math.random()*w)+"px";
    document.getElementById("box").style.top=(Math.random()*h +100)+"px";
    document.getElementById("image").src=a[Math.floor(Math.random()*3)];
    document.getElementById("heading").innerHTML="Try again XD";

}

function win()
{
    document.write("You won :)");
}
