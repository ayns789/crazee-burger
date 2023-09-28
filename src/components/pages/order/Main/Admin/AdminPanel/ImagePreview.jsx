import styled from 'styled-components';
import PropTypes from 'prop-types';
import { theme } from '../../../../../../theme';

export default function ImagePreview({ imageSource, title }) {
  return (
    <ImagePreviewStyled>
      {imageSource ? (
        <img src={imageSource} alt={title} />
      ) : (
        <span className='empty-image'>Aucune image</span>
      )}
    </ImagePreviewStyled>
  );
}

ImagePreview.propTypes = {
  imageSource: PropTypes.string,
  title: PropTypes.string,
};

const ImagePreviewStyled = styled.div`
  /* background: lightcoral; */
  // surface, on commence toujours par ligne, puis colonne:
  // début ligne 1 / colonne 1, fin ligne 4 / colonne 2
  grid-area: 1 / 1 / 4 / 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: center;
  }
  .empty-image {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${theme.colors.greyLight};
    line-height: 1.5;
    color: ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
  }
`;
