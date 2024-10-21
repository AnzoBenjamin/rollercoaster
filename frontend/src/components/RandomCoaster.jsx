import PropTypes from 'prop-types';

function RandomCoaster({ fetchRandomCoaster, randomCoaster }) {
  RandomCoaster.propTypes = {
    fetchRandomCoaster: PropTypes.func.isRequired,
    randomCoaster: PropTypes.object,
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Random Coaster</h2>
      <button
        onClick={fetchRandomCoaster}
        className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 mb-4"
      >
        Get Random Coaster
      </button>
      {randomCoaster && (
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-bold">{randomCoaster.name}</h3>
          <p>Manufacturer: {randomCoaster.manufacturer}</p>
          <p>Located in: {randomCoaster.inPark}</p>
          <p>Height: {randomCoaster.height} meters</p>
        </div>
      )}
    </div>
  );
}

export default RandomCoaster;
