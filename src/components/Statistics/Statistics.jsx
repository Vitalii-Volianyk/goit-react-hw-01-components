import { PropTypes } from 'prop-types';
import './Statistics.css';
import StatisticsItem from './StatisticItem';
export default function Statistics({ title, stats }) {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">
        {stats.map(item => (
          <StatisticsItem key={item.id} data={item} />
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};
