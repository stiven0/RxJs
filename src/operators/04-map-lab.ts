import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';


const texto = document.createElement('div');
texto.innerHTML = `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <br/><br/> 
    Repellendus qui ab consequatur labore iste ex ratione eligendi voluptates maxime. 
    <br/><br/>
    Voluptatem numquam nobis voluptatum, autem veniam quam! Corporis sunt in ipsam?
    <br/><br/> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <br/><br/>
    Repellendus qui ab consequatur labore iste ex ratione eligendi voluptates maxime. 
    <br/><br/>
    Voluptatem numquam nobis voluptatum, autem veniam quam! Corporis sunt in ipsam?
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <br/><br/> 
    Repellendus qui ab consequatur labore iste ex ratione eligendi voluptates maxime. 
    <br/><br/>
    Voluptatem numquam nobis voluptatum, autem veniam quam! Corporis sunt in ipsam?
    <br/><br/> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <br/><br/>
    Repellendus qui ab consequatur labore iste ex ratione eligendi voluptates maxime. 
    <br/><br/>
    Voluptatem numquam nobis voluptatum, autem veniam quam! Corporis sunt in ipsam?   
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <br/><br/> 
    Repellendus qui ab consequatur labore iste ex ratione eligendi voluptates maxime. 
    <br/><br/>
    Voluptatem numquam nobis voluptatum, autem veniam quam! Corporis sunt in ipsam?
    <br/><br/> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <br/><br/>
    Repellendus qui ab consequatur labore iste ex ratione eligendi voluptates maxime. 
    <br/><br/>
    Voluptatem numquam nobis voluptatum, autem veniam quam! Corporis sunt in ipsam?
    <br/><br/> 
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    <br/><br/>
    Repellendus qui ab consequatur labore iste ex ratione eligendi voluptates maxime. 
    <br/><br/>
    Voluptatem numquam nobis voluptatum, autem veniam quam! Corporis sunt in ipsam?       
`;

const body = document.getElementsByTagName('body')[0];
body.append( texto );

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append( progressBar );

// funcion que haga el calculo
const calcularPorcentaje = (event) => {

    const { clientHeight, scrollHeight, scrollTop } = event.target['documentElement'];
    return ( scrollTop / (scrollHeight - clientHeight) * 100 );
}

// STREAMS
const scroll$ = fromEvent( document, 'scroll' );

const progress$ = scroll$.pipe(
    map( calcularPorcentaje ),
    tap( console.log )
)

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${ porcentaje }%`;
});