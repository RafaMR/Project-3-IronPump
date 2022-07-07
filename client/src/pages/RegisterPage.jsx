import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationForm from '../components/AuthenticationForm';
import AuthenticationContext from '../context/authentication';
import { registerUser } from '../services/authentication';
import './RegisterPage.scss';

const RegisterPage = () => {
  const navigate = useNavigate();

  const [user, setUserState] = useState({
    name: '',
    email: '',
    password: '',
    picture: ''
  });

  const { setUser } = useContext(AuthenticationContext);

  const handleRegistration = () => {
    registerUser(user).then((data) => {
      setUser(data.user);
      navigate('/');
    });
  };

  return (
    <div className="register-page">
      <h2>Register New Account</h2>
      <AuthenticationForm
        user={user}
        displayInputs={['name', 'email', 'password', 'picture']}
        onUserChange={setUserState}
        onAuthenticationSubmit={handleRegistration}
        buttonLabel="Register New Account"
      />
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

export default RegisterPage;
