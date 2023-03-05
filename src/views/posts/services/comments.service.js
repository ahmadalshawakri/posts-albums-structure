import axios from "axios";

export const getComments = async () => {
  const result = await axios.get("comments");
  return result.data;
};
