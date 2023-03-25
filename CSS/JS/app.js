

const  jamón  =  documento . querySelector ( '.jamón' ) ;
const  enlaces  =  documento . querySelector ( '.enlaces-menu' ) ;
const  barras  =  documento . querySelectorAll ( '.ham span' ) ;



jamón _ addEventListener ( 'clic' ,  ( )  =>  {
    enlaces . listaclases . alternar ( 'activado' ) ;
    barras _ forEach ( child  =>  { child . classList . toggle ( 'animado' ) } ) ;
    jamón _ listaclases . alternar ( 'girar' ) ;
} ) ;