import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { singleExercise } from '../services/exercise';
import { workoutLoad } from '../services/workout';

const SingleWorkoutPage = () => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [workout, setworkout] = useState();
  const [exercise, setExercise] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    workoutLoad(id).then((data) => {
      console.log(id);
      console.log(data);
      setworkout(data.workout);
    });
  }, [id]);

  return (
    <div>
      {workout && (
        <>
          <h2>
            This workout is called {workout.name} and was created by{` `}
            {workout.owner.name}
          </h2>
          <h3>
            {workout.exercises.map((exercise, index) => {
              return (
                <ul key={index}>
                  <li>{exercise._id}</li>
                </ul>
              );
            })}
          </h3>
        </>
      )}
    </div>
  );
};

export default SingleWorkoutPage;
