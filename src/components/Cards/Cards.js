// Cards.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Cards.css'; // Import the CSS file

const Cards = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {shows.map((show) => (
          <div key={show.id} className="col-md-4 mb-4">
            <div className="card">
              <img
                src={show.image ? show.image.medium : 'https://via.placeholder.com/210x295?text=No+Image'}
                className="card-img-top"
                alt={show.name}
              />
              <div className="card-body">
                <h5 className="card-title">{show.name}</h5>
                {/* <p className="card-text" dangerouslySetInnerHTML={{ __html: show.summary }}></p> */}
                <Link to={`/show/${show.id}`} className="btn btn-primary">
                  View Summary
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
