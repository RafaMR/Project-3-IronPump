import { exerciseList, bodyPartList } from '../services/exercise';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [bodyParts, setBodyPart] = useState([]);

  useEffect(() => {
    bodyPartList().then((data) => setBodyPart(data.name));
  }, [bodyParts]);

  return (
    <div>
      <h1> Hola esto es un test</h1>
      {bodyParts &&
        bodyParts.map((part) => (
          <ul>
            <li key={part.name}>{part.name}</li>
          </ul>
        ))}
    </div>
  );
};

export default HomePage;

// const [exercises, setExercises] = useState();

// useEffect(() => {
//   exerciseList().then((data) => setExercises(data.exercises));
// }, [exercises]);

{
  /* {exercises &&
    exercises.map((exercise) => (
      <ul>
        <li key={exercise.id}>{exercise.name}</li>
      </ul>
  ))} */
}
