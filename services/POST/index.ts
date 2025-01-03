import { api } from "@/config";
import axios from "axios";

export const loginUser = async (
  userName: string,
  password: string,
  accountType: string
) => {
    console.log({userName, password, accountType});
    try {
      const response = await fetch(`${api.uri}/auth/login/${accountType}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userName: userName, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData);
        return errorData;
      }

      const data = await response.json();
      return data;;
    
    } catch (error) {
      console.error("Network Error:", error);
      return error;
    }
};
