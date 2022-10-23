import PropTypes from 'prop-types';
import { Friend } from 'components/Friend/Friend';

export const FriendsList = ({ friends }) => {
//   console.log(friends);

  return (
    <div className="friends">
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Friend
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
          id={id}
        />
      ))}
    </div>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
