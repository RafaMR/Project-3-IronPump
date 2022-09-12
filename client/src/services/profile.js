import { apiAuthentication } from './authentication';

export const profileLoad = (id) =>
  apiAuthentication.get(`/profile/${id}`).then((response) => response.data);

export const profileEdit = (profile) =>
  apiAuthentication
    .patch(`/profile`, profile)
    .then((response) => response.data);
