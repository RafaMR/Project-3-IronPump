import { apiAuthentication } from './authentication';

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
