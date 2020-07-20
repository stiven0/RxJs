import { fromEvent } from 'rxjs';
import { auditTime, tap, map } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>(document, 'click');

click$
.pipe(
    map( ({ x }) => x  ),
    tap( x => console.log('Tap:', x) ),
    auditTime( 2000 )
)
.subscribe( console.log  );