// import PropTypes from 'prop-types';
import { StatisticsList } from '../StatisticsList/StatisticsList';

export const Statistics = props => {
  //   const { id, label, percentage } = props.stats[0];
  // console.log(id, label, percentage);
  // console.log(props);

  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {props.stats.map(prop => {
            console.log(prop)
          return <StatisticsList key={prop.id} itemStatistics={prop} />;
        })}
      </ul>
    </section>
  );
};

// Statistics.propTypes = {
// username: PropTypes.string.isRequired,
// tag: PropTypes.string,
// location: PropTypes.string.isRequired,
// avatar: PropTypes.string.isRequired,
// stats: PropTypes.shape({
//   followers: PropTypes.number.isRequired,
//   views: PropTypes.number.isRequired,
//   likes: PropTypes.number.isRequired,
// }),
// };
