# RXJS

* En este repositorio encontraremos los principales operadores y funcionalidades de la libreria [RXJS](https://rxjs-dev.firebaseapp.com/api)

## Lo primero que debemos de hacer después de descargar el código es correr el comando:

```
npm install
```
Esta instruccion descargará todos los módulos de node necesarios para ejecutar el proyecto.


## Cuando termine de instalar los node_modules, entonces podermos ejecutar el proyecto de con el siguiente comando

```
npm start
```
Para que eso funcione, deben ejecutar ese comando en el mismo directorio donde se encuentra el ```package.json```

## Cambiar el puerto
Por defecto, el puerto esta configurado en el ```8081```, pero si necesitan cambiarlo porque pueda que ese puerto lo use su computadora, pueden cambiarlo abriendo el ```package.json``` >> scripts. Ahí verán la instrucción que lanza el servidor de desarrollo

```
"start": "webpack-dev-server --mode development --open --port=8081"
```

Simplemente cambian el puerto por el que ustedes necesiten y listo. (lógicamente graban los cambios antes de ejecutar el ```npm start``` nuevamente)


