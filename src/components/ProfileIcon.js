import "../styles/profileIcon.scss";

function ProfileIcon(props) {
  const { iconSize,image } = props;
  let profileImage = image;

  return (
    <div>
      <img
        className={`profileIcon ${iconSize}`}
        src={profileImage}
        alt="profile"
      />
    </div>
  );
}

export default ProfileIcon;
