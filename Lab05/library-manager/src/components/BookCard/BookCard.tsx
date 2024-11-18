import { IBookCardProps } from "./IBookCardProps";

export const BookCard = ({ book, onUpdateBook, onDeleteBook }: IBookCardProps) => {
    const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        onUpdateBook({ ...book, rating: Number(e.target.value) });
    }

    const handleReadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateBook({ ...book, isRead: e.target.checked });
    }

    return (
        <div className="border p-4 rounded shadow">
            <h3 className="text-xl font-bold">{book.title}</h3>
            <p className="text-gray-600">{book.author}</p>

            <div className="mt-4 flex items-center gap-2">
                <div className="flex-1">
                    <label className="block text-sm">Rating:</label>
                    <select
                        value={book.rating}
                        onChange={handleRatingChange}
                        className="border p-1"
                    >
                        {[0, 1, 2, 3, 4, 5].map((rating) => (
                            <option key={rating} value={rating}>
                                {rating} {rating === 1 ? 'star' : 'stars'}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="flex items-center gap-2">
                    <label className="text-sm">Read:</label>
                    <input
                        type="checkbox"
                        checked={book.isRead}
                        onChange={handleReadChange}
                        className="w-4 h-4"
                    />
                </div>
            </div>

            <button
                onClick={() => onDeleteBook(book.id)}
                className="mt-4 bg-red-500 text-white px-4 py-1 rounded w-full"
            >
                Видалити
            </button>
        </div>
    );
}