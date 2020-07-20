import { interval, fromEvent } from 'rxjs';
import { takeUntil, skip, tap } from 'rxjs/operators';

const btn = document.createElement('button');
btn.innerText = 'Detener Timer';

const body = document.querySelector('body').append( btn );

// const counter$ = interval(1000);
const clickBtn$ = fromEvent(btn, 'click').pipe(
    tap( _ => console.log('Tap')  ),
    skip( 2 )
)
.subscribe({
    next: x => console.log('Next:', x),
    complete: () => console.log('Complete')
});

// counter$
// .pipe(
//     takeUntil( clickBtn$ ) 
// )
// .subscribe( {
//     next: x => console.log('Next:', x),
//     complete: () => console.log('Complete')
// });



