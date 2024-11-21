import { useState } from 'react'
import { BookCard } from './components/BookCard/BookCard'
import { Statistics } from './components/Statistics/Statistics'
import { BookFilter } from './components/BookFilter/BookFilter'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAddBookMutation, useDeleteBookMutation, useGetBooksQuery, useUpdateBookMutation } from './store/api'
import { addBookSchema } from './schemas/bookSchema'
import { useForm } from 'react-hook-form'

function App() {
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

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(addBookSchema),
    defaultValues: {
      title: '',
      author: '',
    }
  })

  const onSubmit = (data: any) => {
    addBook({ ...data, rating: 0, isRead: false })
    reset();
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl mb-6">Library Manager</h1>

      <Statistics books={filteredBooks} />

      <BookFilter onFilterChange={setFilter} />

      <form onSubmit={handleSubmit(onSubmit)} className="mb-8">
        <div className="flex gap-4">
          <input
            {...register('title')}
            type="text"
            placeholder="Book title"
            className="border p-2 flex-1"
          />
          {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          <input
            {...register('author')}
            type="text"
            placeholder="Author"
            className="border p-2 flex-1"
          />
          {errors.author && <p className="text-red-500">{errors.author.message}</p>}
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
