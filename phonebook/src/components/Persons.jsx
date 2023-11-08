import React from "react";
import PersonLine from "./PersonLine";

export default function Persons({ persons, handleDelete }) {
  return (
    <div>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (
          <PersonLine key={person.id} person={person} handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
}
