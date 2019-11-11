import React from 'react';
import {
          BrowserRouter as Router,
          Route,
          Link
        } from "react-router-dom";

import '../utils/App.css';

import Form from './Form';
import Character from './Character';
import Nav from './Nav';

  /**
   * Composant principal de l'application, gère les event handlers
   */

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      loading: false,
      reponse: {
        nom: '',
        age: '',
        avatar: ''
      }
    }
  }

  /**
   * Récupère l'id saisi par le joueur et gère l'envoie de la requête à l'API.
   * Le résultat est stocké en local pour garder une trace de la dernière fiche de personnage reçue.
   * @param e est l'event correspondant à l'envoie du formulaire
   */

  handle(e) {
    e.preventDefault(); // empêche le rechargement de la page lors de l'envoie du formulaire

    const id = this.state.id;
    id >= 0 && id && // "short circuit" evaluation. Lorsque l'id existe et est supérieure ou égale à 0, on effectue la requête
    
    fetch(`http://api.feedtheram.com:8000/Character/${id}`)
      .then(e => {
        this.setState({loading: true});
        return e.json();
      })
      .then(e => {
        setTimeout(() => { // Un petit timeout pour admirer le changement d'état du bouton du formulaire
          this.setState({reponse: e, loading: false});
          localStorage.setItem("nom", e["nom"]);
          localStorage.setItem("age", e["age"]);
          localStorage.setItem("avatar", `https://robohash.org/${e["nom"]}`);
          document.querySelector('#id').click();
        }, 1500);
      });
  }

  /**
   * Met à jour l'id dans le state à mesure que la valeur du champ de saisie est modifiée par l'utilisateur
   * @e est le champ de saisie
   */

  setId(e) {
    this.setState({id: e.target.value});
  }

  /**
   * Défini les routes des composants affichés, et transmet les méthodes et le state à ces derniers.
   */

  render() {
    const reponse = this.state.reponse;
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Nav} />

          <Route exact path="/" render={() => <Form
            change={this.setId.bind(this)} // On fait un bind du contexte. Lorsque la méthode "setId()" sera executée dans le Form, le contexte (this) sera celui de App.
            click={this.handle.bind(this)} // Ainsi, c'est dans le parent que sera modifié le state.
            loading={this.state.loading} />} />
          <Route exact path="/" render={(location) => <Link id="id" to={{ pathname: `${process.env.PUBLIC_URL}/${reponse.nom}/`, state: {character: reponse} }}/>} />
        {/* Crée une route custom pour le personnage reçu */}

          <Route exact path="/:Character/" render={() => <Character
            stats={this.state.reponse} />} /> {/* :Character est un placeholder pour le nom du personnage */}
        </div>
      </Router>
    );
  }

}

export default App;
