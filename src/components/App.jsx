// import PropTypes from 'prop-types';
import users from './JsonData/user.json';
import { UserCard } from './Profile/profile';

export const App = () => {
  return UserCard(users);
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
