const axios = require("axios").default;

async function getUser() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const { data: users } = await axios.get(url);

  return users.map((user) =>
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
  );
}

(async () => {
  const users = await getUser();
  for await (let v of users) {
    console.log(v.data.map((post) => post.title));
  }
})();
