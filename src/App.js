import React from "react"
import { Routes, Route } from "react-router-dom"
import CollectionPage from "./components/CollectionPage"
import CollectionsPage from "./components/CollectionsPage"
import BookPage from "./components/BookPage"
import MainPage from "./components/MainPage"
import AddPage from "./components/AddPage"
import EditPage from "./components/EditPage"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </div>
  )
}
