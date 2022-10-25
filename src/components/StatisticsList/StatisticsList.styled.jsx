import styled from "styled-components";

export const StatisticsListUl = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
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
    .padStart(2, "0");
}