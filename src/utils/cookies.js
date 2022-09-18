export const addCookie = (name, value, expires) => {
  let cookieString = `${name}=${value}`;

  if (expires) {
    cookieString += `; expires=${new Date(expires).toUTCString()}`;
  }
  document.cookie = cookieString;
};

export const getItem = (key) => {
  const allCookie = document.cookie.split('; ');

  const cookie = allCookie.find((item) => item.startsWith(key));
  if (cookie) return cookie.replace(`${key}=`, '');

  return null;
};
