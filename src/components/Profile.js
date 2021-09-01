import "../styles/profile.scss";
import ProfileIcon from "./ProfileIcon";
import { Icon } from '@iconify/react';

function Profile(props) {
  const {
    caption,
    urlText,
    iconSize,
    captionSize,
    hideAccountName,
    image,
    location,
    username,
  } = props;

  return (
    <div className="profile">
      <ProfileIcon
        iconSize={iconSize}
        image={image}
      />
      {(username || caption) && !hideAccountName && (
        <div className="textContainer">
          <span className="accountName">{username}</span>
          <span><Icon icon="akar-icons:location" />{location}</span>
          <span className={`caption ${captionSize}`}>{caption}</span>
        </div>
      )}
      <a href="/">{urlText}</a>
    </div>
  );
}

export default Profile;
