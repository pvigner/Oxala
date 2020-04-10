function mudaFoto (foto) {
    document.getElementById("icone").src = foto;
}




/* Função de slideshow desativada por conflito com onmousemove da ul.



var intervalo = 4000;

function slide1 () {
    document.getElementById("icone").src = "imagens/ed_culto.jpg"; 
    setTimeout("slide2()",intervalo);
}

function slide2 () {
    document.getElementById("icone").src = "imagens/slider/ed_oxala1.jpg";
    setTimeout("slide3()",intervalo); 
}

function slide3 () {
    document.getElementById("icone").src = "imagens/slider/ed_oxala2.jpg"; 
    setTimeout("slide1()",intervalo);
}
*/