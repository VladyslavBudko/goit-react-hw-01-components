import styled from '@emotion/styled'

// List !!!!!!!!!!!!!!!!!

export const TransactionTableBody = styled.tbody`
   color: ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.white};

    tr:nth-of-type(even) {
        background-color: ${props => props.theme.colors.tableEvenRow};
    }

    td {
        padding: 15px 30px;
        font-size: 15px;
    }
`;

// Table !!!!!!!!!!!!!!!!
export const TransactionContainer = styled.div`
    margin: auto;
    width: 600px;
`;

export const TransactionTable = styled.table`
    text-align: center;
    width: 100%;
`;

export const TransactionTableHead = styled.thead`
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.tableHeadBackground};

    th {
        padding: 15px 30px;
        font-size: 15px;
        text-transform: uppercase;
        font-weight: 500;
    }
`;