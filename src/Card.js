import React from "react";

import './card.css';

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      titulo: "Soy un " + props.title,
      foto: 'urlRandom',
      pie: 'Texto inspirador'
    };
  }

  handleOnChangeTitle = evt => {
    const titulo = evt.target.value;

    this.setState({titulo});
  };

  render() {
    return (
      <div className='card'>
        <input
          type="text"
          placeholder="titulo"
          onChange={this.handleOnChangeTitle}
        />
        <h1>{this.state.titulo}</h1>
      </div>
    );
  }
}

// const Card = props => {
//   const titulo = 'soy un ' + props.title;

//   return (
//     <h1>{titulo}</h1>
//   )
// };

export default Card;
