import { calculateAverageRating, filterReadBooks } from "../../utils/bookUtils";
import { IStatisticsProps } from "./IStatisticsProps";
import { memo, useMemo } from "react";

export const Statistics = memo(({ books }: IStatisticsProps) => {
    const stats = useMemo(() => ({
        totalBooks: books.length,
        readBooks: filterReadBooks(books).length,
        averageRating: calculateAverageRating(books),
    }), [books]);

    return (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-bold mb-3">Statistics</h2>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <p className="text-gray-600">Total books</p>
                    <p className="text-2xl font-bold">{stats.totalBooks}</p>
                </div>
                <div>
                    <p className="text-gray-600">Read books</p>
                    <p className="text-2xl font-bold">{stats.readBooks}</p>
                </div>
                <div>
                    <p className="text-gray-600">Average rating</p>
                    <p className="text-2xl font-bold">{stats.averageRating}</p>
                </div>
            </div>
        </div>
    )
});