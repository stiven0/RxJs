import { interval, of, merge, timer, fromEvent } from 'rxjs';
import { take, tap, pluck } from 'rxjs/operators';

const keyup$ = fromEvent( document, 'keyup' );
const click$ = fromEvent( document, 'click' );

merge( 
    keyup$.pipe( pluck( 'type' ) ), 
    click$.pipe( pluck( 'type' ) )
    )
.subscribe( console.log );