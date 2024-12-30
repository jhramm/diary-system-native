import { api } from "@/config";
import axios from "axios";

export const loginUser = async (
  userName: string,
  password: string,
  accountType: string
) => {
  const response = await axios
    .post(`${api.uri}/login/${accountType}`, {
      username: userName,
      password: password,
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
      return e;
    });

  return response;
};
