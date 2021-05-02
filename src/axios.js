import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-project-d6bad.cloudfunctions.net/api",
  // "http://localhost:5001/project-d6bad/us-central1/api",
});

export default instance;

// https://us-central1-project-d6bad.cloudfunctions.net/api
