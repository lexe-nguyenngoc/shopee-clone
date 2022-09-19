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

export const removeItem = (key) => {
  const allCookie = document.cookie.split('; ');

  const cookie = allCookie.find((item) => item.startsWith(key));
  if (cookie)
    document.cookie = `${cookie}; expires=${new Date(
      Date.now() - 60 * 1000
    ).toUTCString()}`;
};
