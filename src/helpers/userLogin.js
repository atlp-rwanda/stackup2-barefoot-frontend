import dotenv from 'dotenv';

dotenv.config();
const baseUrl = process.env.BASE_URL;
const login = async (user) => {
  let result = '';
  const url = `${baseUrl}/auth/login`;
  result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => error);
  return result;
};
export default login;
