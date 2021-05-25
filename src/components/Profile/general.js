import axios from "axios";

export const countries = ["USA", "Canada", "Mexico"];
export const occupations = [
  "Student - Data Scientist",
  "Student - General Computer Science Major",
  "Graduate - Data Scientist",
  "Graduate - General Computer Science Major",
  "Professional - Data Scientist",
  "Professional - Software Engineer",
];

export const api = axios.create({
  baseURL: `http://192.168.4.22:5000/api/profile`,
  headers: {
    "Content-Type": "application/json",
  },
});
