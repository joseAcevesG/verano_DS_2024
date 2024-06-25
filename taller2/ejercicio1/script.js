const parrafo= document.getElementById("parrafo");

const boton= document.getElementById("boton");

function clickBoton(){
    if(parrafo.innerHTML=="test"){
        parrafo.innerHTML="Hola";
    }
    else if(boton.getAttribute("estado")=="noClick"){
        parrafo.innerHTML="Mundo";
        boton.setAttribute("estado", "click");
    }
    else if (boton.getAttribute("estado")=="click" && parrafo.innerHTML=="Mundo"){
        parrafo.innerHTML="Taller IDS";
    }
    else{
        parrafo.innerHTML="test"
        boton.setAttribute("estado", "noClick");
    }
}

function botenes(boton){
    const parrafo=document.getElementById("parrafo2");
    let numero=Number(boton.getAttribute("numero"));

    switch(numero){
        case 1:
            parrafo.innerHTML=1;
        break;
        case 2:
            parrafo.innerHTML=2;
        break;
        case 3:
            parrafo.innerHTML=3;
        break;
        case 4:
            parrafo.innerHTML=4;
        break;
        case 5:
            parrafo.innerHTML=5;
        break;
    }
}
