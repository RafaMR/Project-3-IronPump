import { apiAuthentication } from './authentication';

//workoutsAll - GET to '/workout/all' - Loads all workouts available.

export const workoutsAll = () =>
  apiAuthentication.get('workout/all').then((response) => response.data);

//workoutLoad -  GET to '/workout/:id' - Loads single workout.

export const workoutLoad = (id) => {
  let workout;
  return apiAuthentication.get(`/workout/${id}`).then((response) => {
    console.dir('WORKOUT', response.data);
    return response.data;
  });

  // If my workout objects looks like this:
  /* 
    { workout: 
      exercises: [
        {
          exercise: '123', // <- THIS is the id we want
          repetitions: 1,
          sets: 1,
          weight: 1,
          _id: '456'
        },
        {
          ...
        }
      ],
      name: 'a name',
      owner: {
        ...
      },
      _id: '789'
  
    }

    From this object, we want to map the array workout.exercises and get only the value of the 'exercise' field
*/
  //   workout = response.data;
  //   const ids = response.data.workout.exercises.map((item) => item.exercise);
  //   return apiAuthentication.get(
  //     `/exercise/get-multiple-exercises?ids=${ids}`
  //   );
  // })
  // .then((response) => {
  //   console.log(response.data);
  //   const exercises = response.data;
  //   return {
  //     workout,
  //     exercises
  //   };
  // });
};

//workoutEdit -  PATCH to '/workout/:id' - Allows user to edit workout created by them. Authenticated usesr.

export const workoutEdit = (id, exercises, sets) =>
  apiAuthentication
    .patch(`/workout/${id}`, exercises, sets)
    .then((response) => response.data);

//workoutDelete - DELETE to '/workout/:id' - Allow user to delete workout
export const workoutDelete = (id) =>
  apiAuthentication.delete(`/workout/${id}`).then((response) => response.data);

//workoutAdd -  POST to '/workout' - Allows user to create workout.

export const workoutAdd = (exercises, sets) =>
  apiAuthentication
    .post(`/workout`, exercises, sets)
    .then((response) => response.data);
