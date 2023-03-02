import axios from "axios";

export const getAlbums = async () => {
  const result = await axios.get("albums");
  return result.data;
};
