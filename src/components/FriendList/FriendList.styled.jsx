import styled from "styled-components";

export const FriendContainer = styled.div`
    text-align: center;
    width: 250px;
    margin: auto;
`;

export const FriendListUl = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 10px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
        -webkit-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
`;