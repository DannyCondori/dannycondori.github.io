var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

const  jamón  =  documento . querySelector ( '.jamón' ) ;
const  enlaces  =  documento . querySelector ( '.enlaces-menu' ) ;
const  barras  =  documento . querySelectorAll ( '.ham span' ) ;



jamón _ addEventListener ( 'clic' ,  ( )  =>  {
    enlaces . listaclases . alternar ( 'activado' ) ;
    barras _ forEach ( child  =>  { child . classList . toggle ( 'animado' ) } ) ;
    jamón _ listaclases . alternar ( 'girar' ) ;
} ) ;
