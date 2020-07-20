import { of, interval, fromEvent } from 'rxjs';
import { mergeMap, take, takeUntil } from 'rxjs/operators';


const letter$ = of('a', 'b', 'c');
letter$
.pipe(
    mergeMap( letra => interval(1000).pipe( take( 3 ) ) )
)
// .subscribe( {
//     next: val => console.log('Next:', val),
//     complete: () => console.log('Complete')  
// });

const mousedown$ = fromEvent( document, 'mousedown' );
const mouseup$   = fromEvent( document, 'mouseup' );
const interval$  = interval();

mousedown$
.pipe(
    mergeMap( _ => interval$.pipe(
        takeUntil( mouseup$ )
    ))
)
.subscribe( console.log  )






