export const api = async ({ endpoint }) => {
  const URL = "https://fakestoreapi.com" + endpoint;
  try {
    const res = await fetch(URL);

    if (res.status >= 200 && res.status < 300) {
      const data = await res.json();
      return data;
    }
    throw res;
  } catch (e) {
    console.log(e);
    throw e;
  }
};
