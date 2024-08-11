import { useEffect, useState } from "react";

interface CacheData {
  [key: string]: User;
}
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
}
interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
interface Geo {
  lat: string;
  lng: string;
}

const cacheData: CacheData = {};

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState<number>(1);
  const max = 10;

  console.log({ cacheData });
  useEffect(() => {
    if (cacheData[`user-${id}`]) {
      setUser(cacheData[`user-${id}`]);
      return;
    }

    setLoading(true);
    fetchUsers(id)
      .then((data) => {
        setUser(data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    if (!cacheData[`user-${id + 1}`] && id < max) {
      fetchUsers(id + 1);
    }
  }, [id]);

  const fetchUsers = (id: number) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        cacheData[`user-${id}`] = data;
        return data;
      });
  };

  const nextHandler = () => {
    if (id < max) {
      setId(id + 1);
    }
  };

  const prevHandler = () => {
    if (id > 1) {
      setId(id - 1);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div>
        <h1 className="text-4xl mt-5">User {id}</h1>

        {loading && <p>loading...</p>}
        {!loading && (
          <div className="mt-5">
            <p className="font-bold">Name: {user?.name}</p>
            <p className="font-bold">email: {user?.email}</p>
          </div>
        )}

        <div className="space-x-5 mt-3">
          <button className="border  px-4 rounded-sm" onClick={prevHandler}>
            Prev
          </button>
          <button className="border  px-4 rounded-sm" onClick={nextHandler}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
