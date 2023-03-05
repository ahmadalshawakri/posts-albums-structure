import axios from "axios";

export const getPosts = async () => {
  const result = await axios.get("posts");
  return result.data;
};
