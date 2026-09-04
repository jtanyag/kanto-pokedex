import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <section className="search mb-4 flex justify-center items-center gap-4">
      <label htmlFor="search">Search by name:</label>
      <input
        className="input input-accent bg-secondary text-black"
        type="text"
        id="search"
        name="search"
        aria-label="Search Pokemon by name"
        placeholder="e.g. Pikachu"
        onChange={event => setSearchTerm(event.target.value)}
        value={searchTerm}
      />
    </section>
  )
}

export default Search