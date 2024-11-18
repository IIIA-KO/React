import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IBook } from "../types/types";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['Books'],
    endpoints: (builder) => ({
        getBooks: builder.query<IBook[], void>({
            query: () => '/books',
            providesTags: ['Books'],
        }),
        addBook: builder.mutation<IBook, Partial<IBook>>({
            query: (newBook) => ({
                url: '/books',
                method: 'POST',
                body: newBook,
            }),
            invalidatesTags: ['Books'],
        }),
        updateBook: builder.mutation<IBook, Partial<IBook>>({
            query: ({ id, ...rest }) => ({
                url: `/books/${id}`,
                method: 'PUT',
                body: rest,
            }),
            invalidatesTags: ['Books'],
        }),
        deleteBook: builder.mutation<void, number>({
            query: (id) => ({
                url: `/books/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Books'],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation
} = api;