const baseUrl = 'https://www.hebcal.com/shabbat/?cfg=json&'

export const shabbatTime = options => {
  const url = baseUrl + 'zip=10025&m=50';
  const promise = fetch(url).then(resp => {
    return resp.json();
  });

  return promise;
};
