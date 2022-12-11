import TaskList from './TaskList/TaskList';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Profile from './Profile/Profile';

export function App() {
  switch (window.location.hash) {
    case '#task1':
      return (
        <>
          <a href="/goit-react-hw-01-components">Go to list</a>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </>
      );
    case '#task2':
      return (
        <>
          <a href="/goit-react-hw-01-components">Go to list</a>
          <Statistics title="Upload stats" stats={data} />
          <Statistics stats={data} />
        </>
      );
    case '#task3':
      return (
        <>
          <a href="/goit-react-hw-01-components">Go to list</a>
          <FriendList friends={friends} />
        </>
      );
    case '#task4':
      return (
        <>
          <a href="/goit-react-hw-01-components">Go to list</a>
          <TransactionHistory data={transactions} />
        </>
      );
    default:
      return <TaskList />;
  }
}
