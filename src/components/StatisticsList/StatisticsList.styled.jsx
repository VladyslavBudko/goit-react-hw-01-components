import styled from '@emotion/styled';

export const LabelSpan = styled.span`
  font-size: 12px;
  color: ${props => props.theme.colors.white};
`;

export const PercentageSpan = styled.span`
  font-size: 18px;
  color: ${props => props.theme.colors.white};
  font-weight: 500;
`;

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 15px;
  width: calc(100% / 5);
  background-color: ${getRangomColor};
  outline: ${props => `1px solid ${props.theme.colors.gray}`};
`;

function getRangomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}
