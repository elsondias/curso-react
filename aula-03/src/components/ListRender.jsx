import { useState } from "react";

function ListRender() {
  const [list] = useState(["Goku", "Gohan", "Vegeta", "Piccolo"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Goku", age: 30 },
    { id: 2, name: "Vegeta", age: 31 },
    { id: 3, name: "Gohan", age: 10 },
    { id: 4, name: "Piccolo", age: 140 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4) + 1;

    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  };

  return (
    <div>
      {/* 4 - RENDERIZAÇÃO SEM KEY */}
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      {/* 5 - RENDERIZAÇÃO COM KEY*/}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
      {/* 6 - PREVIOUS STATE */}
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
}

export default ListRender;
