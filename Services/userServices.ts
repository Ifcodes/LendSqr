import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getAllUsers = async (
  onSuccess: Function,
  onError: Function,
) => {
  try {
    const response = await axios.get(`${baseUrl}/api/v1/users`);
    onSuccess(response);
  } catch (error) {
    if (onError) onError(error);
  }
};

export const getUsersId = async (
  onSuccess: Function,
  onError: Function,
  params?: any
) => {
  try {
    const response = await axios.get(`${baseUrl}/api/v1/users/${params.id}`);
    localStorage.setItem("selectedUser", JSON.stringify(response));
    onSuccess(response);
  } catch (error) {
    if (onError) onError(error);
  }
};

