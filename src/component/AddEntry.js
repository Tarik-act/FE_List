import React, { useState } from 'react';

const AddEntry = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [cocktail, setCocktail] = useState('');
  const [points, setPoints] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !cocktail || !points) {
      alert('Please add all values');
      return;
    }

    onAdd({ name, cocktail, points });

    setName('');
    setCocktail('');
    setPoints('');
  };

  const reset = () => {
    setName('');
    setCocktail('');
    setPoints('');
  };

  return (
    <div className='add_entry'>
      <form className='form' onSubmit={onSubmit}>
        <h1>Add Entry</h1>
        <div className='form_control'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='form_control'>
          <label htmlFor='cocktail'>Select Cocktail</label>
          <select
            id='cocktail'
            placeholder='Select'
            value={cocktail}
            onChange={(e) => setCocktail(e.target.value)}
          >
            <option value='' defaultChecked hidden>
              Select
            </option>
            <option value='Malta'>Malta</option>
            <option value='Santra'>Santra</option>
            <option value='Sonfee'>Sonfee</option>
          </select>
        </div>
        <div className='form_control'>
          <label htmlFor='point'>Points (0 to 10)</label>
          <input
            type='number'
            placeholder='Give points'
            id='point'
            min='0'
            max='10'
            maxLength='30'
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </div>
        <div className='form_button'>
          <button type='reset' className='btn' onClick={reset}>
            Reset
          </button>
          <button type='submit' className='btn'>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEntry;
