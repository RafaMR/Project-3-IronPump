import React, { useEffect, useState } from 'react';
import { workoutsAll } from '../services/workout';

function AllWorkoutsPage() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    workoutsAll().then((data) => {
      setWorkouts(data.workouts);
      console.log(data.workouts);
    });
  }, []);

  return (
    <div>
      <h1>List of all workouts created so far</h1>
      {workouts &&
        workouts.map((workout, index) => {
          return (
            <ul key={index}>
              <li>{workout.name}</li>
            </ul>
          );
        })}
    </div>
  );
}

export default AllWorkoutsPage;
