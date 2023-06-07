import React, { useState, useEffect } from 'react';
import Cards from './Cards';

const List = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/search/shows?q=all')
      .then(response => response.json())
      .then(data => setShows(data))
      .catch(error => console.log(error));
  }, []);

  return <Cards shows={shows} />;
};

export default List;
