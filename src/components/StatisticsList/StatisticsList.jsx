import PropTypes from 'prop-types';
import { LabelSpan, PercentageSpan, StatisticsItem } from './StatisticsList.styled';


export const StatisticsList = ({ itemStatistics }) => {
  const { label, percentage } = itemStatistics;
  return (
    <>
      <StatisticsItem>
        <LabelSpan>{label} </LabelSpan>
        <PercentageSpan>{percentage}%</PercentageSpan>
      </StatisticsItem>
      </>
  );
};

StatisticsList.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.string,
};
