import React from 'react'

export default function PersonForm({handleSubmit, newPerson, setNewPerson}) {
    

    return (
        <div>
        <h2>New</h2>
        <form onSubmit={handleSubmit}>
          <div>
            name:{" "}
            <input
              value={newPerson.name}
              onChange={(e) =>
                setNewPerson((curr) => ({ ...curr, name: e.target.value }))
              }
            />
          </div>
          <div>
            number:{" "}
            <input
              value={newPerson.number}
              onChange={(e) =>
                setNewPerson((curr) => ({ ...curr, number: e.target.value }))
              }
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    )
}
