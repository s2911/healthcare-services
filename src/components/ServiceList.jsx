
import React from 'react';

const ServiceList = ({ services, onEdit, onDelete }) => (
  <ul>
    {services.map((service, index) => (
      <li key={index}>
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <p>Price: ${service.price}</p>
        <button onClick={() => onEdit(service)}>Edit</button>
        <button onClick={() => onDelete(index)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ServiceList;
