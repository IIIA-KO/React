import { useState } from 'react'

import { BookCard } from './components/BookCard/BookCard'
import { Statistics } from './components/Statistics/Statistics'
import { BoolFilter } from './components/BookFilter/BookFilter'
import { useAddBookMutation, useDeleteBookMutation, useGetBooksQuery, useUpdateBookMutation } from './store/api'

function App() {
  const [newBook, setNewBook] = useState({ title: '', author: '' })
  const { data: books, isLoading, error } = useGetBooksQuery()
  const [filter, setFilter] = useState('');
  
  const [addBook] = useAddBookMutation()
  const [updateBook] = useUpdateBookMutation()
  const [deleteBook] = useDeleteBookMutation()

  if (isLoading) return <div>Loading...</div>

  if (error) {
    if ('status' in error) {
      return <div>Error: {String(error.data)}</div>
    }
    return <div>Error: {error.message}</div>
  }

  if (!books) return <div>No data</div>

  const filteredBooks = books?.filter(book =>
    book.title.toLowerCase().includes(filter.toLowerCase())
    || book.author.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-6">Library Manager</h1>

      <Statistics books={books} />

      <BoolFilter onFilterChange={setFilter} />

      <form onSubmit={(e) => {
        e.preventDefault()
        addBook({ ...newBook, rating: 0, isRead: false })
        setNewBook({ title: '', author: '' })
      }} className="mb-8">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Book title"
            value={newBook.title}
            onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
            className="border p-2 flex-1"
          />
          <input
            type="text"
            placeholder="Author"
            value={newBook.author}
            onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
            className="border p-2 flex-1"
          />
          <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded">
            Add Book
          </button>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks?.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onUpdateBook={updateBook}
            onDeleteBook={deleteBook}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
