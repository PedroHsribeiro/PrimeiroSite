function mostrarMenu(){ //Este código é utilizado para apresentar os itens do menu em displays menores que 1024px
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == "none"){
        menu.style.display = "flex"
    } else{
        menu.style.display = "none"
    }
}
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

    if (getComputedStyle(footerItems).display == "none"){
        footerItems.style.display = "flex"
    } else{
        footerItems.style.display = "none"
    }
}
function mostrarFooter1(){ //Este código é utilizado para apresentar os itens do menu em displays menores que 1024px
    let footerItems = document.getElementById("depart2")

    if (getComputedStyle(footerItems).display == "none"){
        footerItems.style.display = "flex"
    } else{
        footerItems.style.display = "none"
    }
}
function mostrarFooter2(){ //Este código é utilizado para apresentar os itens do menu em displays menores que 1024px
    let footerItems = document.getElementById("accou2")

    if (getComputedStyle(footerItems).display == "none"){
        footerItems.style.display = "flex"
    } else{
        footerItems.style.display = "none"
    }
}
function mostrarFooter3(){ //Este código é utilizado para apresentar os itens do menu em displays menores que 1024px
    let footerItems = document.getElementById("atend2")

    if (getComputedStyle(footerItems).display == "none"){
        footerItems.style.display = "flex"
    } else{
        footerItems.style.display = "none"
    }
}



