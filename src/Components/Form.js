import React from 'react';

  /**
   * Composant du formulaire
   * Affiche un loader à la place du bouton lorsque la requête est en cours
   */

class Form extends React.Component {

  render() {
    const button = (<button onClick={this.props.click} className="submit">Toast</button>);
    const loader = (<div className="load"></div>);

    return (
      <div className="form">
        <form>
          <input type="number" min="1" max="100" className="id" onChange={this.props.change} />
          {this.props.loading ? loader : button}
        </form>
      </div>
    )
  }
}

export default Form;