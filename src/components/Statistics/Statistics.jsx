import './Statistics.css';
import StatisticsItem from './StatisticItem';
export default function Statistics({ title = 'Statistics', stats }) {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(item => (
          <StatisticsItem key={item.id} data={item} />
        ))}
      </ul>
    </section>
  );
}