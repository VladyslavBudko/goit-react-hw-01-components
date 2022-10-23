import PropTypes from 'prop-types';
import { StatisticsList } from '../StatisticsList/StatisticsList';

export const Statistics = ({ title, stats }) => {
  //   const { title, stats } = props;
  //   console.log(title);
  //   console.log(stats);
  {
    if (!title) return;
  }

  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {stats.map(prop => {
          console.log(prop);
          return <StatisticsList key={prop.id} itemStatistics={prop} />;
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  prop: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
