
import api from './apiConfig';

export const getAllComments = async () => {
  const resp = await api.get('/comments');
  return resp.data;
};

