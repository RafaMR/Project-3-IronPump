import { workoutAdd } from '../services/workout';
import { useNavigate } from 'react-router-dom';
import WorkoutForm from '../components/WorkoutForm';
import { useState, useContext } from 'react';

import AuthenticationContext from '../context/authentication';

const WorkoutAddPage = () => {
  const { user, setUser } = useContext(AuthenticationContext);
  const [workout, setWorkout] = useState({
    name: '',
    owner: '',
    bodyPart: '',
    sets: '',
    repetitions: '',
    weight: '',
    exercises: []
  });

  const navigate = useNavigate();

  const handleWorkoutCreation = (event) => {
    event.preventDefault();
    console.log(user);
    const newWorkout = {
      exercises: workout.exercises,
      owner: user._id,
      name: workout.name
    };
    console.log(newWorkout);
    workoutAdd(newWorkout).then((data) => {
      const id = data.workout._id;
      navigate(`workout/${id}`);
    });
  };

  return (
    <div>
      <h1>Add Workout</h1>
      <WorkoutForm
        workout={workout}
        onWorkoutChange={setWorkout}
        onWorkoutSubmit={handleWorkoutCreation}
        buttonLabel="Create Workout"
      />
    </div>
  );
};

export default WorkoutAddPage;

// export const workoutAdd = (exercises, sets) =>
//   apiAuthentication
//     .post(`/workout`, exercises, sets)
//     .then((response) => response.data);
