import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';

import AuthenticationContext from './context/authentication';
import { loadUserInformation } from './services/authentication';

import BodyPartPage from './pages/BodyPartPage';
import SingleExercisePage from './pages/SingleExercisePage';
import WorkoutAddPage from './pages/WorkoutAddPage';
import AllWorkoutsPage from './pages/AllWorkoutsPage';
import SingleWorkoutPage from './pages/SingleWorkoutPage';
import Newnav from './components/Newnav';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUserInformation().then((data) => {
      setUser(data.user);
    });
  }, []);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Newnav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercise/part/:partName" element={<BodyPartPage />} />
          <Route path="/exercise/id/:id" element={<SingleExercisePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/workout" element={<WorkoutAddPage />} />
          <Route path="/workout/all" element={<AllWorkoutsPage />} />
          <Route path="/workout/:id" element={<SingleWorkoutPage />} />
        </Routes>
      </BrowserRouter>
    </AuthenticationContext.Provider>
  );
};

export default App;
