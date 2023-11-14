var canvas = document.getElementById("gameCanvas")
var ctx = canvas.getContext("2d")
window.addEventListener('resize',()=>{
    canvas.heigh=window.innerHeight
    canvas.width=window.innerWidth

})

const mouse ={
    x:null,
    y:null
}
canvas.addEventListener("click",(event)=>{
    mouse.x=event.x;
    mouse.y=event.y;
    drawTheImage();
});
function drawTheImage(){
ctx.fillStyle ="green";

ctx.beginPath();
ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI*2)

ctx.fill();
}
drawTheImage();