import axios from "axios";

export const getAllUsers = async () =>
  await axios.get("http://localhost:3000/users");
