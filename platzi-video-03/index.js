import React from'react';
import ReactDOM from'react-dom';
// Importamos dependencias de React

const app = document.getElementById('app');
// Referenciamos un elemento con ID app

const holaMundo = <h1>Hola Mundo!</h1>;
// Insertamos en una constante lo que queremos renderizar

ReactDOM.render(holaMundo, app);
// Le decimos a ReactDOM que renderizar y donde renderizar