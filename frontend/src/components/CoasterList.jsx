import PropTypes from 'prop-types';

function CoasterList({ coasters }) {
  CoasterList.propTypes = {
    coasters: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      manufacturer: PropTypes.string.isRequired,
      inPark: PropTypes.string.isRequired,
      height: PropTypes.number.isRequired,
    })).isRequired,
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">All Coasters</h2>
      {coasters.length === 0 ? (
        <p className="text-gray-600">No coasters found</p>
      ) : (
        <ul className="space-y-4">
          {coasters.map((coaster) => (
            <li key={coaster.id} className="p-4 bg-white rounded-lg shadow-md">
              <strong className="text-xl">{coaster.name}</strong> by {coaster.manufacturer}, located in {coaster.inPark} (Height: {coaster.height}m)
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CoasterList;
