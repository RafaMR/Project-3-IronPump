import { useEffect, useState, useContext } from 'react';
import AuthenticationContext from '../context/authentication';
import { useParams } from 'react-router-dom';
import { profileLoad } from '../services/profile';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
  const { id } = useParams();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    profileLoad(id).then((data) => setProfile(data.profile));
  }, [id]);

  const { user } = useContext(AuthenticationContext);

  return (
    <div>
      {profile && (
        <>
          <img src={profile.picture} alt={profile.name} />
          <h1>{profile.name}</h1>
        </>
      )}

      {user && user._id === id && (
        <Link className="btn" to="/profile/edit">
          Edit Profile
        </Link>
      )}
    </div>
  );
};

export default ProfilePage;
