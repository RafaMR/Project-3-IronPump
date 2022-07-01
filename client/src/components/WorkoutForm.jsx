const WorkoutForm = ({ workout, onWorkoutChange, onWorkoutSubmit }) => {
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
      <button type="submit"></button>
    </form>
  );
};

export default WorkoutForm;
