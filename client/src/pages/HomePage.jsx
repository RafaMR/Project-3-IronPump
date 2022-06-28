import { exerciseList } from '../services/exercise';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    exerciseList().then((data) => setExercise(data.exercises));
  }, []);

  return (
    <div>
      {exercise.map((exercise) => (
        <ul>
          <li>{exercise.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default HomePage;
