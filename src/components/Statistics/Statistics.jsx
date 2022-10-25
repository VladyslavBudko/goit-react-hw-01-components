import PropTypes from 'prop-types';
import { StatisticsList } from '../StatisticsList/StatisticsList';
import {
  StatisticsContainer,
  StatisticsListUl,
  StatisticsTitle,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  //   console.log(title);
  //   console.log(stats);

  if (!title) return;

  return (
    <StatisticsContainer>
      <StatisticsTitle>Upload stats</StatisticsTitle>
      <StatisticsListUl>
        {stats.map(prop => {
          //   console.log(prop);
          return <StatisticsList key={prop.id} itemStatistics={prop} />;
        })}
      </StatisticsListUl>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  prop: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
