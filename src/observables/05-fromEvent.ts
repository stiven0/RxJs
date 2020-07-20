
import { fromEvent, Observer } from 'rxjs';

// eventos del DOM
const src1$ = fromEvent<MouseEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer: Observer<any> = {
   next: val => console.log('Next:', val),
   error: err => console.log(err),
   complete: () => console.log('Completado')
};

src1$.subscribe( ({ x, y }) => {
    console.log(x, y);
});

src2$.subscribe( ({ key }) => {
    console.log(key);
});
