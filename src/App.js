import React from "react"
import { Routes, Route } from "react-router-dom"
import CollectionPage from "./components/CollectionPage/CollectionPage"
import CollectionsPage from "./components/CollectionsPage/CollectionsPage"
import BookPage from "./components/BookPage/BookPage"
import MainPage from "./components/MainPage/MainPage"
import AddPage from "./components/AddPage/AddPage"
import EditPage from "./components/EditPage/EditPage"

export default function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/collections" element={<CollectionsPage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </React.Fragment>
  )
}
