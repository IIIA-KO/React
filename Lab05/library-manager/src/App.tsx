import { useState } from 'react'
//import { BookCard } from './components/BookCard/BookCard'
import { Statistics } from './components/Statistics/Statistics'
import { BookFilter } from './components/BookFilter/BookFilter'
import { useDeleteBookMutation, useGetBooksQuery, useUpdateBookMutation } from './store/api'
import { LoadingError } from './components/LoadingError/LoadingError'
import { AddBookForm } from './components/AddBookForm/AddBookForm'
import { lazy, Suspense } from "react";

const BookCard = lazy(() => import('./components/BookCard/BookCard').then((module) => ({ default: module.BookCard })));

function App() {
  const { data: books, isLoading, error } = useGetBooksQuery()
  const [filter, setFilter] = useState('');

  const [updateBook] = useUpdateBookMutation()
  const [deleteBook] = useDeleteBookMutation()

  const filteredBooks = books?.filter(book =>
    book.title.toLowerCase().includes(filter.toLowerCase())
    || book.author.toLowerCase().includes(filter.toLowerCase())
  ) ?? [];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-6">Library Manager</h1>

      <LoadingError isLoading={isLoading} error={error} />

      <Statistics books={filteredBooks} />

      <BookFilter onFilterChange={setFilter} />

      <AddBookForm />

      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  )
}

export default App;
