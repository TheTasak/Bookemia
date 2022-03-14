import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import BooksPage from "./components/BooksPage"
import BookPage from "./components/BookPage"
import MainPage from "./components/MainPage"
import AddPage from "./components/AddPage"
import EditPage from "./components/EditPage"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/add" element={<AddPage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
    </div>
  )
}
