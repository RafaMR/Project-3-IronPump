import { workoutAdd } from '../services/workout';
import { useNavigate } from 'react-router-dom';
import WorkoutForm from '../components/WorkoutForm';
import { useState, useContext, useEffect } from 'react';
import Dropdown from 'react-dropdown';

import AuthenticationContext from '../context/authentication';
import { exercisesByBodyPart } from '../services/exercise';

const DROPDOWN_OPTIONS = [
  'back',
  'cardio',
  'chest',
  'lower arms',
  'lower legs',
  'neck',
  'shoulders',
  'upper arms',
  'upper legs',
  'waist'
];

const DEFAULT_OPTION = DROPDOWN_OPTIONS[0];

const WorkoutAddPage = () => {
  const { user, setUser } = useContext(AuthenticationContext);

  const [selectedBodyPart, setSelectedBodyPart] = useState(DEFAULT_OPTION);
  const [exercises, setExercises] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);

  const [workout, setWorkout] = useState({
    name: '',
    owner: null,
    bodyPart: DEFAULT_OPTION,
    exercises: []
  });

  const navigate = useNavigate();

  const handleWorkoutCreation = () => {
    const newWorkout = {
      exercises: selectedExercises,
      owner: user._id,
      name: workout.name
    };

    console.log('NEW WORKOUT: ', newWorkout);

    workoutAdd(newWorkout).then((data) => {
      const id = data.workout._id;
      console.log('RESPONSE: ', data);
      navigate(`/${id}`);
    });
  };

  const handleFilterByBodyParts = (event) => {
    setSelectedBodyPart(event.value);
    setWorkout({ ...workout, bodyPart: event.value });
  };

  useEffect(() => {
    exercisesByBodyPart(selectedBodyPart).then((data) => {
      setExercises(data.exercises);
    });
  }, [selectedBodyPart]);

  return (
    <div>
      <h1>Add Workout</h1>
      <label htmlFor="input-bodyPart">Body Part</label>
      <Dropdown
        id="input-bodyPart"
        options={DROPDOWN_OPTIONS}
        onChange={handleFilterByBodyParts}
        value={DEFAULT_OPTION}
        placeholder="Select a body part"
      />
      <WorkoutForm
        workout={workout}
        onWorkoutChange={setWorkout}
        onWorkoutSubmit={handleWorkoutCreation}
        exercises={exercises}
        selectedExercises={selectedExercises}
        onAddSelectedExercise={setSelectedExercises}
      />
    </div>
  );
};

export default WorkoutAddPage;

// export const workoutAdd = (exercises, sets) =>
//   apiAuthentication
//     .post(`/workout`, exercises, sets)
//     .then((response) => response.data);
