import React from 'react';

class Form extends React.Component {

  render() {
    const button = (
      <button className="submit">Je participe</button>);
    const loader = (<div className="load"></div>);

    return (
      <div className="form">
        <form onSubmit={this.props.click}>
          <input type="number" min="1" max="100" className="id" onChange={this.props.change} />
          {this.props.loading ? loader : button}
        </form>
      </div>
    )
  }
}

export default Form;