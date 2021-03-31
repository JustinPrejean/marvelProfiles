import React from 'react';

const CharacterItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          {item.thumbnail.path !=
          'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available' ? (
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt=''
            />
          ) : (
            <img
              src='https://images.unsplash.com/photo-1465101162946-4377e57745c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1657&q=80'
              alt=''
            />
          )}
          {/* <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt=''
          /> */}
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Description: </strong>
              {item.description ? item.description : 'Description unavailable'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CharacterItem;
