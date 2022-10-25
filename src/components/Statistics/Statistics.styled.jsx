import styled from "styled-components";


// item !!!!!!!!!!!!!

export const LabelSpan = styled.span`
    font-size: 12px;
   color: ${props => props.theme.colors.white};
`;

export const PercentageSpan = styled.span`
font-size: 18px;
    color: ${props => props.theme.colors.white};
    font-weight: 500;
`;

// Section !!!!!!!!!!!!!!!!

export const StatisticsContainer = styled.div`
    text-align: center;
    width: 350px;
    margin: auto;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
-webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
`; 

export const StatisticsTitle = styled.h2`
    padding: 20px;
    font-size: 20px;
    color: ${props => props.theme.colors.gray};
    letter-spacing: 0.03em;
    text-transform: uppercase;
`;