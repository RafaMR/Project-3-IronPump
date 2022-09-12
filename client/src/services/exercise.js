import { apiAuthentication } from './authentication';

export const exerciseList = () =>
  apiAuthentication.get('/exercise/list').then((response) => response.data);

export const bodyPartList = () =>
  apiAuthentication
    .get('/exercise/body-parts')
    .then((response) => response.data);

export const exercisesByBodyPart = (partName, page) =>
  apiAuthentication
    .get(`/exercise/part/${partName}?page=${page}`)
    .then((response) => response.data);

export const singleExercise = (id) =>
  apiAuthentication.get(`/exercise/id/${id}`).then((response) => response.data);
