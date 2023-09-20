import axios from "axios";

const API_KEY = "AIzaSyDlJ0LtBweqw3ujuX0FHhylF1Yl0ggpZAs";
// send http request to Firebase (POST)
// https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
// API KEY: Project Overview -> Project Setting
export const createUser = async (email, password) => {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};

export const login = async (email, password) => {
  const response = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );

  console.log(response.data);
};
