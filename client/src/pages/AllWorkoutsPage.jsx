import React, { useContext, useEffect, useState } from 'react';
import { workoutsAll } from '../services/workout';
import { workoutLoad } from '../services/workout';
import { Link } from 'react-router-dom';
import AuthenticationContext from '../context/authentication';

import './AllWorkoutsPage.scss';

function AllWorkoutsPage() {
  const [workouts, setWorkouts] = useState([]);
  const { user, setUser } = useContext(AuthenticationContext);

  useEffect(() => {
    workoutsAll().then((data) => {
      setWorkouts(data.workouts);
      console.log(data.workouts);
    });
  }, []);

  return (
    <div className="workouts-page">
      {(user && (
        <>
          <h1>List of all workouts created so far</h1>
          {workouts &&
            workouts.map((workout, index) => {
              return (
                <ul key={index} className="workouts">
                  <Link to={`/workout/${workout._id}`}>
                    <li>
                      <h3>{workout.name}</h3>
                      <img
                        src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2187&q=80"
                        alt="workoutimg"
                      />
                    </li>
                  </Link>
                </ul>
              );
            })}
        </>
      )) || (
        <>
          <h2>You need to be registered to access this page</h2>
          <Link to="/log-in">Log In</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </div>
  );
}

export default AllWorkoutsPage;
