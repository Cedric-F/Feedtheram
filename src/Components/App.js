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

class App extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      loading: false,
      response: {
        name: '',
        age: '',
        avatar: ''
      }
    }
  }

  handle(e) {
    e.preventDefault();
    const id = this.state.id;
    id >= 0 && id &&
    fetch('http://api.feedtheram.com:8000/Character/' + id)
      .then(e => {
        this.setState({loading: true});
        return e.json();
      })
      .then(e => {
        setTimeout(() => {
          this.setState({response: e, loading: false});
          localStorage.setItem("name", e["name"]);
          localStorage.setItem("age", e["age"]);
          localStorage.setItem("avatar", `https://robohash.org/${e["name"]}`);
          document.querySelector('#id').click();
        }, 1500);
      });
  }

  setId(e) {
    this.setState({id: e.target.value});
  }

  render() {
    const response = this.state.response;
    return (
      <Router>
        <div className="App">
          <Route path="/" component={Nav} />

          <Route exact path="/" render={() => <Form
            change={this.setId.bind(this)}
            click={this.handle.bind(this)}
            loading={this.state.loading} />} />
          <Route exact path="/" render={(location) => <Link id="id" to={{ pathname: `${process.env.PUBLIC_URL}/${response.name}/`, state: {character: response} }}/>} />

          <Route exact path="/:Character/" render={() => <Character
            stats={this.state.response} />} />
        </div>
      </Router>
    );
  }

}

export default App;
