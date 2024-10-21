import { useState } from 'react';
import PropTypes from 'prop-types';

function AddCoasterForm({ addCoaster }) {
  AddCoasterForm.propTypes = {
    addCoaster: PropTypes.func.isRequired,
  };

  const [name, setName] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [inPark, setInPark] = useState('');
  const [height, setHeight] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCoaster = {
      name,
      manufacturer,
      inPark,
      height: parseInt(height, 10)
    };
    addCoaster(newCoaster);
    setName('');
    setManufacturer('');
    setInPark('');
    setHeight('');
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Add a New Coaster</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Manufacturer</label>
          <input
            type="text"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Park</label>
          <input
            type="text"
            value={inPark}
            onChange={(e) => setInPark(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Height (in meters)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            className="w-full p-2 border rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Add Coaster
        </button>
      </form>
    </div>
  );
}

export default AddCoasterForm;
