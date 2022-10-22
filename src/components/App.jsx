// import PropTypes from 'prop-types';
import users from './JsonData/user.json';
import data from './JsonData/data.json';
import friends from './JsonData/friends.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile
        username={users.username}
        tag={users.tag}
        location={users.location}
        avatar={users.avatar}
        stats={users.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
    </>
  );
};

// export const App = () => {
//   return (
//     <>
//       {users.map((user, idx) => (
//         <UserCard key={idx} user={user} />
//       ))}
//     </>
//   );
// };
