import React, { useState } from 'react'
import SearchBar from './components/SearchBar'
import CountriesDisplay from './components/CountriesDisplay'

export default function App() {
  const [search, setSearch] = useState([])

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch} />
      <CountriesDisplay search={search} setSearch={setSearch} />
    </div>
  )
}
