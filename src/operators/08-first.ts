import { fromEvent } from 'rxjs';
import { first, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click' );

click$
.pipe(
    tap<MouseEvent>( console.log ),
    map( ({ clientY }) => clientY  ),
    first( clientY => clientY >= 150 )
)
.subscribe({
    next: val => console.log('Next:', val),
    complete: () => console.log('Complete') 
})