import React from 'react';
import {Card} from 'react-bootstrap';

/**
 * Composant comprenant la fiche du personnage
 */

class Character extends React.Component {

  /**
   * Affiche les propriétée reçues par le parent, et sinon, celles stockées en local (si l'utilisateur recharge la page, il ne perd pas le résultat)
   */

  render() {
    const {stats} = {...this.props};
    return (
      <div className="character">
        <Card style={{ width: '18rem' }}>
          <Card.Title>Vous êtes désormais:</Card.Title>
          <Card.Body>
            <Card.Img variant="top" src={stats.avatar || localStorage["avatar"]} />
              <ul>
                {Object.keys(stats).map((e, i) =>
                  !Boolean(e.match(/(id|type|avatar)/gi)) && (<li key = {i}>{`${e.charAt(0).toUpperCase() + e.slice(1)}: ${stats[e] || localStorage[e]}`}</li>)
                  )}
              </ul>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Character;