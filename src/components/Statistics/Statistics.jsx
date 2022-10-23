import PropTypes from 'prop-types';
import { StatisticsList } from '../StatisticsList/StatisticsList';

export const Statistics = props => {
  //   const { id, label, percentage } = props.stats[0];
  // console.log(props);

  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {props.stats.map(prop => {
        //   console.log(prop);

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
