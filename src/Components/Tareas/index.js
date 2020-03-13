import React from "react";

import "./tareas.css";
import Tarea from "./Tarea";

class Tareas extends React.Component {
  constructor() {
    // llamamos a super, que hace referencia a React.Component, de quién Tareas hereda comportamiento
    super();

    // Definimos una lista vacía dentro de state donde vamos a ir agregando las tareas.
    this.state = {
      lista: []
    };
  }

  // procesarForumlario recibe un evento. Todos los eventos de react, inyectan el evento a la función que pasamos
  procesarFormulario = evt => {
    // Evitamos que la página recargue usando preventDefault, al igual que siempre.
    evt.preventDefault();

    // Esto es como siempre capturamos el valor de un dato en un formulario
    const tarea = evt.target.Tarea.value;

    // Verificamos que la tarea no haya sido ingresada previamente en la lista
    if (this.state.lista.includes(tarea)) {
      alert("La tarea ya existe");
      return;
    }

    // Set State usamos para modificar el valor de "lista"
    this.setState({
      // Usando spread operator podemos generar una nueva lista, basándonos en la anterior y agregar un nuevo elemento
      lista: [...this.state.lista, tarea]
    });
  };

  eliminarTarea = tareaAEliminar => {
    this.setState({
      // Usando filter, podemos crear un nuevo array donde eliminamos los elementos del array anterior que no cumplan con
      // el criterio de comparación.
      lista: this.state.lista.filter(tarea => {
        return tareaAEliminar !== tarea;
      })
    });
  };

  render() {
    return (
      <div className="tareas__wrapper">
        {/* onSubmit llama a procesarFormulario, esto es igual a como veníamos trabajando normalmente */}
        <form onSubmit={this.procesarFormulario}>
          <input name="Tarea" type="text" placeholder="ingrese la tarea" />
        </form>
        {/* Las llaves las usamos en jsx para poder ejecutar código javascript */}
        {// Recorre la lista usando map. Esto devuelve un array nuevo donde cada elemento es un nodo de React.
        this.state.lista.map(tarea => (
          <Tarea
            tarea={tarea} // pasamos la prop tarea
            eliminarTarea={this.eliminarTarea} // pasamos la prop eliminarTarea, que es una función
          />
        ))}
      </div>
    );
  }
}

export default Tareas;
