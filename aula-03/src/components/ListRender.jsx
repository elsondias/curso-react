import { useState } from "react";

function ListRender() {
  const [list] = useState(["Goku", "Gohan", "Vegeta", "Piccolo"]);

  const [users, setUsers] = useState([
    { id: 1, name: "Goku", age: 30 },
    { id: 2, name: "Vegeta", age: 31 },
    { id: 3, name: "Gohan", age: 10 },
    { id: 4, name: "Piccolo", age: 140 },
  ]);

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
    </div>
  );
}

export default ListRender;
