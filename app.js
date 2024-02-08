let textoNuevo;
let textoDesencriptado;
let munieco= document.querySelector(".imagen-output");
let contenedor=document.querySelector(".contendor-texto-output");
let textoResultado=document.querySelector(".resultado");
let botonCopiar=document.querySelector(".botonCopiar");
let seccion = document.querySelector(".output");
let seccionResultado=document.querySelector(".contenedor-resultado");
let vecesInteraccion=1;

function encriptar(){
    let textoUsuario= document.getElementById("texto-area").value;
    let textoNuevo="";
    if(textoUsuario==""){ //vefica si hay un texto para encriptar
        alert("Ingrese un texto para encriptar!");
    }
    else{ //si lo hay lo encripta
        ocultarOutput();
        botonCopiar.style.display = "block";
        for(let i=0;i<textoUsuario.length;i++){
            
            if(textoUsuario[i]=="a"){
                textoNuevo+="ai";
            }
            else if(textoUsuario[i]=="e"){
                textoNuevo+="enter";
            }
            else if(textoUsuario[i]=="i"){
                textoNuevo+="imes";
            }
            else if(textoUsuario[i]=="o"){
                textoNuevo+="ober";
            }
            else if(textoUsuario[i]=="u"){
                textoNuevo+="ufat";
            }
            else{
                textoNuevo+=textoUsuario[i];
            }
            
        }
        textoResultado.textContent= textoNuevo;//guarda el texto encriptado
        if (window.matchMedia("(max-width: 768px)").matches && vecesInteraccion==1) { //Si la pantalla es de una tablet o smartfone el espacio aumenta
            let heightActual = seccion.offsetHeight;
            let nuevoHeight = heightActual + 240;
            seccion.style.height = nuevoHeight + 'px';

            let heightActualResultado= seccionResultado.offsetHeight;
            let nuevoHeightResultado= heightActualResultado + 175;
            seccionResultado.style.height= nuevoHeightResultado + 'px';

            vecesInteraccion++;
        }
    }  

    
}

function desencriptar(){
    let textoUsuario=document.getElementById("texto-area").value;
    let textoDesencriptado="";
    if(textoUsuario==""){  //vefica si hay un texto para desencripar
        alert("Ingrese un texto para desencriptar!")
    }
    else{ //si hay un texto lo desencripta
        ocultarOutput();
        botonCopiar.style.display= "block";
        for(let i=0;i<textoUsuario.length;i++){
            if(textoUsuario[i]=="a"){
                textoDesencriptado+="a";
                i+=1;
            }
            else if(textoUsuario[i]=="e"){
                textoDesencriptado+="e";
                i+=4;
            }
            else if(textoUsuario[i]=="i"){
                textoDesencriptado+="i";
                i+=3;
            }
            else if(textoUsuario[i]=="o"){
                textoDesencriptado+="o";
                i+=3;
            }
            else if(textoUsuario[i]=="u"){
                textoDesencriptado+="u";
                i+=3;
            }
            else{
                textoDesencriptado+=textoUsuario[i];
            }
        }
        textoResultado.textContent= textoDesencriptado; //guarda el texto desencriptado
        if (window.matchMedia("(max-width: 768px)").matches && vecesInteraccion==1) {//Si la pantalla es de una tablet o smartfone el espacio aumenta
            let heightActual = seccion.offsetHeight;
            let nuevoHeight = heightActual + 240;
            seccion.style.height = nuevoHeight + 'px';

            let heightActualResultado= seccionResultado.offsetHeight;
            let nuevoHeightResultado= heightActualResultado + 175;
            seccionResultado.style.height= nuevoHeightResultado + 'px';

            vecesInteraccion++;
        }

    }


}
function ocultarOutput(){
    munieco.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}


botonCopiar.addEventListener("click", copiar = ()=>{
    var contenido=document.querySelector(".resultado").textContent;
    navigator.clipboard.writeText(contenido);
    document.getElementById('mensaje-copiado').style.display = 'block';
    setTimeout(() => {
        document.getElementById('mensaje-copiado').style.display = 'none';
      }, 3000);
    
})

