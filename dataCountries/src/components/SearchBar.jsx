import React from 'react'

export default function SearchBar({search, setSearch}) {
    

    return (
        <div>
            <label htmlFor="search">Find countries </label>
            <input type="text" name="search" id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
    )
}
