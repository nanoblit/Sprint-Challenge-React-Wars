import React from 'react';

const CharacterInfo = ({ data }) => (
  <div className="character">
    <h1>{data.name}</h1>
    {data.birth_year === 'unknown' ? '' : <p>Born in {data.birth_year}</p>}
    <p>
      They are {data.gender === 'n/a' ? '' : data.gender}{' '}
      {data.species
        ? data.species.map(species => (species.indexOf('https://') > -1 ? '' : species))
        : ''}
    </p>
    <h2>Starred in:</h2>
    <ul>
      {data.films
        ? data.films.map(film => <li key={film}>{film.indexOf('https://') > -1 ? '' : film}</li>)
        : ''}
    </ul>
  </div>
);

export default CharacterInfo;
