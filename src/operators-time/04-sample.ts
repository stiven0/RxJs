import { interval, fromEvent } from 'rxjs';
import { sample, tap } from 'rxjs/operators';


const interval$ = interval(500);
const click$ = fromEvent(document, 'click');

interval$
.pipe( 
    sample( click$ )
)
.subscribe( console.log  );