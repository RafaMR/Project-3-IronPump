import { Link } from 'react-router-dom';

const ProfileCard = ({ profile }) => (
  <Link className="profile-card" to={`/profile/${profile._id}`}>
    <img src={profile.picture} alt={profile.name} />
    <span>{profile.name}</span>
  </Link>
);

export default ProfileCard;
