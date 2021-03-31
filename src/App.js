import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MD5 from 'crypto-js/md5';
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const path = 'https://gateway.marvel.com:443/v1/public/characters?';
      const param = 'nameStartsWith=';
      const ts = Date.now().toString();
      const publicKey = '9fcfc03019c59151e1631f1416e7d13f';
      const privateKey = '5069a6d029872431a7b5b58cdad73bcef6197740';
      const hashkey = `${ts}${privateKey}${publicKey}`;
      const hash = MD5(hashkey).toString();

      const result =
        query.trim() != ''
          ? await axios(
              `${path}${param}${query}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
            )
          : await axios(`${path}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);

      // const result = await axios(
      //   `${path}${param}${query}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
      // );

      // console.log(result.data.data.results);
      setItems(result.data.data.results);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
