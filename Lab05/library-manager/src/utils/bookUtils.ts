import { IBook } from "../types/types";

export const sortBooksByRating = (books: IBook[]): IBook[] => {
    return [...books].sort((a, b) => b.rating - a.rating);
}

export const filterReadBooks = (books: IBook[]): IBook[] => {
    return books.filter(book => book.isRead);
}

export const calculateAverageRating = (books: IBook[]): number => {
    const ratedBooks = books.filter(book => book.rating > 0);
    if (ratedBooks.length === 0) return 0;
    const sum = ratedBooks.reduce((acc, book) => acc + book.rating, 0);
    return Number((sum / ratedBooks.length).toFixed(1));
};