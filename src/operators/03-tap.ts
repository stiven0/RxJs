import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';


const numeros$ = range(1,5);

numeros$
.pipe(
    tap( x => console.log('Antes', x) ),
    map( val => val * 10 ),
    tap({
        next: x => console.log('despues', x),
        complete: () => console.log('Complete')
    })
)
.subscribe( console.log )
