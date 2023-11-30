

let games = ['BG3', 'PUBG', 'D2', 'BF'];
console.log('largo:', games.length );

let primero = games[0];
let ultimo = games[games.length - 1 ];

console.log ({ primero, ultimo });

games.forEach( (elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
});

let nuevalongitud = games.push( 'METRO');
console.log ({ nuevalongitud, games });

nuevalongitud = games.unshift('fallout');
console.log ({ nuevalongitud, games });

let gamesDelete = games.pop();
console.log({ gamesDelete, games});

let position = 1;

let Gdelete = games.splice( position, 2);
console.log({ Gdelete, games });

let D2position = games.indexOf('D2');
console.log({D2position});