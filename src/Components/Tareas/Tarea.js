import React from 'react';

const Tarea = (props) => {
  // Definimos una función para cuando el usuario haga click en el botón eliminar
  const handleOnClick = () => props.eliminarTarea(props.tarea);
  
  return (
    <div className="tarea">
      <p className="tarea__text">{props.tarea}</p>
      <button className="tarea__close"
        // Usamos la función definida más arriba en el onClick
        onClick={handleOnClick}>
        x
      </button>
    </div>
  );
};

export default Tarea;