

const character = {
    nombre: 'Luis Restrepo',
    codename: 'Late',
     vivo: true,
     edad: 24,
     coords:{
        lat: 34.034,
        long: -118.70
     },
     suits: [ 'shaggy', 'SDLG', 'prieto' ],
     address: {
        zip: '10880, 90265',
        location: 'Puebla, Puebla',

     },
     'ultimo video' : 'Poniendome mamado'
};
console.log( character );
console.log( 'nombre', character.nombre );
console.log( 'nombre', character ['nombre'] );
console.log( 'edad', character.edad );
console.log( 'coords', character.coords );
console.log( 'lat', character.coords.lat );

console.log( 'no. suits', character.suits.length );
console.log( 'last suits', character.suits [character.suits.length - 1]  );

const a = 'vivo';
console.log('vivo', character[a]);

console.log('ultimo video', character["ultimo video"]);

// más detalles

delete character.edad;
console.log( character );

character.casado = true;

const entriesPares = Object.entries( character );
console.log( entriesPares );

// character = true;
console.log ( character );

Object.freeze( character );
character.dinero = 1234567890;
character.dinero = false;
character.address.location = 'Nuevo Leon, Monterrey';
console.log ( character ); 


const propiedades = Object.getOwnPropertyNames( character );
const valores = Object.values( character );
console.log ( propiedades, valores );


 




