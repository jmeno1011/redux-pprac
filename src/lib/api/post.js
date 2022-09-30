import instance from "./instance";

export const listPosts = () => {
  return instance.get("/todos");
};

export const readPost = (id) => instance.get(`/todos/${id}`);
