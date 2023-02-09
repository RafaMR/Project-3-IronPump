import { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { singleExercise } from '../services/exercise';
import { workoutDelete, workoutLoad } from '../services/workout';
import { exerciseList } from '../services/exercise';
import { Link } from 'react-router-dom';
import './SingleWorkoutPage.scss';
const SingleWorkoutPage = () => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [workout, setworkout] = useState();
  const [exercise, setExercise] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    workoutLoad(id).then((data) => {
      // console.log(id);
      console.log(data);
      setworkout(data.workout);
      setExercise(data.workout.exercises);
      console.log('STATE:EXERCISE', exercise, 'STATE:WORKOUT', workout);
    });
  }, [id]);
  const handleWorkoutDeletion = () => {
    workoutDelete(id).then(() => {
      navigate('/workout/all');
    });
  };
  const capitalizeFirstLowercaseRest = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  // const getExercise = () => {
  //   exerciseList(workout).then((data) => {
  //     console.log(data);
  //     setExercise(data.exercises);
  //   });
  // };
  // useEffect(() => {
  //   getExercise();
  // }, []);
  return (
    <div>
      {(user && (
        <>
          <h1>{workout && workout.name}</h1>
          <div className="displayed-exercises">
            {workout &&
              workout.exercises.map((item, index) => {
                const { name, _id, gifUrl } = item.exercise;
                return (
                  <Link key={index} to={`/exercise/id/${_id}`}>
                    <h3>{capitalizeFirstLowercaseRest(name)}</h3>
                    <img src={gifUrl} alt={name} />
                    <h5>Sets: {item.sets}</h5>
                    <h5>Reps: {item.repetitions}</h5>
                    <h5>Weight: {item.weight} kgs</h5>
                  </Link>
                );
              })}
          </div>
          <button
            className="delete-button"
            onClick={handleWorkoutDeletion}
            style={{ fontSize: 30 }}
          >
            Delete Workout
          </button>
        </>
      )) || (
        <>
          <h2>You need to be registered to access this page</h2>
          <Link to="/log-in">Log In</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
};
export default SingleWorkoutPage;
