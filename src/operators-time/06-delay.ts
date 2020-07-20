import { fromEvent } from 'rxjs';
import { map, delay } from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document, 'click');

click$
.pipe(
    delay( 2000 ),
    map( ({ x }) => x )
)
.subscribe( console.log  )