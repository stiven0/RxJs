import { interval, concat, range, of } from 'rxjs';
import { take, tap } from 'rxjs/operators';

const interval$ = interval(1000).pipe( take(3) );
const range$ = range(1,5);

concat( interval$, range$ )
.subscribe( console.log  );
