import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { logInUser } from '../services/authentication';
import AuthenticationForm from '../components/AuthenticationForm';

const LogInPage = () => {
  const navigate = useNavigate();

  const [user, setUserState] = useState({
    email: '',
    password: ''
  });

  const { setUser } = useContext(AuthenticationContext);

  const handleLogIn = () => {
    logInUser(user).then((data) => {
      setUser(data.user);
      navigate('/');
    });
  };

  return (
    <div>
      <h1>Log In</h1>
      <AuthenticationForm
        user={user}
        buttonLabel="Log In"
        displayInputs={['email', 'password']}
        onUserChange={setUserState}
        onAuthenticationSubmit={handleLogIn}
      />
    </div>
    //This code is inside the AuthenticationForm component
    //<form onSubmit={handleLogIn}>
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

    //  <button>Log In to Existing Account</button>
    //</form>
  );
};

export default LogInPage;
