import axios from 'axios';

export const apiAuthentication = axios.create({
  baseURL: process.env.REACT_APP_REST_API_URL,
  withCredentials: true
});

export const registerUser = (body) =>
  apiAuthentication
    .post('/authentication/sign-up', body)
    .then((response) => response.data);

export const logInUser = (body) =>
  apiAuthentication
    .post('/authentication/sign-in', body)
    .then((response) => response.data);

export const signOutUser = () =>
  apiAuthentication
    .post('/authentication/sign-out')
    .then((response) => response.data);

export const loadUserInformation = () =>
  apiAuthentication.get('/authentication/me').then((response) => response.data);
