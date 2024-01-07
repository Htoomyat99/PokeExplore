const timeOutForFetch = 5000;

const api = 'https://api.pokemontcg.io/v2/';

//fetchGet
export const fetchGet = async (route, signal = null) => {
  try {
    const respone = await fetch(api + route, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      signal: signal,
      timeOut: timeOutForFetch,
    });

    if (respone != null) {
      const jsonRes = await respone.json();
      return jsonRes;
    } else {
      console.log('Error', respone);
    }
  } catch (error) {
    console.log('fetchGetError >>>', error);
  }
  return null;
};

//fetchPost
export const fetchPost = async (route, data, signal = null) => {
  let respone = null;
  try {
    respone = await fetch(api + route, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
      signal: signal,
      timeout: timeOutForFetch,
    });

    if (respone != null) {
      const jsonRes = await respone.json();
      return jsonRes;
    }
  } catch (e) {
    console.log(e);
  }
  return null;
};
