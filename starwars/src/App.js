import React, { Component } from 'react';
import CharacterInfo from './components/CharacterInfo';
// import { getConsoleOutput } from '@jest/console';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        const characters = data.results;
        for (const char of characters) {
          for (let i = 0; i < char.films.length; i++) {
            this.getData(char.films[i], film => {
              char.films[i] = film.title;
              this.setState({ starwarsChars: data.results });
            });
          }
        }
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  getData = (URL, cb) => {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        cb(data);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const { starwarsChars } = this.state;
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="characters">
          {starwarsChars.map(char => (
            <CharacterInfo key={char.name} data={char} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
