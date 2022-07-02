import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

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

const defaultOption = 'Select a body part';

const WorkoutForm = ({ workout, onWorkoutChange, onWorkoutSubmit }) => {
  // We need to have access to the list of exercises, to have in the background
  // We are going to use the selected body part to filter the exercises that will be showed
  // useEffect() and use State() need to be imported
  // With useEffect() we will listen for any changes on the selected body part
  // If nothing is written we should show 5 exercises, these exercises should be updated
  // according to the user's search
  // Then we have to store the chosen exercises in the array that we have on the workout model
  // This should be done by pushing their ids into the array

  const handleWorkoutFormSubmission = (event) => {
    event.preventDefault();
    onWorkoutSubmit();
  };
  return (
    <form onSubmit={handleWorkoutFormSubmission}>
      <label htmlFor="input-name"> Workout Name</label>
      <input
        id="input-name"
        type="text"
        value={workout.name}
        onChange={(event) =>
          onWorkoutChange({ ...workout, name: event.target.value })
        }
      />
      <label htmlFor="input-bodyPart"> Body Part</label>
      <Dropdown
        options={dropdownOptions}
        //onChange={this._onSelect}
        value={defaultOption}
        placeholder="Select a body part"
      />
      ;
      <input
        id="input-bodyPart"
        type="text"
        name="bodyPart"
        value={workout.bodyPart}
        onChange={(event) =>
          onWorkoutChange({ ...workout, bodyPart: event.target.value })
        }
      />
      {/* <label htmlFor="input-gifUrl"> Gif Url</label>
      <input
        id="input-gifUrl"
        type="text"
        name="gifUrl"
        value={workout.gifUrl}
        onChange={(event) =>
            onWorkoutChange({ ...workout, gifUrl: event.target.value })
          }
      />
      <label htmlFor="input-equipment"> Equipment</label>
      <input
        id="input-equipment"
        type="text"
        name="equipment"
        value={workout.equipment}
        onChange={(event) => onWorkoutChange(event.target.name, event.target.value)}
      />
      <label htmlFor="input-exercises"> Exercises</label>
      <input
        id="input-exercises"
        type="text"
        name="exercises"
        value={workout.exercises}
        onChange={(event) => onWorkoutChange(event.target.name, event.target.value)}
      /> */}
      <button type="submit">Add to your workout</button>
    </form>
  );
};

export default WorkoutForm;
