import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import ProfileSearchPage from './pages/ProfileSearchPage';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';

import Navbar from './components/Navbar';
import AuthenticationContext from './context/authentication';
import { loadUserInformation } from './services/authentication';
import { getAllExercises } from './services/api';
import ExercisesList from './components/ExercisesList';
import BodyPartPage from './pages/BodyPartPage';
import SingleExercisePage from './pages/SingleExercisePage';

const App = () => {
  //const [exercises, setExercises] = useState([]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUserInformation().then((data) => {
      setUser(data.user);
    });
  }, []);

  ///useEffect(() => {
  ///  getAllExercises().then((res) => {
  ///    setExercises(res);
  ///  });
  ///}, []);

  return (
    <AuthenticationContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercise/part/:partName" element={<BodyPartPage />} />
          <Route path="/exercise/id/:id" element={<SingleExercisePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/log-in" element={<LogInPage />} />
          <Route path="/profile/search" element={<ProfileSearchPage />} />
          <Route path="/profile/edit" element={<ProfileEditPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
      {/* <ExercisesList exercises={exercises} /> */}
    </AuthenticationContext.Provider>
  );
};

export default App;
