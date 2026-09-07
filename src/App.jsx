import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import PokemonDetailsPage from './pages/PokemonDetailsPage'

function App() {
  return (
    <main className="min-h-screen py-10 px-6">
      <h1 className="text-4xl text-center mb-8">Pokedex - Kanto</h1>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon-details/:id/" element={<PokemonDetailsPage />} />
      </Routes>

    </main>
  )
}

export default App
