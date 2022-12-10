import TaskList from './TaskList/TaskList';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Task3 from './Task3/Task3';
import Task4 from './Task4/Task4';
import user from '../data/user.json';
import data from '../data/data.json';

export function App() {
  switch (window.location.pathname) {
    case '/task1':
      return (
        <>
          <a href="/">Go to list</a>
          <Profile
            username={user.username}
            tag={user.tag}
            location={user.location}
            avatar={user.avatar}
            stats={user.stats}
          />
        </>
      );
    case '/task2':
      return (
        <>
          <a href="/">Go to list</a>
          <Statistics title="Upload stats" stats={data} />
          <Statistics stats={data} />
        </>
      );
    case '/task3':
      return (
        <>
          <a href="/">Go to list</a>
          <Task3 />
        </>
      );
    case '/task4':
      return (
        <>
          <a href="/">Go to list</a>
          <Task4 />
        </>
      );
    default:
      return <TaskList />;
  }
}
