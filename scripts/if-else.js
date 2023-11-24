

let a = 11;

if ( a >= 10 ) { // undefined, null, una asignación
    console.log( 'a es mayor o igual a 10' );
} else { 
    console.log('es menor a 10');
}

//console.log( 'fin de programa');

const hoy = new Date(); // {}
let dia = hoy.getDay();  // 0: domingo 1:lunes, 2:martes...

console.log({ dia });

if( dia === 0 ) {
    console.log( 'domingo' );

} else if ( dia === 1) {
    console.log( 'lunes' ); 

    // if (dia ===) {
    //     console.log('lunes');
    //} else{
    //      console.log('no es lunes ni domingo'); 
    //}
} else if (dia === 2) {
    console.log('martes');

} else {
    console.log('no es lunes, martes o domingo...');
}