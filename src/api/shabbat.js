const baseUrl = 'http://localhost:5000/';

//Functions that will wrap around the endpoints
//no need for return if single line
export const getAllItems = () => {
  const url = baseUrl + 'api/items';
  return fetch(url).then(resp => resp.json());
}

export const getMeal = mealID => {
  const url = baseUrl + 'api/meals/' + mealID;
  return fetch(url).then(resp => resp.json());
}

//--- deprecated
// const baseUrl = 'http://jservice.io/';

// export const random = options => {
//   const url = baseUrl + 'api/random';
//   const promise = fetch(url).then(resp => {
//     return resp.json();
//   });
//
//   return promise;
// };
