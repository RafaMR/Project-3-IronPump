//import axios from 'axios';
//
//const api = axios.create({
//  baseURL: 'https://exercisedb.p.rapidapi.com',
//  headers: {
//    'X-RapidAPI-Key': 'a22ff582c1msh3f0289436cafaf3p1b84f9jsn11c68a575e6b',
//    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
//  }
//});
///*
//export const getAllExercises = async () => {
//  try {
//    const response = await api.get('/exercises');
//    return response.data;
//  } catch (error) {
//    console.log(error);
//  }
//};
//*/
//export const getAllExercises = () =>
//  api
//    .get('/exercises')
//    .then((res) => res.data)
//    .catch((err) => console.log(err));
//
//export const getAllBodyParts = () =>
//  api
//    .get('/exercises/bodyPartList')
//    .then((res) => res.data)
//    .catch((err) => console.log(err));
//
//export const getExerciseById = (id) =>
//  api.get(`/exercises/exercise/${id}`).then((res) => res.data);
