import { apiAuthentication } from './authentication';

//workoutSearch -  GET to '/workout/search' - Allows user to search for workouts.

export const workoutSearch = (filters) =>
  apiAuthentication
    .get(`/workout/search?${new URLSearchParams(filters).toString()}`)
    .then((response) => response.data);

//workoutsAll - GET to '/workout/all' - Loads all workouts available.

export const workoutsAll = () =>
  apiAuthentication.get('workout/all').then((response) => response.data);

//workoutLoad -  GET to '/workout/:id' - Loads single workout.

export const workoutLoad = (id) =>
  apiAuthentication.get(`/workout/${id}`).then((response) => response.data);

//workoutEdit -  PATCH to '/workout/:id' - Allows user to edit workout created by them. Authenticated usesr.

export const workoutEdit = (id, exercises, sets) =>
  apiAuthentication
    .patch(`/workout/${id}`, exercises, sets)
    .then((response) => response.data);

//workoutAdd -  POST to '/workout' - Allows user to create workout.

export const workoutAdd = (exercises, sets) =>
  apiAuthentication
    .post(`/workout`, exercises, sets)
    .then((response) => response.data);
