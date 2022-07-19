export default function authHeader() {
  // const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('auth-token');

  return {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
    Authorization: `${token}`,
  };
}
