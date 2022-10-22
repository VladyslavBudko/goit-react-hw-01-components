// import PropTypes from 'prop-types';

export const FriendsList = props => {
  const { avatar, name, isOnline } = props.friends[0];
  // console.log(name)
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};