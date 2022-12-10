import './TaskList.css';
export default function TaskList() {
  return (
    <ul className="task-list">
      <li>
        <a href="/task1">Task 1</a>
      </li>
      <li>
        <a href="/task2">Task 2</a>
      </li>
      <li>
        <a href="/task3">Task 3</a>
      </li>
      <li>
        <a href="/task4">Task 4</a>
      </li>
    </ul>
  );
}
