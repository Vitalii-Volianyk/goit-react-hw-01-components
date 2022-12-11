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
          <a href="/goit-react-hw-01-components#list">Go to list</a>
          <div className="profiles">
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
            <Profile
              username={user.username}
              tag={user.tag}
              location={user.location}
              avatar={user.avatar}
              stats={user.stats}
            />
          </div>
        </>
      );
    case '#task2':
      return (
        <>
          <a href="/goit-react-hw-01-components#list">Go to list</a>
          <Statistics title="Upload stats" stats={data} />
          <Statistics stats={data} />
        </>
      );
    case '#task3':
      return (
        <>
          <a href="/goit-react-hw-01-components#list">Go to list</a>
          <FriendList friends={friends} />
        </>
      );
    case '#task4':
      return (
        <>
          <a href="/goit-react-hw-01-components#list">Go to list</a>
          <TransactionHistory data={transactions} />
        </>
      );
    case '#list':
      return <TaskList />;
    default:
      return (
        <>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
          <Statistics title="Upload stats" stats={data} />
          <Statistics stats={data} />
          <FriendList friends={friends} />
          <TransactionHistory data={transactions} />
        </>
      );
  }
}
