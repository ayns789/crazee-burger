import PropTypes from 'prop-types';

export default function EmptyMenuAdmin({ resetProduct }) {
  return (
    <div>
      <span>Pas de produits</span>
      <button onClick={resetProduct}>Générer de nouveaux produits</button>
    </div>
  );
}

EmptyMenuAdmin.propTypes = {
  resetProduct: PropTypes.func,
};
