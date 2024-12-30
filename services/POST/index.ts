import { api } from "@/config";
import axios from "axios";

export const loginUser = async (
  userName: string,
  password: string,
  accountType: string
) => {
    console.log({userName, password, accountType});
    
  const response = await axios
    .post(`${api.uri}/auth/login/${accountType}`, {
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
