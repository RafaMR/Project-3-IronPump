import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';
import { singleExercise } from '../services/exercise';
const SingleExercisePage = () => {
  const [exercise, setExercise] = useState();
  const { user, setUser } = useContext(AuthenticationContext);
  const capitalizeFirstLowercaseRest = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };
  const { id } = useParams();
  useEffect(() => {
    singleExercise(id).then((data) => {
      console.log(data);
      setExercise(data.exercise);
    });
  }, [id]);
  return (
    <div>
      {user && (
        <>
          {exercise && (
            <>
              <h1>{capitalizeFirstLowercaseRest(exercise.name)}</h1>
              <img src={exercise.gifUrl} alt={exercise.name} />
              <h2>Target: {capitalizeFirstLowercaseRest(exercise.target)}</h2>
              <h2>
                Body Part: {capitalizeFirstLowercaseRest(exercise.bodyPart)}
              </h2>
            </>
          )}
        </>
      )}
    </div>
  );
};
export default SingleExercisePage;
