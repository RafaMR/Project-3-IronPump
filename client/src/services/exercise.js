import apiAuthentication from './authentication';

export const exerciseSearch = (filters) =>
  apiAuthentication
    .get(`/exercise/search?${new URLSearchParams(filters).toString()}`)
    .then((response) => response.data);
