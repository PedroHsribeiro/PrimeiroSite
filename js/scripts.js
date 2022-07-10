function mostrarMenu(){
    let menu = document.getElementById("menu")

    if (getComputedStyle(menu).display == "none"){
        menu.style.display = "flex"
    } else{
        menu.style.display = "none"
    }
}
function mostrarPesquisa(){
    let pesquisa = document.getElementById("search-box")

    if(getComputedStyle(pesquisa).display == "none"){
        pesquisa.style.display = "flex"
    } else{
        pesquisa.style.display = "none"
    }
}