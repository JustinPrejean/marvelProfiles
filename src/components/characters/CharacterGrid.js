import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <h1 style={{ textAlign: 'center' }}>Loading...</h1>
  ) : (
    <section className='cards'>
      {items.map((item) =>
        item.thumbnail.path !=
        'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' ? (
          <CharacterItem key={item.id} item={item}></CharacterItem>
        ) : null
      )}
    </section>
  );
};

export default CharacterGrid;
