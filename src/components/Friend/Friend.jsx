import PropTypes from 'prop-types';
import { FriendOnline, FriendName } from './Friend.styled';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <>
      <FriendOnline onlineFriend={isOnline}>{isOnline}</FriendOnline>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </>
  );
};

Friend.protoTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
