import { interval, from, fromEvent } from 'rxjs';
import { take, concatMap, exhaustMap } from 'rxjs/operators';


const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$
.pipe(
    exhaustMap( _ => interval$ )
)
.subscribe( console.log );
