import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { singleExercise } from '../services/exercise';
import { workoutLoad } from '../services/workout';
import { exerciseList } from '../services/exercise';
import { Link } from 'react-router-dom';

const SingleWorkoutPage = () => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [workout, setworkout] = useState();
  const [exercise, setExercise] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    workoutLoad(id).then((data) => {
      // console.log(id);
      console.log(data);
      setworkout(data.workout);
      setExercise(data.workout.exercises);
      console.log('STATE:EXERCISE', exercise, 'STATE:WORKOUT', workout);
    });
  }, [id]);

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
          {exercise &&
            exercise.map((item, index) => {
              const { name, _id, gifUrl } = item.exercise;
              return (
                <Link key={index} to={`/exercise/id/${_id}`}>
                  <li>{name}</li>
                  <img src={gifUrl} alt={name} />
                </Link>
              );
            })}
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
