import axios from "axios";
import { StorageService } from "../../../services";

export const login = async (email) => {
  const result = await axios.get("users");
  const verifiedUser = result.data.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );

  if (verifiedUser) {
    StorageService.setAuthKey(verifiedUser);
    return verifiedUser;
  }
  return false;
};
