import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Name:', name, 'Age:', age);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Form To Fill</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          value={age}
          onChange={handleAgeChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
