// import PropTypes from 'prop-types';

export const Statistics = props => {
    const { label, percentage } = props.stats[0];
    // console.log(id, label, percentage);
    // console.log(props);

  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      
      <ul className="stat-list">
        <li className="item">
          <span className="label">{label} </span>
          <span className="percentage">{percentage}%</span>
        </li>
        {/* <li className="item">
          <span className="label">.mp3</span>
          <span className="percentage">14%</span>
        </li>
        <li className="item">
          <span className="label">.pdf</span>
          <span className="percentage">41%</span>
        </li>
        <li className="item">
          <span className="label">.mp4</span>
          <span className="percentage">12%</span>
        </li> */}
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
