
import api from './apiConfig';

export const getAllComments = async () => {
  const resp = await api.get("/comments");
  return resp.data;
};

export const postComment = async (id, contentData) => {
  const resp = await api.post(`/posts/${id}/comments`, {comment: contentData});
  return resp.data;
}