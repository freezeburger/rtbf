
export const connect = (credentials) => {
  const URL = 'http://localhost:8000/auth/login';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  };

  return fetch(URL, options)
    .then((res) => res.json())
    //.then((data) => console.table(data));
};
