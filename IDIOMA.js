document.getElementById('boton').onclick=function(){
    console.log("Capturamos el evento click");
    document.getElementById("demo").innerHTML="Español, Inglés, Francés y Alemán";
}
/**Con 2 click segidos, muestra el contenido de innerHTML */
document.getElementById('boton').ondblclick=function(){
    console.log("Capturamos el evento ondblclick");
    document.getElementById("demo").innerHTML="";
}
/**Con 1 click, oculta el contenido de innerHTML */