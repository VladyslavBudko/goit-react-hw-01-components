import styled from '@emotion/styled';

export const StatisticsContainer = styled.div`
  text-align: center;
  width: 350px;
  margin: auto;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.75);
`;

export const StatisticsListUl = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatisticsTitle = styled.h2`
  padding: 20px;
  font-size: 20px;
  color: ${props => props.theme.colors.gray};
  letter-spacing: 0.03em;
  text-transform: uppercase;
`;
