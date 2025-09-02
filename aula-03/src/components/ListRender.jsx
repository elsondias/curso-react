import { useState } from "react";

function ListRender() {
    const [list] = useState(["Goku", "Gohan", "Vegeta", "Piccolo"]);

  return <div>
    <ul>
        {list.map((item) => (
            <li>{item}</li>
        ))}
    </ul>
  </div>;
}

export default ListRender;
