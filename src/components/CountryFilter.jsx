import React from 'react';


/**
 * Componente modular para filtrar por país.
 * @param {Function} setCountry - Función para actualizar el estado del país en el padre.
 */
function CountryFilter({ setCountry }) {
  // Generamos un ID único para vincular el label con el select
  const selectId = "country-selector";

  return (
    <div className="filter-container">
      {/* Accesibilidad: 'htmlFor' debe coincidir con el 'id' del select.
        Esto permite que los lectores de pantalla anuncien "Country" al entrar al select.
      */}
      <label htmlFor={selectId}>Country:</label>

      <select 
        id={selectId} 
        onChange={(e) => setCountry(e.target.value)}
        aria-label="Seleccionar país para ver datos"
      >
        <option value="USA">United States</option>
        <option value="CAN">Canada</option>
        <option value="MEX">México</option>
        <option value="BRA">Brazil</option>
        <option value="DEU">Germany</option>
        <option value="JPN">Japan</option>
      </select>
    </div>
  );
}

export default CountryFilter;