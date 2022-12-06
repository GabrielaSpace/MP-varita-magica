

let imagenes2 = document.querySelectorAll("img");
imagenes2.addEventListener("mouseover", mouseOver);


function mouseOver(){
  if("mouseover")
 {imagenes2.setAttribute('src','assets/abracadabra.gif')}
 else {imagenes2.setAttribute('src','.reset()') /*Si no funciona probar: imagenes2.src.reset() */}   
}
