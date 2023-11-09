import usersData from "../data/users.json";
import { BreadCrumb } from "../components";

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  // *Handle data on server side components
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
      cache: "no-store",
    });
    // const users: User[] = usersData;
    const users: User[] = await res.json();

    return (
      <>
        <BreadCrumb>users</BreadCrumb>
        <div>
          <small>{new Date().toLocaleTimeString()}</small>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <b>{user.name}</b> : {user.email.toLowerCase()}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  } catch (err) {
    console.log("Network error:", err);
  }
};

export default UsersPage;
