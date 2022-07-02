import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import BodyPartPage from '../pages/BodyPartPage';
import { Link, useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import AuthenticationContext from '../context/authentication';
import { exercisesByBodyPart } from '../services/exercise';
const dropdownOptions = [
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

const defaultOption = dropdownOptions[0];

const WorkoutForm = ({ workout, onWorkoutChange, onWorkoutSubmit }) => {
  // We need to have access to the list of exercises, to have in the background
  // We are going to use the selected body part to filter the exercises that will be showed
  // useEffect() and use State() need to be imported
  // With useEffect() we will listen for any changes on the selected body part
  // If nothing is written we should show 5 exercises, these exercises should be updated
  // according to the user's search
  // Then we have to store the chosen exercises in the array that we have on the workout model
  // This should be done by pushing their ids into the array

  const { user, setUser } = useContext(AuthenticationContext);

  const [exercises, setExercises] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [selectedBodyPart, setSelectedBodyPart] = useState(dropdownOptions[0]);

  useEffect(() => {
    exercisesByBodyPart(selectedBodyPart).then((data) => {
      console.log(data);
      setExercises(data.exercises);
    });
  }, [selectedBodyPart]);
  return (
    <>
      <form onSubmit={onWorkoutSubmit}>
        <label htmlFor="input-name"> Workout Name</label>
        <input
          id="input-name"
          type="text"
          value={workout.name}
          onChange={(event) =>
            onWorkoutChange({ ...workout, name: event.target.value })
          }
        />
        <label htmlFor="input-bodyPart">Body Part</label>
        <Dropdown
          options={dropdownOptions}
          // onChange={{ ...workout, bodyPart: this._onSelect }}
          onChange={(event) => {
            console.log(event);
            setSelectedBodyPart(event.value);
          }}
          value={defaultOption}
          placeholder="Select a body part"
        />
        {/* <input
        id="input-bodyPart"
        type="text"
        name="bodyPart"
        value={workout.bodyPart}
        onChange={(event) =>
          onWorkoutChange({ ...workout, bodyPart: event.target.value })
        }
      /> */}
        {exercises &&
          exercises.map((exercise) => (
            <div key={exercise.id}>
              <input
                type="checkbox"
                name="selectedExercise"
                onChange={(event) => {
                  console.log(exercise);
                  if (event.target.checked) {
                    /*
                    onWorkoutChange({
                      ...workout,
                      exercises: [...workout.exercises, exercise._id]
                    })
                      */

                    setSelectedExercises([
                      ...selectedExercises,
                      {
                        exercise: exercise._id,
                        repetitions: '',
                        weight: '',
                        sets: ''
                      }
                    ]);

                    onWorkoutChange({
                      ...workout,
                      exercises: selectedExercises
                    });
                  } else {
                    // here we should remove the exercise from the selectedExercises array
                    const filteredExercises = setSelectedExercises.filter(
                      (eachSelectedExercise) =>
                        eachSelectedExercise.exercise !== exercise._id
                    );
                    setSelectedExercises(filteredExercises);

                    onWorkoutChange({
                      ...workout,
                      exercises: selectedExercises
                    });
                  }
                }}
              />
              <h4>{exercise.name}</h4>
              <label htmlFor="input-sets">Number of sets</label>
              <input
                id="input-sets"
                type="number"
                min={0}
                max={5}
                name="sets"
                value={workout.sets}
                onChange={(event) => {
                  // if (selectedExercises.map(eachItem=> eachItem.exercise).includes(exercise._id)) {
                  const newArrayOfExercisesWithNewValueForSets =
                    selectedExercises.map((eachItem) => {
                      if (eachItem.exercise === exercise._id) {
                        return {
                          exercise: exercise._id,
                          sets: event.target.valueAsNumber
                        };
                      } else {
                        return { ...eachItem };
                      }
                    });
                  // })

                  // }

                  onWorkoutChange({
                    ...workout,
                    exercises: newArrayOfExercisesWithNewValueForSets
                  });
                }}
              />
              <label htmlFor="input-repetitions">Number of repetitions</label>
              <input
                id="input-repetitions"
                type="number"
                min={0}
                max={20}
                name="repetitions"
                value={workout.repetitions}
                onChange={(event) => {
                  // if (selectedExercises.map(eachItem=> eachItem.exercise).includes(exercise._id)) {
                  const newArrayOfExercisesWithNewValueForRepetitions =
                    selectedExercises.map((eachItem) => {
                      if (eachItem.exercise === exercise._id) {
                        return {
                          exercise: exercise._id,
                          repetitions: event.target.valueAsNumber
                        };
                      } else {
                        return { ...eachItem };
                      }
                    });
                  // })

                  // }

                  onWorkoutChange({
                    ...workout,
                    exercises: newArrayOfExercisesWithNewValueForRepetitions
                  });
                }}
              />
              <label htmlFor="input-weight">Weight</label>
              <input
                id="input-weight"
                type="number"
                min={0}
                name="weight"
                value={workout.weight}
                onChange={(event) => {
                  // if (selectedExercises.map(eachItem=> eachItem.exercise).includes(exercise._id)) {
                  const newArrayOfExercisesWithNewValueForWeight =
                    selectedExercises.map((eachItem) => {
                      if (eachItem.exercise === exercise._id) {
                        return {
                          exercise: exercise._id,
                          weight: event.target.valueAsNumber
                        };
                      } else {
                        return { ...eachItem };
                      }
                    });
                  // })

                  // }

                  onWorkoutChange({
                    ...workout,
                    exercises: newArrayOfExercisesWithNewValueForWeight
                  });
                }}
              />{' '}
            </div>
          ))}
        <button type="submit">Add to your workout</button>
      </form>

      {/* {(user && (
        <>
          <h1>{workout.bodyPart}</h1>
          {part &&
            part.map((exercises, index) => {
              return (
                <Link key={index} to={`/exercise/id/${exercises.id}`}>
                  <li>{exercises.name}</li>
                  <img src={exercises.gifUrl} alt={exercises.name} />
                </Link>
              );
            })}
        </>
      )) || (
        <>
          <h2>You need to be registered to access this page</h2>
          <Link to="/log-in">Log In</Link>
          <Link to="/register">Register</Link>
        </>
      )} */}
    </>
  );
};

export default WorkoutForm;
