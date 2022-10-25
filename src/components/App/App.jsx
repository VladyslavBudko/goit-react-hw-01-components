// import PropTypes from 'prop-types';
import users from 'components/JsonData/user.json';
import data from 'components/JsonData/data.json';
import friends from 'components/JsonData/friends.json';
import transactions from 'components/JsonData/transactions.json';

import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { SectionMain } from './App.styled';

export const App = () => {
  return (
    <>
      <SectionMain>
        <Profile
          username={users.username}
          tag={users.tag}
          location={users.location}
          avatar={users.avatar}
          stats={users.stats}
        />
      </SectionMain>
      <SectionMain>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </SectionMain>
      <SectionMain>
        <FriendsList friends={friends} />
      </SectionMain>
      <SectionMain>
        <TransactionHistory items={transactions} />
      </SectionMain>
    </>
  );
};
