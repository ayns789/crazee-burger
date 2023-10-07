import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { TiDelete } from 'react-icons/ti';

import Button from './Button';
import { theme } from '../../theme';

export default function Card({
  title,
  imageSource,
  leftDescription,
  hasDeleteButton,
  onDelete,
  onClick,
  isHoverable,
  isSelected,
}) {
  return (
    <CardStyled onClick={onClick} isHoverable={isHoverable} isSelected={isSelected}>
      <div className='card'>
        {hasDeleteButton && (
          <button className='delete-button' aria-label='delete-button' onClick={onDelete}>
            <TiDelete className='icon' />
          </button>
        )}
        <div className='image'>
          <img src={imageSource} alt={title} />
        </div>
        <div className='text-info'>
          <div className='title'>{title}</div>
          <div className='description'>
            <div className='left-description'>{leftDescription}</div>
            <div className='right-description'>
              <Button className='primary-button' label={'Ajouter'} />
            </div>
          </div>
        </div>
      </div>
    </CardStyled>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  imageSource: PropTypes.string,
  leftDescription: PropTypes.string,
  hasDeleteButton: PropTypes.bool,
  onDelete: PropTypes.func,
  onClick: PropTypes.func,
  isHoverable: PropTypes.bool,
  isSelected: PropTypes.bool,
};

const CardStyled = styled.div`
  ${(props) => props.isHoverable && hoverableStyle}
  border-radius: ${theme.borderRadius.extraRound};
  height: 330px;

  .card {
    box-sizing: border-box;
    width: 240px;
    height: 330px;
    border-radius: 15px;
    display: grid;
    grid-template-rows: 65% 1fr;
    padding: 20px;
    padding-bottom: 10px;
    box-shadow: ${theme.shadows.medium};
    border-radius: ${theme.borderRadius.extraRound};
    position: relative;

    .delete-button {
      border: 1px solid red;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      width: 30px;
      height: 30px;
      color: ${theme.colors.primary};
      z-index: 2;
      padding: 0;
      border: none;
      background: none;

      .icon {
        height: 100%;
        width: 100%;
      }
      &:hover {
        color: ${theme.colors.redSecondary};
      }
      &:active {
        color: ${theme.colors.primary};
      }
    }

    .image {
      width: 100%;
      height: auto;
      margin-top: 30px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .text-info {
      display: grid;
      grid-template-rows: 30% 70%;
      padding: 5px;

      .title {
        margin: auto 0;
        font-size: ${theme.fonts.size.P4};
        position: relative;
        bottom: 10px;
        font-weight: ${theme.fonts.weights.bold};
        color: ${theme.colors.dark};
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        text-overflow: ellipsis;
        font-family: 'Amatic SC', cursive;
      }

      .description {
        display: grid;
        grid-template-columns: 1fr 1fr;

        .left-description {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-weight: ${theme.fonts.weights.medium};
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: ${theme.fonts.weights.medium};
          color: ${theme.colors.primary};
        }

        .right-description {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: ${theme.fonts.size.P1};

          .primary-button {
            padding: 0;
            font-size: ${theme.fonts.size.XS};
            cursor: pointer;
            padding: 12px;
          }
        }
      }
    }

    ${({ isHoverable, isSelected }) => isHoverable && isSelected && selectedStyle}
  }
`;

const hoverableStyle = css`
  &:hover {
    /* background: red; */
    transform: scale(1.05);
    transition: ease-out 0.4s;
    cursor: pointer;
    box-shadow: ${theme.shadows.orangeHighlight};
  }
`;

const selectedStyle = css`
  background: ${theme.colors.primary};

  .primary-button {
    color: ${theme.colors.primary};
    background-color: ${theme.colors.white};

    border: 1px solid ${theme.colors.white};
    transition: all 200ms ease-out;
    &:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.primary};
      border: 1px solid ${theme.colors.white};
      transition: all 200ms ease-out;
    }
    &:active {
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
    }
    /* &.is-disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }
    &.with-focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      &:active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    } */

    &:disabled {
      opacity: 50%;
      cursor: not-allowed;
      z-index: 2;
    }
    &:focus {
      border: 1px solid white;
      background-color: ${theme.colors.white};
      color: ${theme.colors.primary};
      &:hover {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: 1px solid ${theme.colors.white};
      }
      &:active {
        background-color: ${theme.colors.white};
        color: ${theme.colors.primary};
      }
    }
  }

  .delete-button {
    color: ${theme.colors.white};

    &:active {
      color: ${theme.colors.white};
    }
  }

  .text-info {
    .description {
      .left-description {
        color: ${theme.colors.white};
      }
    }
  }
`;
