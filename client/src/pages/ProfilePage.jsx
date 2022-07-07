import { useEffect, useState, useContext } from 'react';
import AuthenticationContext from '../context/authentication';
import { useParams } from 'react-router-dom';
import { profileLoad } from '../services/profile';
import { workoutsAll } from '../services/workout';
import { Link } from 'react-router-dom';
import './ProfilePage.scss';

const ProfilePage = () => {
  const { id } = useParams();

  const [profile, setProfile] = useState(null);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    workoutsAll().then((data) => {
      setWorkouts(data.workouts);
      console.log(data.workouts);
    });
  }, []);

  useEffect(() => {
    profileLoad(id).then((data) => setProfile(data.profile));
  }, [id]);

  // useEffect =
  //   (() => {
  //     profileLoad(id).then((data) => setWorkout(data.workout));
  //   },
  //   [id]);

  const { user } = useContext(AuthenticationContext);

  return (
    <>
      {profile && (
        <div className="profile-page">
          <header>
            <h2>{profile.name}</h2>

            <img
              className="profile-image"
              src={profile.picture}
              alt={profile.name}
            />

            {user && user._id === id && (
              <Link className="btn" style={{ fontSize: 15 }} to="/profile/edit">
                Edit Your Profile
              </Link>
            )}
          </header>

          <section className="profile-workouts">
            <h2>List of workouts created</h2>
            {workouts &&
              workouts.map((workout, index) => {
                return (
                  <ul key={index}>
                    <Link to={`/workout/${workout._id}`}>
                      <h3 style={{ fontWeight: 'bold' }}>{workout.name}</h3>
                      <button className="profile-button">
                        Check the Workout
                      </button>
                    </Link>
                  </ul>
                );
              })}
          </section>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
