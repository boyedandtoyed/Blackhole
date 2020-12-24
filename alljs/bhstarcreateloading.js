var loader = document.querySelector('.loader');
var w = window.innerWidth;
var h = window.innerHeight;

function createstars(delay) {

    var span = document.createElement("span");
    let num1 = Math.round(Math.random() * 10); //color1
    let num2 = Math.round(Math.random() * 10); //color2
    let num3 = Math.round(Math.random() * 10); //color3
    let num4 = Math.round(Math.random() * 20); //height and width
    let num5 = Math.round(Math.random() * w); //left
    let num6 = Math.round(Math.random() * h); //top
    // let num7 = Math.random(); //opacity
    let num8 = (w / 2) - num5; //translateX
    let num9 = (h / 2) - num6; //translateY
    let colorVal = "#" + num1.toString() + num2.toString() + num3.toString();
    span.style.backgroundColor = colorVal;
    span.style.width = num4 + "px";
    span.style.height = num4 + "px";
    span.style.animationDuration = (Math.round(Math.random() * 5)).toString() + "s" ;    
    span.style.setProperty("--colornow", colorVal);
    span.style.setProperty("--left", num5.toString() + "px");
    span.style.setProperty("--top", num6.toString() + "px");
    // span.style.setProperty("--opac", num7.toString());
    span.style.setProperty("--transX", num8.toString() + "px");
    span.style.setProperty("--transY", num9.toString() + "px");
    span.style.setProperty("--delay",(delay*5).toString() + "ms");
    loader.append(span);
}
