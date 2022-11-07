var muestraFoto = document.getElementById("visor");

document.getElementById("boton-edgar").addEventListener("click", function(){
    muestraFoto.src = "images/edgar.jpg";
});

document.getElementById("boton-lady").addEventListener("click",function(){
    muestraFoto.src = "images/lady.jpg";
});

document.getElementById("boton-debora").addEventListener("click", function(){
    muestraFoto.src = "images/debora.jpg";
});

document.getElementById("boton-ivan").addEventListener("click", function(){
    muestraFoto.src = "images/ivan-montes.jpg";
});

document.getElementById("boton-juan").addEventListener("click", function(){
    muestraFoto.src = "images/juan-correa.jpg";
});

/***********************************/

let bOscuro = document.getElementById("boton-oscuro");
let bClaro = document.getElementById("boton-claro");
let nosotros = document.getElementById("nosotros");

bOscuro.addEventListener("click", function(){
    nosotros.style.backgroundColor = "#000000";
    nosotros.style.color = "#FFFFFF";
});

bClaro.addEventListener("click", function(){
    nosotros.style.backgroundColor = "#F78B6D";
    nosotros.style.color = "#333333";
});

let frases = [];
frases[0] = " 20 de marzo";
frases[1] = " 20 de mayo";
frases[2] = " 11 de agosto";
frases[3] = " 10 de octubre";

let botonFrase1 = document.getElementById("frase1");
let botonFrase2 = document.getElementById("frase2");
let botonFrase3 = document.getElementById("frase3");
let botonFrase4 = document.getElementById("frase4");
let fraseDia = document.getElementById("frase-dia");

botonFrase1.addEventListener("click", function(){
    fraseDia.innerHTML = frases[0];
})
botonFrase2.addEventListener("click", function(){
    fraseDia.innerHTML = frases[1];
})
botonFrase3.addEventListener("click", function(){
    fraseDia.innerHTML = frases[2];
})
botonFrase4.addEventListener("click", function(){
    fraseDia.innerHTML = frases[3];
})

//NUMEROS ALEATORIOS
//console.log(Math.floor(Math.random() * 20 ));
let nombrePersonaje = document.getElementById("nombre-personaje");
let personajes = [];
personajes[0] = "Chicas TEC - Reduciendo brechas tecnológicas";
personajes[1] = "UNICEF - Apoyo en la Programación Web para chicas";
personajes[2] = "CETPROS - Trabajando para reducir brechas tecnológicas";
personajes[3] = "Programación Web - una oportunidad para desarrollo tecnológico";
personajes[4] = "HTML-JavaScrip - Diseño de una One Page "; 

let aleatorio = Math.floor(Math.random() * 5 )
nombrePersonaje.innerHTML = personajes[aleatorio];

//INTERVALOS DE TIEMPO - setTimeout
let personajedia = document.getElementById("personajedia");
function cambiarColorPersonaje(){
    personajedia.style.backgroundColor = "#000000";
    personajedia.style.color = "#FFFFFF";
}
setTimeout(cambiarColorPersonaje, 3000);

//INTERVALOS DE TIEMPO - setInterval
function cambiarPersonaje(){
    let aleatorio = Math.floor(Math.random() * 5 )
    nombrePersonaje.innerHTML = personajes[aleatorio];
}
setInterval(cambiarPersonaje, 1000);


//GALERIA con botones
let paisajes = [];
paisajes[0] = "images/est-per.jpg";
paisajes[1] = "images/com-put.jpg";
paisajes[2] = "images/cue-cal.jpg";
paisajes[3] = "images/con-tex.jpg";
paisajes[4] = "images/adm-com.jpg";
paisajes[5] = "images/pan-pas.jpg";

let bRetroceder = document.getElementById("boton-retroceder");
let bAvanzar = document.getElementById("boton-avanzar");
let muestra = document.getElementById("muestra");
let cajaP = document.getElementById("caja-posicion");
let posicion = 0;

actualizarImagen();

function actualizarImagen(){
    cajaP.innerHTML = posicion + 1;
    muestra.src = paisajes[posicion];
}

bAvanzar.addEventListener("click", function(){
        posicion++;
        if(posicion == 5){
            posicion = 0;
        }
        actualizarImagen();
}); 

bRetroceder.addEventListener("click", function(){
        posicion--;
        if(posicion == -1){
            posicion = 5;
        }
        actualizarImagen();
}); 


