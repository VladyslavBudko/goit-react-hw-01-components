import PropTypes from 'prop-types';

export const StatisticsList = ({ itemStatistics }) => {
//   console.log(itemStatistics);
  const { label, percentage } = itemStatistics;

  return (
    <div>
        <li className="item">
          <span className="label">{label} </span>
          <span className="percentage">{percentage}%</span>
        </li>
    </div>
  );
};

StatisticsList.propTypes ={
label:PropTypes.string.isRequired,
percentage:PropTypes.string.isRequired,
}