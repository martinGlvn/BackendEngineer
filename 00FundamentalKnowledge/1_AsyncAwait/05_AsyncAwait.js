// Async_Await => Mejora sintactica de las promesas.

async function getTodos() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Something went wrong...");
    console.log(error);
  }
}

getTodos();

// Second Example Async Code =>
async function getPromiseForUserData() {
  const user = await fetchDataFromServer();
  return user;
}

const promise = getPromiseForUserData();
console.log(promise);
