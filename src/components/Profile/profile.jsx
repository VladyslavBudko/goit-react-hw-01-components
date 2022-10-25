import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileListUl,
  ProfileItem,
  ProfileItemContainer,
  DescriptionContainer,
  AvatarImg,
  NameParagraph,
  TagParagraph,
  LocationParagraph,
  StatsList,
  StatsItem,
  LabelSpan,
  QuantitySpan,
} from 'components/Profile/Profile.styled';

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;

  return (
    <ProfileContainer>
      <ProfileListUl>
        <ProfileItem>
          <ProfileItemContainer>
            <DescriptionContainer>
              <AvatarImg src={avatar} alt="User avatar" />
              <NameParagraph>{username} </NameParagraph>
              <TagParagraph>@{tag}</TagParagraph>
              <LocationParagraph>{location} </LocationParagraph>
            </DescriptionContainer>

            <StatsList>
              <StatsItem>
                <LabelSpan>Followers</LabelSpan>
                <QuantitySpan>{stats.followers}</QuantitySpan>
              </StatsItem>

              <StatsItem>
                <LabelSpan>Views</LabelSpan>
                <QuantitySpan>{stats.views}</QuantitySpan>
              </StatsItem>

              <StatsItem>
                <LabelSpan>Likes</LabelSpan>
                <QuantitySpan>{stats.likes} </QuantitySpan>
              </StatsItem>
            </StatsList>
          </ProfileItemContainer>
        </ProfileItem>
      </ProfileListUl>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
