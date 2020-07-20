

import { asyncScheduler } from 'rxjs';

const saludar = () => { console.log('hola') }
const saludar2 = nombre => { console.log('hola', nombre) }


// asyncScheduler.schedule( saludar, 2000 );
// asyncScheduler.schedule( saludar2, 2000, 'Robert' );


const subs = asyncScheduler.schedule( function(state) {

    console.log('State', state);
    
    this.schedule( state + 1, 1000 );
    
}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe();
// }, 6000);

asyncScheduler.schedule( () => subs.unsubscribe(), 6000 );




