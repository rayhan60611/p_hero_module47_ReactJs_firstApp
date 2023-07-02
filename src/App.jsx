import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div>
      <GetUsers></GetUsers>
    </div>
  );
}

function UserPrint(props) {
  return (
    <div style={{ border: "2px solid red", margin: "5px", padding: "10px" }}>
      <h3>{props.name}</h3>
      <h4>{props.email}</h4>
    </div>
  );
}

function GetUsers() {
  const [users, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UserPrint
          key={user.name}
          name={user.name}
          email={user.email}
        ></UserPrint>
      ))}
    </div>
  );
}

export default App;
