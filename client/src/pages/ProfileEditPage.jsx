import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationForm from '../components/AuthenticationForm';
import AuthenticationContext from '../context/authentication';
import { profileLoad, profileEdit } from '../services/profile';

const ProfileEditPage = () => {
  const navigate = useNavigate();

  const [profile, setProfile] = useState(null);

  const { user, setUser } = useContext(AuthenticationContext);

  useEffect(() => {
    if (user) {
      profileLoad(user._id).then((data) => {
        setProfile(data.profile);
      });
    }
  }, [user]);

  const handleProfileEdit = (event) => {
    profileEdit(profile).then((data) => {
      setUser(data.profile);
      navigate('/');
    });
  };

  return (
    <div>
      <h1>Edit your profile</h1>
      {profile && (
        <AuthenticationForm
          user={profile}
          buttonLabel="Edit your profile"
          displayInputs={['name', 'email', 'picture']}
          onUserChange={setProfile}
          onAuthenticationSubmit={handleProfileEdit}
        />
      )}
    </div>
    //This code is inside AuthenticationForm Component
    //<form onSubmit={handleRegistration}>
    //  <label htmlFor="input-name">Name</label>
    //  <input
    //    id="input-name"
    //    placeholder="Name"
    //    value={name}
    //    onChange={(event) => setName(event.target.value)}
    //  />
    //  <label htmlFor="input-email">Email</label>
    //  <input
    //    id="input-email"
    //    type="email"
    //    placeholder="Email"
    //    value={email}
    //    onChange={(event) => setEmail(event.target.value)}
    //  />
    //  <label htmlFor="input-password">Password</label>
    //  <input
    //    id="input-password"
    //    type="password"
    //    placeholder="Password"
    //    value={password}
    //    onChange={(event) => setPassword(event.target.value)}
    //  />
    //  <button>Register New Account</button>
    //</form>
  );
};

export default ProfileEditPage;
