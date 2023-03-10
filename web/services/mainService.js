import axios from "axios";

export const getAllUsers = async () =>
  await axios.get("http://localhost:3000/users");

export const getAllUniversity = async () =>
  await axios.get("http://localhost:3000/university");

export const getUniversity = async (id) =>
  await axios.get(`http://localhost:3000/university/${id}`);
