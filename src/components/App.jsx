// import PropTypes from 'prop-types';
import users from './JsonData/user.json';
import data from './JsonData/data.json';

import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

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

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
