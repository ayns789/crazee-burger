import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Card({ title, imageSource, price }) {
  return (
    <CardStyled>
      <div className='image'>
        <img src={imageSource} alt={title} />
      </div>
      <div className='info-text'>
        <div className='description'>
          <div className='title'>{title}</div>
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
  .image {
    border: 1px solid fuchsia;
    width: 100px;
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
  .description {
    border: 1px solid fuchsia;
  }
`;
