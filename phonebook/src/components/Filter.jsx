import React from 'react'

export default function Filter({searchFilter, setSearchFilter}) {
    

    return (
        <div>
        <h2>Search</h2>
        <input
          type="text"
          value={searchFilter}
          onChange={(e) => setSearchFilter(e.target.value)}
        />
      </div>
    )
}
