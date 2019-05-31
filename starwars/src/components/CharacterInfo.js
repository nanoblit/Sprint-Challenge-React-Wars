import React from 'react';

const CharacterInfo = ({ data }) => (
  <div className="character">
    <h1>{data.name}</h1>
    <p>Born in {data.birth_year}</p>
    <h2>Starred in:</h2>
    <ul>
      {data.films.map(film => <li key={film}>{film}</li>)}
    </ul>
  </div>
);

export default CharacterInfo;
