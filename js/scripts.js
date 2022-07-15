$(document).ready(function() {
$("#menu-icon").click(function(){

    $("#menu").stop().slideToggle();

})
$(window).resize(function(){
    if($(window).width() > 830){
        $("#menu").css('display', 'flex');
        $("#inst2").css('flex-direction', 'column');
        $("#depart2").css('flex-direction', 'column');
        $("#accou2").css('flex-direction', 'column');
        $("#atend2").css('flex-direction', 'column');
    }
})
})


function mostrarPesquisa(){ //Este código é utilizado para apresentar a barra de pesquisa em displays menores que 1024px
    let pesquisa = document.getElementById("search-box")

    if(getComputedStyle(pesquisa).display == "none"){
        pesquisa.style.display = "flex"
    } else{
        pesquisa.style.display = "none"
    }
}

function mostrarFooter(){ //Este código é utilizado para apresentar os itens do menu em displays menores que 1024px
    let footerItems = document.getElementById("inst2")
    let tamanhoTela = window.innerWidth;
    if(tamanhoTela <= 830){
        if (getComputedStyle(footerItems).display == "none"){
            footerItems.style.display = "flex"
        } else{
            footerItems.style.display = "none"
        }
    }
}

function mostrarFooter1(){ //Este código é utilizado para apresentar os itens do menu em displays menores que 1024px
    let footerItems = document.getElementById("depart2")
    let tamanhoTela = window.innerWidth;
    if(tamanhoTela <= 830){
        if (getComputedStyle(footerItems).display == "none"){
            footerItems.style.display = "flex"
        } else{
            footerItems.style.display = "none"
        }
    }
}
function mostrarFooter2(){ //Este código é utilizado para apresentar os itens do menu em displays menores que 1024px
    let footerItems = document.getElementById("accou2")
    let tamanhoTela = window.innerWidth;
    if(tamanhoTela <= 830){
        if (getComputedStyle(footerItems).display == "none"){
            footerItems.style.display = "flex"
        } else{
            footerItems.style.display = "none"
        }
    }
}
function mostrarFooter3(){ //Este código é utilizado para apresentar os itens do menu em displays menores que 1024px
    let footerItems = document.getElementById("atend2")
    let tamanhoTela = window.innerWidth;
    if(tamanhoTela <= 830){
        if (getComputedStyle(footerItems).display == "none"){
            footerItems.style.display = "flex"
        } else{
            footerItems.style.display = "none"
        }
    }
}



