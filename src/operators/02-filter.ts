import { range, from, fromEvent } from 'rxjs';
import { filter, map, mapTo } from 'rxjs/operators';

// range(1,10)
// .pipe(
//     filter( val => val % 2 === 0 )
// )
// .subscribe( console.log );

range(1,10)
.pipe(
    filter( (val, i) =>  {
        console.log('Index:', i);
        return val % 2 === 1;
    })
)
// .subscribe( console.log );

const personajes = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'Joker'
    }
];

interface Personaje {
    tipo: string;
    nombre: string;
}

// from<Personaje[]>( personajes )
// .pipe( 
//     filter( personaje => personaje.tipo === 'heroe' ) 
//     )
// .subscribe( console.log );


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup')
.pipe(
    map( event => event.key ),
    filter( key => key === 'Enter' )
)

keyup$
.subscribe( console.log );




