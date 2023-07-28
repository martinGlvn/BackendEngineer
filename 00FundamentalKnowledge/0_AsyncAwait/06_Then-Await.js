// Examples .then vs await =>

// 1 [x]
fetchUser
  .then(function (user) {
    return fetchLocationForUser(user);
  })
  .then(function (location) {
    return fetchServerForLocation(location);
  })
  .then(function (server) {
    console.log(`The server is ${server}`);
  });

// 2 [v]
const user = await fetchUser();
const location = await fetchLocationForUser(user);
const server = await fetchServerForLocation(location);
console.log(`The server is ${server}`);
