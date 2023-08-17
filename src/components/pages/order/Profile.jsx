import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../../theme';
import PropTypes from 'prop-types';

export default function Profile({ username }) {
  return (
    <ProfileStyled>
      <div className='info'>
        <p>
          Hey, <b>{username}</b>
        </p>
        <Link to='/'>
          <div className='btnDisconnect'>
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className='picture'>
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
};

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;
  .info {
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      color: ${theme.colors.greyBlue};
      b {
        color: ${theme.colors.secondary};
      }
    }
    a {
      text-decoration: none;
      .btnDisconnect {
        &:hover {
          text-decoration: underline;
          color: ${theme.colors.greyDark};
        }
        small {
          font-size: ${theme.fonts.size.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    height: auto;
    display: flex;
    height: 100%;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
  }
`;
