import { useContext } from 'react';
import 'react-dropdown/style.css';
import AuthenticationContext from '../context/authentication';

import './WorkoutForm.scss';

const WorkoutForm = ({
  exercises,
  workout,
  onWorkoutChange,
  onWorkoutSubmit,
  selectedExercises,
  onAddSelectedExercise
}) => {
  const handleWorkoutNameChange = (event) =>
    onWorkoutChange({ ...workout, [event.target.name]: event.target.value });

  const handleWorkoutSubmit = (event) => {
    event.preventDefault();
    onWorkoutSubmit();
  };
  const { user, setUser } = useContext(AuthenticationContext);
  const handleExerciseSelection = (event) => {
    if (
      // checks if the checkbox was checked (from OFF to ON)
      // AND makes sure that the list of the exercises that were already selected does NOT include this selected exercise
      // in these cases it adds the exercise to the list of selected exercises
      event.target.checked &&
      !selectedExercises.map((item) => item.exercise).includes(event.target.id)
    ) {
      onAddSelectedExercise([
        ...selectedExercises,
        {
          exercise: event.target.id
        }
      ]);
    } else if (
      // if the checkbox was unchecked (from ON to OFF)
      // OR if the list of selected exercises for some reason already includes the selected exercise
      // then removes the selected exercise from the list of selected exercises
      !event.target.checked ||
      selectedExercises.map((item) => item.exercise).includes(event.target.id)
    ) {
      onAddSelectedExercise(
        selectedExercises.filter((item) => item.exercise !== event.target.id)
      );
    }
  };

  const handleExerciseDetails = (event) => {
    const newExercises = selectedExercises.map((item) => {
      if (item.exercise === event.target.id) {
        return {
          ...item,
          exercise: event.target.id,
          [event.target.name]: event.target.valueAsNumber
        };
      } else {
        return { ...item };
      }
    });

    onAddSelectedExercise(newExercises);
  };

  return (
    <>
      {(user && (
        <form onSubmit={handleWorkoutSubmit} className="workout-form">
          <label htmlFor="input-name"> Workout Name</label>
          <input
            type="text"
            id="input-name"
            value={workout.name}
            name="name"
            onChange={handleWorkoutNameChange}
          />

          {exercises &&
            exercises.map((eachDisplayedExercise) => (
              <div key={eachDisplayedExercise._id}>
                <img
                  src={eachDisplayedExercise.gifUrl}
                  alt={eachDisplayedExercise.name}
                  height="100px"
                  width="100px"
                />
                <input
                  type="checkbox"
                  name="exercise"
                  id={eachDisplayedExercise._id}
                  onChange={handleExerciseSelection}
                />
                <h4>{eachDisplayedExercise.name}</h4>
                <label htmlFor="input-sets">Number of sets</label>
                <input
                  id={eachDisplayedExercise._id}
                  type="number"
                  min={0}
                  max={5}
                  name="sets"
                  value={workout.sets}
                  onChange={handleExerciseDetails}
                />
                <label htmlFor="input-repetitions">Number of repetitions</label>
                <input
                  id={eachDisplayedExercise._id}
                  type="number"
                  min={0}
                  max={20}
                  name="repetitions"
                  value={workout.repetitions}
                  onChange={handleExerciseDetails}
                />
                <label htmlFor="input-weight">Weight</label>
                <input
                  id={eachDisplayedExercise._id}
                  type="number"
                  min={0}
                  name="weight"
                  value={workout.weight}
                  onChange={handleExerciseDetails}
                />
              </div>
            ))}
          <input type="submit" value="Create workout" />
        </form>
      )) || <h2>You need to be registered to access this page</h2>}
    </>
  );
};

export default WorkoutForm;
