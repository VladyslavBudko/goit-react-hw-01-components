import PropTypes from 'prop-types';
import { Friend } from 'components/Friend/Friend';
import { FriendContainer, FriendListUl, FriendItem } from './FriendList.styled';

export const FriendsList = ({ friends }) => {
  //   console.log(friends);

  return (
    <FriendContainer>
      <FriendListUl>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendItem key={id}>
            <Friend
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              id={id}
            />
          </FriendItem>
        ))}
      </FriendListUl>
    </FriendContainer>
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
