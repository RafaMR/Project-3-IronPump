import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { singleExercise } from '../services/exercise';

const SingleExercisePage = () => {
  const [exercise, setExercise] = useState();

  const { id } = useParams();

  useEffect(() => {
    singleExercise(id).then((data) => {
      console.log(id);
      setExercise(data.exercise);
    });
  }, [id]);

  return <div>{exercise && exercise.name}</div>;
};

export default SingleExercisePage;
