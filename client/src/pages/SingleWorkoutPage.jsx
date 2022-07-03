import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { workoutLoad } from '../services/workout';

const SingleWorkoutPage = () => {
  const [workout, setworkout] = useState();

  const { id } = useParams();

  useEffect(() => {
    workoutLoad(id).then((data) => {
      console.log(id);
      setworkout(data.workout);
    });
  }, [id]);

  return <div>{workout && workout.name}</div>;
};

export default SingleWorkoutPage;
