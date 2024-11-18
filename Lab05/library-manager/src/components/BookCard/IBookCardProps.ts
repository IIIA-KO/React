import { IBook } from "../../types/types";

export interface IBookCardProps {
    book: IBook,
    onUpdateBook: (book: Partial<IBook>) => void
    onDeleteBook: (id: number) => void
}