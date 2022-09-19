import { http } from '~/services';

const getFilter = async (url, params, callback) => {
  try {
    const { data } = await http.GET(url, params);

    callback(data);
  } catch (error) {
    console.log({
      error,
    });
  }
};

export default getFilter;
