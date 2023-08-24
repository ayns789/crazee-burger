import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Card({ title, imageSource, price }) {
  return (
    <CardStyled>
      <div className='image'>
        <img src={imageSource} alt={title} />
      </div>
      <div className='info-text'>
        <div className='title'>{title}</div>
        <div className='description'>
          <div className='price'>{price}</div>
          <button className='add-button'>Ajouter</button>
        </div>
      </div>
    </CardStyled>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  imageSource: PropTypes.object,
  price: PropTypes.number,
};

const CardStyled = styled.div`
  background: red;
  width: 240px;
  height: 330px;
  border-radius: 15px;
  display: grid;
  grid-template-rows: 65% 1fr;
  padding: 20px;
  padding-bottom: 10px;
  .image {
    border: 1px solid yellow;
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .info-text {
    border: 1px solid blue;
  }
`;
