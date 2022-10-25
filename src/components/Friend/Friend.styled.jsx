import styled from "styled-components";

export const FriendOnline = styled.span`
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${setBgCl};
`;

export const FriendName = styled.p`
    font-weight: 500;
    font-size: 20px;
`;

function setBgCl ({ onlineFriend, theme }) {
     switch (onlineFriend) {
        case true:
            return theme.colors.green;
        case false:
            return theme.colors.red;
        default:
            return theme.colors.black;
    } 
}