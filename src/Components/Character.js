import React from 'react';
import {Card} from 'react-bootstrap';

class Character extends React.Component {

  render() {
    const {stats} = {...this.props};
    return (
      <div className="character">
      <Card style={{ width: '18rem' }}>
        <Card.Title>Vous êtes désormais:</Card.Title>
        <Card.Body>
          <Card.Img variant="top" src={stats.avatar || localStorage["avatar"]} />
            <ul>
              {Object.keys(stats).map((e, i) => i < 2 && (<li key = {i}>{`${e.charAt(0).toUpperCase() + e.slice(1)}: ${stats[e] || localStorage[e]}`}</li>))}
            </ul>
        </Card.Body>
      </Card>
      </div>
    )
  }
}

export default Character;