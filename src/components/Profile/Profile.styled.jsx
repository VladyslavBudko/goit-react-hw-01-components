import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
  margin: auto;
  width: 250px;
  text-align: center;
`;

export const ProfileListUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ProfileItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.75);
`;

// Item!!!!!!!!!!!!!!!!!!

export const ProfileItemContainer = styled.div`
  padding-top: 32px;
  text-align: center;
  width: 100%;
`;

export const DescriptionContainer = styled.div`
  margin-bottom: 32px;
`;

export const AvatarImg = styled.img`
  width: 100px;
  border-radius: 50%;

  margin-bottom: 32px;
`;

export const NameParagraph = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: ${props => props.theme.colors.black};

  margin-bottom: 10px;
`;

export const TagParagraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray};

  margin-bottom: 10px;
`;

export const LocationParagraph = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray};
`;

export const StatsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  background-color: ${props => props.theme.colors.statsBackground};
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  outline: ${props => `1px solid ${props.theme.colors.gray}`};
  width: calc(100% / 2);
`;

export const LabelSpan = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${props => props.theme.colors.gray};
`;

export const QuantitySpan = styled.span`
  font-weight: 700;
`;
