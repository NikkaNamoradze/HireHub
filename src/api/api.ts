import axios from "axios";
import { PayloadInterface } from "../types";

const request = async (url:string, payload:any) => {

  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY4MTM5NjEwNSwianRpIjoiM2M0OGU1MWQtODE3OS00OTI1LTg3ZWYtZjg5M2NkNDU2NmZlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYzZDUyYjhhYTVmOGM3Zjc3YjBiNzg1MCIsIm5iZiI6MTY4MTM5NjEwNSwiZXhwIjoxNjkwMDM2MTA1LCJhY2NvdW50X3R5cGUiOiJ1c2VyIn0.nMM0Tg0JBXGQmHa9KY1x8BNAX1okqclhPwLB35whgxw",
    },
  };

  const response = await axios.post(url, payload, header);

  return response.data;
};
export default request;