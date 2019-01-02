const baseUrl = 'http://jservice.io/';

export const random = options => {
  const url = baseUrl + 'api/random';
  const promise = fetch(url).then(resp => {
    return resp.json();
  });

  return promise;
};
