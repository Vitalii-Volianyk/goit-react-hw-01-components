import { PropTypes } from 'prop-types';
export default function StatisticsItem({ data }) {
  return (
    <li className="item">
      <span className="label">{data.label}</span>
      <span className="percentage">{data.percentage}%</span>
    </li>
  );
}
StatisticsItem.propTypes = {
  data: PropTypes.object,
};
