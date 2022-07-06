import React, { useEffect, useState } from 'react';
import { workoutsAll } from '../services/workout';
import { workoutLoad } from '../services/workout';
import { Link } from 'react-router-dom';

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
              <Link to={`/workout/${workout._id}`}>
                <li>{workout.name}</li>
              </Link>
            </ul>
          );
        })}
    </div>
  );
}

export default AllWorkoutsPage;
