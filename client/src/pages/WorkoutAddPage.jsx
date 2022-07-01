import { workoutAdd } from '../services/workout';
import { useNavigate } from 'react-router-dom';
import WorkoutForm from '../components/WorkoutForm';
import { useState } from 'react';

const WorkoutAddPage = () => {
  const [workout, setWorkout] = useState({
    name: '',
    bodyPart: '',
    gifUrl: '',
    equipment: '',
    exercises: []
  });

  const navigate = useNavigate();

  const handleWorkoutCreation = () => {
    workoutAdd(workout).then((data) => {
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
        buttonLebel="Create Workout"
      />
    </div>
  );
};

export default WorkoutAddPage;

// export const workoutAdd = (exercises, sets) =>
//   apiAuthentication
//     .post(`/workout`, exercises, sets)
//     .then((response) => response.data);
