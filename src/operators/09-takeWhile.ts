
import { of, fromEvent } from 'rxjs';
import { takeWhile, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click' );

click$
.pipe(
    map( ({ x, y }) => ({ x, y }) ),
    takeWhile( ({ y }) => y <= 150, true )
)
.subscribe({
    next: valor => console.log('Next:', valor),
    complete: () => console.log('Complete')
})