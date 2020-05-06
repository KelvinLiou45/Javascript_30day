let spacing = document.getElementById("spacing");
let blur = document.getElementById("blur");
let baseColor = document.getElementById("baseColor");
let colorJs = document.getElementById("colorJs");

spacing.addEventListener("mousemove",function(){
    image.style.padding = `${this.value}px`;
})
blur.addEventListener("mousemove",function(){
    image.style.filter = `blur(${this.value}px)`;
})

spacing.addEventListener("change",function(){
    image.style.padding = `${this.value}px`;
})
blur.addEventListener("change",function(){
    image.style.filter = `blur(${this.value}px)`;
})

baseColor.addEventListener("change",function(){
    image.style.background = `${this.value}`;
    colorJs.style.color = `${this.value}`;
})