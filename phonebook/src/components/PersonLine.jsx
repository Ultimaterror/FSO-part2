import React from "react";

export default function PersonLine({ person: { name, number, id } , handleDelete}) {
  return (
    <p>
      {name} {number} <button onClick={() => handleDelete(id)}>Delete</button>
    </p>
  );
}
