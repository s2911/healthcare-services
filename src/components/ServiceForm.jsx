
import React, { useState, useEffect } from 'react';

const ServiceForm = ({ onSubmit, currentService, setCurrentService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (currentService) {
      setName(currentService.name);
      setDescription(currentService.description);
      setPrice(currentService.price);
    } else {
      setName('');
      setDescription('');
      setPrice('');
    }
  }, [currentService]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !price) return;

    onSubmit({ name, description, price });
    setCurrentService(null); // Reset the current service for new entry
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type="submit">{currentService ? 'Update' : 'Add'} Service</button>
    </form>
  );
};

export default ServiceForm;
