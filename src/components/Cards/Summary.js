import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Summary.css';

const Summary = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShow(data))
      .catch((error) => console.log(error));
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  const handleInputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleBookTicket = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Store user details in local/session storage
    localStorage.setItem('userData', JSON.stringify(formData));
    setFormData({
      name: '',
      email: '',
      phone: '',
    });
    // Show alert message
    alert('Ticket booked successfully!');
  };

  return (
    <div className="container">
      <h2 className="movie-title">{show.name}</h2>
      <img
        src={show.image ? show.image.medium : 'https://via.placeholder.com/300x400?text=No+Image'}
        className="movie-image"
        alt={show.name}
      />
      <p className="movie-summary" dangerouslySetInnerHTML={{ __html: show.summary }}></p>
      {!showForm ? (
        <div>
          <button className="form-button" onClick={handleBookTicket}>
            Book Movie Ticket
          </button>
        </div>
      ) : (
        <form onSubmit={handleFormSubmit} className="form-container">
          <label className="form-label">
            Movie Name:
            <input type="text" value={show.name} disabled className="form-input" />
          </label>
          <label className="form-label">
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </label>
          <label className="form-label">
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </label>
          <label className="form-label">
            Phone:
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </label>
          <button type="submit" className="form-button">
            Book Ticket
          </button>
        </form>
      )}
    </div>
  );
};

export default Summary;
