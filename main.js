
var palabras = ['TECNOLOGIA', 'INTERNET', 'COMPUTADORA', 'PROGRAMAR'];
var tablero = document.getElementById('horca').getContext('2d');
var letras = [];
var palabraCorrecta = ""; 
var palabraSecreta = "";
var errores = 8;
var botonNuevoJuego = document.getElementById('btn-nuevoJuego');
var botonDesistir = document.getElementById('btn-desistir');
var inicio = document.querySelector(".inicio");
var leyendaGanado = document.querySelector(".juegoGanado");
var leyendaPerdido = document.querySelector(".juegoPerdido");
var canvas2 = document.querySelector(".canvas2");
var aciertos = 0;

botonNuevoJuego.onclick = comenzarJuego;
botonDesistir.onclick = juegoPerdido;


function escogerPalabra(){
    palabraSecreta = palabras[Math.floor(Math.random()*palabras.length)]
    return palabraSecreta;  
}




function dibujarHorca(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()
    tablero.moveTo(250, 420)
    tablero.lineTo(550, 420)
    tablero.moveTo(320, 420)
    tablero.lineTo(320, 50)
    tablero.moveTo(320, 50)
    tablero.lineTo(480, 50)
    tablero.moveTo(480, 50)
    tablero.lineTo(480, 100)
    tablero.stroke()
    tablero.closePath()

}

function dibujarLineas(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()
    

    var ancho=600/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
            tablero.moveTo(100+(ancho*i), 490)
            tablero.lineTo(130+(ancho*i), 490)
    }
    tablero.stroke()
    tablero.closePath()

}



function escribirLetraCorrecta(index){
    tablero.font = 'bold 45px Arial'
    tablero.width = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#0A3871"

    var ancho=600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 100+(ancho*index), 480)
}

function escribirLetraIncorrecta(letra, errorsLeft){
    tablero.font = 'bold 30px Arial'
    tablero.width = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = "#0A3871"

    tablero.fillText(letra, 135+(40*(10-errorsLeft)), 540,40)
}

function verificarLetraClicada(key){
    if(letras.length<1 || letras.indexOf(key)<0){
        
        letras.push(key)
        return false
    }
    else{
        letras.push(key)
        return true
        }
    }


function adicionarLetraCorrecta(i) {
    palabraCorrecta += palabraSecreta[i].toUpperCase()

}   

function adicionarLetraIncorrecta(letter){
   if (palabraSecreta.indexOf(letter)<=0){
    errores-=1
   } 
}

document.onkeydown = (e) => {
    let letra=e.key.toUpperCase()
    if (letra.match(/[^A-ZÑ]$/i)){
        return
    }
    if ( !verificarLetraClicada(e.key)){
     if (palabraSecreta.includes(letra)){
        console.log(letra)
        adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
        for (let i=0; i<palabraSecreta.length; i++){
            if (palabraSecreta[i]===letra){
                escribirLetraCorrecta(i)
                aciertos+=1;
                if (aciertos == palabraSecreta.length){
                    canvas2.classList.add("ocultar")
                     leyendaGanado.classList.remove("ocultar")
                    
                }
            }
        }
    }
    else {
        if (!verificarLetraClicada(e.key)) return
        adicionarLetraIncorrecta(letra)
        escribirLetraIncorrecta(letra, errores)
        console.log(errores)
        switch (errores) {
            case 7:
                dibujarCabeza();
                break;
            case 6:
                dibujarCuerpo();
                break;
            case 5:
                dibujarPiernaIzq();
                break;
            case 4:
                dibujarPieIzq();
                break;
            case 3:
                dibujarPiernaDer();
                break;
            case 2:
                dibujarPieDer();
                break;
            case 1:
                dibujarBrazoIzq();
                break;
            case 0:
                dibujarBrazoDer();
                juegoPerdido();
                break;    
        } 
    }

  } 

}


function dibujarCabeza(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.fillStyle = '#0A3871'
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()
    tablero.arc(480, 130, 25, 0, 2 * Math.PI, false);
    tablero.fill();
    tablero.stroke()
    tablero.closePath()
}

function dibujarCuerpo(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()
    tablero.moveTo(480, 160)
    tablero.lineTo(480, 250)
    tablero.stroke()
    tablero.closePath()
}

function dibujarPiernaIzq(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()
    tablero.moveTo(480, 250)
    tablero.lineTo(450, 320)
    tablero.stroke()
    tablero.closePath()
}

function dibujarPieIzq(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()
    tablero.moveTo(450, 320)
    tablero.lineTo(440, 320)
    tablero.stroke()
    tablero.closePath()
}

function dibujarPiernaDer(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()
    tablero.moveTo(480, 250)
    tablero.lineTo(510, 320)
    tablero.stroke()
    tablero.closePath()
}

function dibujarPieDer(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()
    tablero.moveTo(510, 320)
    tablero.lineTo(520, 320)
    tablero.stroke()
    tablero.closePath()
}

function dibujarBrazoIzq(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()
    tablero.moveTo(480, 160)
    tablero.lineTo(450, 220)
    tablero.stroke()
    tablero.closePath()
}

function dibujarBrazoDer(){
    tablero.lineWidth = 6
    tablero.lineCap = "round"
    tablero.lineJoin = "round"
    tablero.strokeStyle = "#0A3871"
    tablero.beginPath()
    tablero.moveTo(480, 160)
    tablero.lineTo(510, 220)
    tablero.stroke()
    tablero.closePath()
}

function juegoPerdido(){
    canvas2.classList.add("ocultar")
    leyendaPerdido.classList.remove("ocultar")
    leyendaGanado.classList.add("ocultar")
}




function comenzarJuego(){
    inicio.classList.add("ocultar")
    canvas2.classList.remove("ocultar")
    leyendaPerdido.classList.add("ocultar")
    leyendaGanado.classList.add("ocultar")
    tablero.clearRect (0, 0, 1000, 860,)
    dibujarLineas(escogerPalabra())
    dibujarHorca()
    letras = [];
    errores=8;
    aciertos=0;
}

    


    
 









