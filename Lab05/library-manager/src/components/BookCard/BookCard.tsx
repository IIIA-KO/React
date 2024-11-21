import { IBookCardProps } from "./IBookCardProps";
import { memo, useCallback } from "react";

export const BookCard = memo(({ book, onUpdateBook, onDeleteBook }: IBookCardProps) => {
    const handleRatingChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        onUpdateBook({ ...book, rating: Number(e.target.value) });
    }, [book, onUpdateBook]);

    const handleReadChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateBook({ ...book, isRead: e.target.checked });
    }, [book, onUpdateBook]);

    const handleDelete = useCallback(() => {
        onDeleteBook(book.id);
    }, [book.id, onDeleteBook]);

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
                onClick={handleDelete}
                className="mt-4 bg-red-500 text-white px-4 py-1 rounded w-full"
            >
                Delete
            </button>
        </div>
    );
});