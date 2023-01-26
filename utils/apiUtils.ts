import axios from "axios";

const baseUrl = process.env.DB_BASE_URL;

export const Get = async (
  actionUrl: string,
  onSuccess: Function,
  onError: Function
) => {
  console.log({ baseUrl });
  try {
    const response = await axios.get(`${baseUrl}/${actionUrl}`);
    onSuccess(response);
  } catch (error) {
    if (onError) onError(error);
  }
};
