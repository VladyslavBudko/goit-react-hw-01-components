// import PropTypes from 'prop-types';
import users from './JsonData/user.json';
import data from './JsonData/data.json';
import friends from './JsonData/friends.json';
import transactions from './JsonData/transactions.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

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
      <TransactionHistory items={transactions} />
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
