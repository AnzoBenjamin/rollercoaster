import { useState, useEffect } from 'react';
import axios from 'axios';
import CoasterList from './components/CoasterList';
import AddCoasterForm from './components/AddCoasterForm';
import RandomCoaster from './components/RandomCoaster';

function App() {
  const [coasters, setCoasters] = useState([]);
  const [randomCoaster, setRandomCoaster] = useState(null);

  useEffect(() => {
    fetchCoasters();
  }, []);

  const fetchCoasters = async () => {
    try {
      const response = await axios.get('http://localhost:8080/coasters');
      setCoasters(response.data);
    } catch (error) {
      console.error('Error fetching coasters', error);
    }
  };

  const addCoaster = async (newCoaster) => {
    try {
      await axios.post('http://localhost:8080/coasters', newCoaster, {
        headers: { 'Content-Type': 'application/json' }
      });
      fetchCoasters(); // Refresh the list after adding
    } catch (error) {
      console.error('Error adding coaster', error);
    }
  };

  const fetchRandomCoaster = async () => {
    try {
      const response = await axios.get('http://localhost:8080/coasters/random');
      const location = response.headers['location'];
      const id = location.split('/').pop();
      const coasterResponse = await axios.get(`http://localhost:8080/coasters/${id}`);
      setRandomCoaster(coasterResponse.data);
    } catch (error) {
      console.error('Error fetching random coaster', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Roller Coaster App</h1>
        <AddCoasterForm addCoaster={addCoaster} />
        <RandomCoaster fetchRandomCoaster={fetchRandomCoaster} randomCoaster={randomCoaster} />
        <CoasterList coasters={coasters} />
      </div>
    </div>
  );
}

export default App;
