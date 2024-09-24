
import React, { useState } from 'react';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';
import './styles.css';

const App = () => {
  const [services, setServices] = useState([]);
  const [currentService, setCurrentService] = useState(null);

  const addOrUpdateService = (service) => {
    if (currentService) {
      const updatedServices = services.map((s) =>
        s.name === currentService.name ? service : s
      );
      setServices(updatedServices);
    } else {
      setServices([...services, service]);
    }
  };

  const editService = (service) => {
    setCurrentService(service);
  };

  const deleteService = (index) => {
    const updatedServices = services.filter((_, i) => i !== index);
    setServices(updatedServices);
  };

  return (
    <div className="app">
      <h1>Healthcare Services</h1>
      <ServiceForm
        onSubmit={addOrUpdateService}
        currentService={currentService}
        setCurrentService={setCurrentService}
      />
      <ServiceList services={services} onEdit={editService} onDelete={deleteService} />
    </div>
  );
};

export default App;
