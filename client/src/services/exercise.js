import { apiAuthentication } from './authentication';

export const exerciseSearch = (filters) =>
  apiAuthentication
    .get(`/exercise/search?${new URLSearchParams(filters).toString()}`)
    .then((response) => response.data);

export const exerciseList = () =>
  apiAuthentication.get('/exercise/list').then((response) => response.data);

export const bodyPartList = () =>
  apiAuthentication
    .get('/exercise/body-parts')
    .then((response) => response.data);

export const exercisesByBodyPart = (partName) =>
  apiAuthentication
    .get(`/exercise/part/${partName}`)
    .then((response) => response.data);

export const singleExercise = (id) =>
  apiAuthentication.get(`/exercise/id/${id}`).then((response) => response.data);
