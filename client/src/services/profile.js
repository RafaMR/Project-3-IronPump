import { apiAuthentication } from './authentication';

//import axios from 'axios';
//
//const apiAuthentication = axios.create({
//  baseURL: process.env.REACT_APP_REST_API_URL,
//  withCredentials: true
//});

export const profileSearch = (term) =>
  apiAuthentication
    .get(`/profile/search?term=${term}`)
    .then((response) => response.data);

export const profileLoad = (id) =>
  apiAuthentication.get(`/profile/${id}`).then((response) => response.data);

export const profileEdit = (profile) =>
  apiAuthentication
    .patch(`/profile`, profile)
    .then((response) => response.data);
