import { calculateAverageRating, filterReadBooks } from "../../utils/bookUtils";
import { IStatisticsProps } from "./IStatisticsProps";

export const Statistics = ({ books }: IStatisticsProps) => {
    const totalBooks = books.length;
    const readBooks = filterReadBooks(books).length;
    const averageRating = calculateAverageRating(books);

    return (
        <div className="bg-gray-100 p-4 rounded-lg mb-6">
            <h2 className="text-xl font-bold mb-3">Statistics</h2>
            <div className="grid grid-cols-3 gap-4">
                <div>
                    <p className="text-gray-600">Total books</p>
                    <p className="text-2xl font-bold">{totalBooks}</p>
                </div>
                <div>
                    <p className="text-gray-600">Read books</p>
                    <p className="text-2xl font-bold">{readBooks}</p>
                </div>
                <div>
                    <p className="text-gray-600">Average rating</p>
                    <p className="text-2xl font-bold">{averageRating}</p>
                </div>
            </div>
        </div>
    )
}