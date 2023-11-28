const axios = require("axios").default;

const getUser = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";

  const { data: users } = await axios.get(url);

  return users;
};

async function* getPostsByUser(users) {
  const url = "https://jsonplaceholder.typicode.com/posts";

  for (let i = 0; i < users.length; i++) {
    const { data: posts } = await axios.get(`${url}?userId=${users[i].id}`);

    yield posts;
  }
}

getUser()
  .then(async (user) => {
    // const userIterator = getPostsByUser(user);
    // await userIterator.next();
    // await userIterator.next();
    // console.log((await userIterator.next()).value);

    for await (let v of getPostsByUser(user)) {
      console.log(v.map((d) => d.title));
    }
  })
  .catch((e) => {
    console.log(e);
  });
