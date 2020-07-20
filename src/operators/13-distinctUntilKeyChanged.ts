import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {nombre: 'batman'},
    {nombre: 'robin'},
    {nombre: 'joker'},
    {nombre: 'joker'},
];

from( personajes )
.pipe( 
    distinctUntilKeyChanged( 'nombre' ) 
)
.subscribe( console.log  )