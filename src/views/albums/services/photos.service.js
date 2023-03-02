import axios from "axios";

export const getPhotos = async () => {
  const result = await axios.get("photos");
  return result.data;
};
